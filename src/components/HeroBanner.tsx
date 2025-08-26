import React from 'react';
import { ArrowRight } from 'lucide-react';

export function HeroBanner() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 rounded-2xl p-8 mb-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute top-16 right-24 w-32 h-32 bg-white opacity-5 rounded-full"></div>
      
      <div className="relative z-10">
        <div className="text-sm font-medium text-white/80 mb-2 uppercase tracking-wider">Online Course</div>
        <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
          Sharpen Your Skills with<br />
          Professional Online Courses
        </h2>
        <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors group">
          Join Now
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}