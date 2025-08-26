import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';

import { ContinueWatching } from './components/ContinueWatching';
import { YourLesson } from './components/YourLesson';
import { Statistics } from './components/Statistics';
import { YourMentor } from './components/YourMentor';
import { CourseProgress } from './components/CoursePogress';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex gap-6">
            {/* Main Column */}
            <div className="flex-1">
              <HeroBanner />
              <CourseProgress />
              <ContinueWatching />
              <YourLesson />
            </div>
            
            {/* Right Sidebar */}
            <div className="w-80">
              <Statistics />
              <YourMentor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;