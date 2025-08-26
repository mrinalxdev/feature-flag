import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface CourseCard {
  title: string;
  watched: number;
  total: number;
  color: string;
  icon: string;
}

const courses: CourseCard[] = [
  { title: "UI/UX Design", watched: 2, total: 8, color: "bg-purple-100 text-purple-600", icon: "🎨" },
  { title: "Branding", watched: 3, total: 8, color: "bg-pink-100 text-pink-600", icon: "🏷️" },
  { title: "Front End", watched: 6, total: 12, color: "bg-blue-100 text-blue-600", icon: "💻" }
];

export function CourseProgress() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Continue Watching</h3>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ChevronLeft size={20} className="text-gray-400" />
          </button>
          <button className="p-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center text-2xl mb-3`}>
              {course.icon}
            </div>
            <p className="text-xs text-gray-500 mb-1">{course.watched}/{course.total} watched</p>
            <h4 className="font-semibold text-gray-900">{course.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}