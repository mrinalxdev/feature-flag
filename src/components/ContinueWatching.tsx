import React from 'react';
import { Heart, MoreHorizontal } from 'lucide-react';

interface Course {
  title: string;
  category: string;
  categoryColor: string;
  instructor: string;
  instructorRole: string;
  thumbnail: string;
  instructorAvatar: string;
}

const courses: Course[] = [
  {
    title: "Beginner's Guide to Becoming a Professional Front-End Developer",
    category: "FRONT END",
    categoryColor: "text-blue-500",
    instructor: "Leonardo samsul",
    instructorRole: "Mentor",
    thumbnail: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=240",
    instructorAvatar: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
  },
  {
    title: "Optimizing User Experience with the Best UI/UX Design",
    category: "UI/UX DESIGN",
    categoryColor: "text-purple-500",
    instructor: "Bayu Saito",
    instructorRole: "Mentor",
    thumbnail: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=240",
    instructorAvatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
  },
  {
    title: "Reviving and Refresh Company Image",
    category: "BRANDING",
    categoryColor: "text-pink-500",
    instructor: "Padhang Satrio",
    instructorRole: "Mentor",
    thumbnail: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=240",
    instructorAvatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
  }
];

export function ContinueWatching() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group">
          <div className="relative">
            <img 
              src={course.thumbnail} 
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <button className="absolute top-3 right-3 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Heart size={16} />
            </button>
          </div>
          <div className="p-4">
            <div className={`text-xs font-medium mb-2 ${course.categoryColor}`}>
              {course.category}
            </div>
            <h4 className="font-semibold text-gray-900 mb-3 line-clamp-2 leading-snug">
              {course.title}
            </h4>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img 
                  src={course.instructorAvatar} 
                  alt={course.instructor}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{course.instructor}</p>
                  <p className="text-xs text-gray-500">{course.instructorRole}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}