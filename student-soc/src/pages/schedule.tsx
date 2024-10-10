import React from 'react';
import eventData from '../data/schedule';
import Navbar from '@/components/Navbar';

const Schedule: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 min-h-screen flex flex-col items-center bg-transparent">
        <h2 className="text-3xl font-bold mb-4 gradient-text">Event Schedule</h2>
        <ul className="w-full max-w-md bg-gray-800 text-white rounded-lg shadow-lg p-4">
          {eventData.map((item, index) => (
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