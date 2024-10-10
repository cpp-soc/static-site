import React from 'react';
import eventData from '../data/schedule';
import Navbar from '@/components/Navbar';

const Schedule: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 min-h-screen flex flex-col items-center bg-transparent">
        <h2 className="text-6xl font-bold text-blue-600 mt-8">Event Schedule</h2>
        
        <h3 className="text-2xl font-bold mb-2">Daily SOC Operations</h3>
        <p className="mb-4">SOC Location: CLA Building 98 C5-15</p>
        <ul className="w-full max-w-md bg-gray-800 text-white rounded-lg shadow-lg p-4 mb-8">
          {eventData.dailySOCOperations.map((item, index) => (
            <li key={index} className="flex justify-between py-2 border-b border-gray-700">
              <span className="font-semibold">{item.day}</span>
              <span>{item.time}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold mb-2">BOTS Event</h3>
        <p className="mb-4">The training will be hosted on the following drop-in hours starting Oct 15 - Oct 30:</p>
        <ul className="w-full max-w-md bg-gray-800 text-white rounded-lg shadow-lg p-4">
          {eventData.botsEvent.map((item, index) => (
            <li key={index} className="flex justify-between py-2 border-b border-gray-700">
              <span className="font-semibold">{item.day}</span>
              <span>{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Schedule;