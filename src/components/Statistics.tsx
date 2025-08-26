import { MoreHorizontal } from 'lucide-react';

export function Statistics() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Statistic</h3>
        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
          <MoreHorizontal size={16} className="text-gray-400" />
        </button>
      </div>
      
      {/* Circular Progress */}
      <div className="flex justify-center mb-6">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#8b5cf6"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${32 * 2.51} ${(100 - 32) * 2.51}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2" 
                alt="Jason"
                className="w-12 h-12 rounded-full object-cover mx-auto mb-1"
              />
            </div>
          </div>
          <div className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            32%
          </div>
        </div>
      </div>

      {/* Greeting */}
      <div className="text-center mb-6">
        <h4 className="font-semibold text-gray-900 mb-1">Good Morning Jason 🔥</h4>
        <p className="text-sm text-gray-500">Continue your learning to achieve your target!</p>
      </div>

      {/* Chart */}
      <div className="space-y-2 mb-4">
        <div className="flex items-end justify-between h-20">
          <div className="flex flex-col justify-end h-full">
            <div className="bg-purple-200 w-6 h-8 rounded-sm"></div>
          </div>
          <div className="flex flex-col justify-end h-full">
            <div className="bg-purple-600 w-6 h-12 rounded-sm"></div>
          </div>
          <div className="flex flex-col justify-end h-full">
            <div className="bg-purple-200 w-6 h-6 rounded-sm"></div>
          </div>
          <div className="flex flex-col justify-end h-full">
            <div className="bg-purple-600 w-6 h-16 rounded-sm"></div>
          </div>
          <div className="flex flex-col justify-end h-full">
            <div className="bg-purple-200 w-6 h-10 rounded-sm"></div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 px-1">
          <span>1-10 Aug</span>
          <span>11-20 Aug</span>
          <span>21-30 Aug</span>
        </div>
      </div>

      {/* Y-axis labels */}
      <div className="flex justify-between text-xs text-gray-400 mb-4">
        <span>20</span>
        <span>40</span>
        <span>60</span>
      </div>
    </div>
  );
}