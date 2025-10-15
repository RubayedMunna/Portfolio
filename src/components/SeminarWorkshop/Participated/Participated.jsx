import React, { useState } from 'react';

function Participated() {
  const [events, setEvents] = useState([
    {
      eventName: 'Software Development Tools & Techniques',
      institutionName: 'Dev Skill',
      location: 'Department of Computer Science and Engineering, JU',
      eventDate: 'January 14, 2024',
      topicsCovered: [
        'Introduction of different tools like Git, Github, Gitflow, Jira, Atlassian, Git Branching.',
        'Introduction with Github Branching and how to use github branching in software development.',
        'Overview of how software industries works.',
      ],
      eventLink: 'https://devskill.com/Seminar/Details/software-development-tools-and-techniques',
    },
    {
      eventName: 'Concrete Autoencoder-Based Feature Selection Discovers Key Genes in Evaluating Intratumor Heterogeneity',
      institutionName: 'Jahangirnagar University',
      location: 'Department of Computer Science and Engineering',
      eventDate: 'December, 2023',
      topicsCovered: [
        'Evaluating ITH using Depth 2.',
        'Drawbacks of Depth 2 and Hypothesis to overcome.',
        'Feature selection algorithms: Autoencoder(AE), Concrete Autoencoder(CAE), Multirun Concrete Autoencoder(mrCAE), MCFC, UDFS',
        'Survival Analysis: BRCA cohort',
      ],
      eventLink: '#',
    },
    
    // Add more event entries as needed
  ]);

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="max-w-full bg-white shadow-lg overflow-hidden rounded-xl border-2 border-amber-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-amber-400 hover:bg-amber-50 relative"
            >
              {/* Top border */}
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 h-3 w-full absolute top-0 left-0 right-0"></div>
              
              <div className="px-6 py-4 pt-8">
                <div className="font-bold text-xl mb-3 text-gray-800">{event.eventName}</div>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-3 text-amber-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>
                    <span className="text-gray-700">{event.institutionName}</span>
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
                  <ul className="list-disc space-y-2">
                    {event.topicsCovered.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-gray-700 leading-relaxed">{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 flex items-center justify-between">
                <div className='flex items-center'>
                  <span className="bg-amber-600 text-white font-bold py-2 px-3 rounded-lg mr-4 shadow-md">
                    {event.eventDate}
                  </span>
                  {/* Event Link */}
                  <a 
                    href={event.eventLink} 
                    className="flex items-center bg-gray-800 hover:bg-black text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-110 shadow-md" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
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

export default Participated;