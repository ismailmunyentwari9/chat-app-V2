import React from 'react';
import { GraduationCap, Users, Shield, ArrowRight, BookOpen, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-800">ALU Connect</span>
          </div>
          <div className="space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
            <Link
              to="/signup"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Join ALU Connect
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Connect with the ALU Community
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your dedicated platform for connecting with fellow students, faculty, and staff at African Leadership University. 
            Collaborate on projects, share ideas, and build lasting relationships.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg"
          >
            <span>Join Your Community</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Student Communities</h3>
            <p className="text-gray-600">
              Connect with study groups, clubs, and academic communities across ALU campuses.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Academic Collaboration</h3>
            <p className="text-gray-600">
              Work together on assignments, share resources, and engage in academic discussions.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Globe2 className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Pan-African Network</h3>
            <p className="text-gray-600">
              Connect with students and faculty across all ALU campuses in Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}