import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

function Conducted() {
  const [events, setEvents] = useState([
    // { 
    //   id: 1, 
    //   name: 'Event 1',
    //   institution: 'Institution 1', 
    //   location: 'Location 1', 
    //   date: 'January 1, 2022', 
    //   topics: ['Topic 1', 'Topic 2'], 
    //   website: 'https://example.com' 
    // },
    // { 
    //   id: 2, 
    //   name: 'Event 2', 
    //   institution: 'Institution 2', 
    //   location: 'Location 2', 
    //   date: 'February 1, 2022', 
    //   topics: ['Topic 3', 'Topic 4'], 
    //   website: 'https://example.com'
    // },
    // Add more events as needed
  ]);

  if (events.length === 0) {
    return (
      <div className="text-center text-gray-700 font-semibold mt-10">
        No conducted events found.
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="max-w-full bg-white shadow-lg overflow-hidden rounded-xl border-2 border-amber-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-amber-400 hover:bg-amber-50 relative"
          >
            {/* Top border */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 h-3 w-full absolute top-0 left-0 right-0"></div>
            
            <div className="px-6 py-4 pt-8">
              <div className="font-bold text-xl mb-3 text-gray-800">{event.name}</div>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-3 text-amber-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                  </svg>
                  <span className="text-gray-700">{event.institution}</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3 text-amber-600">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{event.location}</span>
                </li>
              </ul>
              <div className="font-bold text-l mb-3 mt-4 text-gray-800">Covered topics:</div>
              <div className='ml-4'>
                <ul className="list-disc space-y-1">
                  {event.topics.map((topic, index) => (
                    <li key={index} className="text-gray-700">{topic}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer: Date + Link */}
            <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="bg-amber-600 text-white font-bold py-2 px-3 rounded-lg shadow-md text-sm sm:text-base self-start">
                {event.date}
              </span>
              <a 
                href={event.website} 
                className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-md text-sm sm:text-base self-start sm:self-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Conducted;
