import React from 'react';
import { Home, Mail, BookOpen, FileText, Users, Settings, LogOut } from 'lucide-react';

interface Friend {
  name: string;
  role: string;
  avatar: string;
}

const friends: Friend[] = [
  { name: "Bagas Mahpie", role: "Friend", avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2" },
  { name: "Sir Dandy", role: "Old Friend", avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2" },
  { name: "Jhon Tosan", role: "Friend", avatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2" }
];

export function Sidebar() {
  return (
    <div className="w-64 bg-white h-full flex flex-col border-r border-gray-100">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Coursue</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        {/* Overview Section */}
        <div className="mb-8">
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Overview</h3>
          <div className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-indigo-600 bg-indigo-50 rounded-lg font-medium">
              <Home size={20} />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
              <Mail size={20} />
              Inbox
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
              <BookOpen size={20} />
              Lesson
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
              <FileText size={20} />
              Task
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
              <Users size={20} />
              Group
            </a>
          </div>
        </div>

        {/* Friends Section */}
        <div className="mb-8">
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Friends</h3>
          <div className="space-y-3">
            {friends.map((friend, index) => (
              <div key={index} className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                <img 
                  src={friend.avatar} 
                  alt={friend.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{friend.name}</p>
                  <p className="text-xs text-gray-500">{friend.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Settings Section */}
        <div>
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Settings</h3>
          <div className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
              <Settings size={20} />
              Setting
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <LogOut size={20} />
              Logout
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}