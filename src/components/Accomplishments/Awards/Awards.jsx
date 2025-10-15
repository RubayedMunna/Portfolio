import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

function Awards() {
  const [awards, setAwards] = useState([
    {
      awardTitle: 'Award 1',
      institutionName: 'Institution 1',
      awardDate: 'January 1, 2022',
      awardUrl: '#', // Replace with the actual URL
    },
    {
      awardTitle: 'Award 2',
      institutionName: 'Institution 2',
      awardDate: 'February 15, 2022',
      awardUrl: '#', // Replace with the actual URL
    },
    // Add more award entries as needed
  ]);

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="max-w-full bg-white shadow-lg overflow-hidden rounded-xl border-2 border-amber-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-amber-400 hover:bg-amber-50 relative"
            >
              {/* Top border */}
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 h-3 w-full absolute top-0 left-0 right-0"></div>
              
              <div className="px-6 py-4 pt-8">
                <div className="font-bold text-xl mb-3 text-gray-800">{award.awardTitle}</div>
                <ul className="list-disc list-inside mt-4">
                  <li className="flex items-center mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3 text-amber-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>
                    <span className="text-gray-700">{award.institutionName}</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 py-4 flex items-center justify-between">
                <div className='flex items-center'>
                  <span className="bg-amber-600 text-white font-bold py-2 px-3 rounded-lg mr-4 shadow-md">
                    {award.awardDate}
                  </span>
                  <a 
                    href={award.awardUrl} 
                    className="flex items-center bg-gray-800 hover:bg-black text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-110 shadow-md" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Awards;