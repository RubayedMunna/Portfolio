import React, { useState } from 'react';

function Participated() {
  const [events, setEvents] = useState([
    {
      eventName: 'Seminar/Workshop 1',
      institutionName: 'Your Institution 1',
      location: 'Location 1',
      eventDate: 'January 1, 2022',
      topicsCovered: [
        'What is Azure Function?',
        'What is API?',
        'What are the benefits of Azure Functions?',
        'What can we do with Azure Functions out of the box?',
        'Real-life problem-solving with Azure Functions App without any framework implementation.',
        'Hands-on demo to build a mobile SMS transmitter using Azure Functions HTTP Trigger.',
      ],
      eventLink: 'https://your-website-url1.com',
    },
    {
      eventName: 'Seminar/Workshop 2',
      institutionName: 'Your Institution 2',
      location: 'Location 2',
      eventDate: 'February 15, 2022',
      topicsCovered: [
        'Topic 1',
        'Topic 2',
        'Topic 3',
        'Topic 4',
      ],
      eventLink: 'https://your-website-url2.com',
    },
    // Add more event entries as needed
  ]);

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <div className="bg-blue-500 h-2 w-full"></div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{event.eventName}</div>
                <ul className="list-disc list-inside mt-4">
                  <li className="flex items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>
                    <span>{event.institutionName}</span>
                  </li>
                  <li className="flex items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                    </svg>
                    <span>{event.location}</span>
                  </li>
                </ul>
                <div className="font-bold text-l mb-2">Covered topics:</div>
                <div className='ml-4'>
                  <ul className="list-disc">
                    {event.topicsCovered.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 flex items-center justify-between">
                <div className='flex items-center'>
                  <span className="bg-blue-500 text-white font-bold py-1 px-2 rounded-lg mr-4">{event.eventDate}</span>
                  {/* Event Link */}
                  <a href={event.eventLink} className="flex items-center bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" target="_blank">
                    <i className='bx bx-globe text-white'></i>
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

export default Participated;
