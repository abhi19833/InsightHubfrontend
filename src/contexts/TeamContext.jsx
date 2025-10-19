import React, { createContext, useContext, useState, useCallback } from "react";
import toast from "react-hot-toast";
import api from "../api/axiosInstance"; // Your configured axios instance

const TeamContext = createContext();

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) throw new Error("useTeam must be used within a TeamProvider");
  return context;
};

export const TeamProvider = ({ children }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [invitations, setInvitations] = useState([]);

  /** Fetch all team members from API */
  const fetchTeamMembers = useCallback(async () => {
    try {
      const response = await api.get("/team/members");
      setTeamMembers(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch team members"
      );
      console.error(error);
    }
  }, []);

  /** Fetch all pending invitations from API */
  const fetchInvitations = useCallback(async () => {
    try {
      const response = await api.get("/team/invitations");
      setInvitations(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch invitations"
      );
      console.error(error);
    }
  }, []);

  /** Invite a team member */
  const inviteTeamMember = useCallback(
    async (email, projectId, role = "member", message = "") => {
      try {
        const response = await api.post("/team/invite", {
          email,
          projectId,
          role,
          message,
        });
        const data = response.data;

        if (data.type === "new_user") {
          setInvitations((prev) => [...prev, data.invitation]);
          toast.success(`Invitation sent to ${email}!`);
        } else if (data.type === "existing_user") {
          toast.success(`User ${email} added to project!`);
        }

        await fetchTeamMembers();
        await fetchInvitations();
        return data;
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to send invitation"
        );
        throw error;
      }
    },
    [fetchTeamMembers, fetchInvitations]
  );

  /** Accept an invitation (API-based) */
  const acceptInvitation = useCallback(
    async (invitationId) => {
      try {
        await api.post(`/team/invitations/${invitationId}/accept`);
        toast.success("Invitation accepted successfully!");
        await fetchTeamMembers();
        await fetchInvitations();
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to accept invitation"
        );
        throw error;
      }
    },
    [fetchTeamMembers, fetchInvitations]
  );

  /** Cancel an invitation */
  const cancelInvitation = useCallback(async (invitationId) => {
    try {
      await api.delete(`/team/invitations/${invitationId}`);
      setInvitations((prev) => prev.filter((inv) => inv.id !== invitationId));
      toast.success("Invitation cancelled successfully!");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to cancel invitation"
      );
      throw error;
    }
  }, []);

  /** Remove a team member */
  const removeTeamMember = useCallback(
    async (memberId) => {
      try {
        const member = teamMembers.find((m) => m.id === memberId);
        if (!member) return;

        if (member.role === "admin") {
          toast.error("Cannot remove admin user");
          return;
        }

        await api.delete(`/team/members/${memberId}`);
        setTeamMembers((prev) => prev.filter((m) => m.id !== memberId));
        toast.success("Team member removed successfully!");
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to remove member");
        throw error;
      }
    },
    [teamMembers]
  );

  /** Update member role */
  const updateMemberRole = useCallback(async (memberId, newRole) => {
    try {
      await api.patch(`/team/members/${memberId}/role`, { role: newRole });
      setTeamMembers((prev) =>
        prev.map((m) => (m.id === memberId ? { ...m, role: newRole } : m))
      );
      toast.success(`Role updated to ${newRole}`);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update role");
      throw error;
    }
  }, []);

  /** Get members by project */
  const getMembersByProject = useCallback(
    (projectId) =>
      teamMembers.filter((m) => m.projects?.some((p) => p._id === projectId)),
    [teamMembers]
  );

  /** Get invitations by project */
  const getInvitationsByProject = useCallback(
    (projectId) =>
      invitations.filter((inv) => inv.projectId?._id === projectId),
    [invitations]
  );

  const value = {
    teamMembers,
    invitations,
    fetchTeamMembers,
    fetchInvitations,
    inviteTeamMember,
    acceptInvitation,
    cancelInvitation,
    removeTeamMember,
    updateMemberRole,
    getMembersByProject,
    getInvitationsByProject,
  };

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
};
