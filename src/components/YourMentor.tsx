import React from 'react';
import { Plus, UserPlus } from 'lucide-react';

interface Mentor {
  name: string;
  role: string;
  avatar: string;
  isOnline?: boolean;
}

const mentors: Mentor[] = [
  { 
    name: "Padhang Satrio", 
    role: "Mentor", 
    avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    isOnline: true 
  },
  { 
    name: "Zakir Horizontal", 
    role: "Mentor", 
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    isOnline: true 
  },
  { 
    name: "Leonardo Samsul", 
    role: "Mentor", 
    avatar: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
    isOnline: true 
  }
];

export function YourMentor() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Your mentor</h3>
        <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <Plus size={16} />
        </button>
      </div>
      
      <div className="space-y-4">
        {mentors.map((mentor, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src={mentor.avatar} 
                  alt={mentor.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {mentor.isOnline && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div>
                <p className="font-medium text-gray-900 text-sm">{mentor.name}</p>
                <p className="text-xs text-gray-500">{mentor.role}</p>
              </div>
            </div>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
              <UserPlus size={12} />
              Follow
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="w-full text-center text-indigo-600 text-sm font-medium hover:text-indigo-700">
          See All
        </button>
      </div>
    </div>
  );
}