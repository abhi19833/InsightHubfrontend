import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Shield,
  Brain,
  Users,
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Get intelligent feedback on your documents with AI-driven completeness scoring and suggestions.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Seamlessly collaborate with your team members and track project progress in real-time.",
  },
  {
    icon: FileText,
    title: "Document Management",
    description:
      "Organize SRS, UML diagrams, reports, and demo plans in one centralized location.",
  },
  {
    icon: CheckCircle,
    title: "Task Tracking",
    description:
      "Assign tasks, set deadlines, and monitor progress with intuitive task management.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Your project data is protected with enterprise-grade security and regular backups.",
  },
  {
    icon: Zap,
    title: "Smart Alerts",
    description:
      "Never miss deadlines with intelligent notifications and progress reminders.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CS Student, MIT",
    content:
      "GradGuard helped our team stay organized and the AI feedback was incredibly helpful for improving our documentation.",
    rating: 5,
  },
  {
    name: "Alex Rodriguez",
    role: "Engineering Student, Stanford",
    content:
      "The project tracking features are amazing. We never missed a deadline and the collaboration tools are top-notch.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "IT Student, CMU",
    content:
      "The AI analysis caught issues in our SRS document that we completely missed. Saved us from major problems later.",
    rating: 5,
  },
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const TestimonialCard = ({ rating, content, name, role }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg">
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-6 italic">"{content}"</p>
    <div>
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  </div>
);

// --- Main Page Component ---

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/*Hero Section*/}
      <header className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-white/20 backdrop-blur-lg rounded-2xl">
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              GradGuard
              <span className="block text-2xl md:text-3xl font-normal text-blue-100 mt-2">
                AI-Powered Project Tracker
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline your final year project with intelligent document
              analysis, seamless team collaboration, and AI-driven insights that
              ensure project success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/*Features Section*/}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need for Project Success
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From AI-powered document analysis to seamless team
                collaboration, GradGuard provides all the tools you need to
                excel in your final year project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How GradGuard Works
              </h2>
              <p className="text-xl text-gray-600">
                Get started in minutes with our intuitive workflow
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Create Your Project
                </h3>
                <p className="text-gray-600">
                  Set up your final year project and invite your team members to
                  collaborate.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Upload Documents
                </h3>
                <p className="text-gray-600">
                  Add your SRS, UML diagrams, reports, and other project
                  documents for AI analysis.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Get AI Insights
                </h3>
                <p className="text-gray-600">
                  Receive intelligent feedback, completeness scores, and
                  improvement suggestions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Loved by Students Worldwide
              </h2>
              <p className="text-xl text-gray-600">
                See what students are saying about GradGuard
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/*CTA Section*/}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-emerald-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Final Year Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of students who are already using GradGuard to
              streamline their projects and achieve better results with
              AI-powered insights.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Start Your Free Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      {/*Footer*/}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">GradGuard</span>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-4">
            © 2024 GradGuard. Empowering students to achieve project excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
