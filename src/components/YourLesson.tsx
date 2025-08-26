import React from 'react';
import { ArrowRight } from 'lucide-react';

export function YourLesson() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Your Lesson</h3>
        <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">See all</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-100">
              <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Mentor</th>
              <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
              <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Desc</th>
              <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2" 
                    alt="Padhang Satrio"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Padhang Satrio</p>
                    <p className="text-sm text-gray-500">2/16/2004</p>
                  </div>
                </div>
              </td>
              <td className="py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  UI/UX DESIGN
                </span>
              </td>
              <td className="py-4">
                <p className="text-sm text-gray-900">Understand Of UI/UX Design</p>
              </td>
              <td className="py-4">
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <ArrowRight size={16} className="text-gray-400" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}