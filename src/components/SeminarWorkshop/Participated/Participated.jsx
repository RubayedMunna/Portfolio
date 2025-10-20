import React, { useState } from 'react';

function Participated() {
  const [events] = useState([
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
  ]);

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-lg overflow-hidden rounded-xl border-2 border-amber-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-amber-400 hover:bg-amber-50 relative w-full"
          >
            {/* Top colored bar */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 h-2 w-full"></div>

            <div className="px-4 sm:px-6 py-6">
              <h2 className="font-bold text-lg sm:text-xl text-gray-800 mb-3">{event.eventName}</h2>

              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
                {/* Institution */}
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2 text-amber-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                  <span className="font-semibold">{event.institutionName}</span>
                </li>

                {/* Location */}
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 mr-2 text-amber-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">{event.location}</span>
                </li>
              </ul>

              <div className="mt-4 font-semibold text-gray-800">Covered topics:</div>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2 text-gray-700 text-sm sm:text-base">
                {event.topicsCovered.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>

            {/* Footer: Date + Link */}
            <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-2">
              {/* Event Date with Calendar Icon */}
              <span className="inline-flex items-center bg-amber-600 text-white font-bold py-2 px-3 rounded-lg shadow-md text-sm sm:text-base self-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v1.5M17.25 3v1.5M3 8.25h18M4.5 7.5v11.25A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V7.5M8.25 12h7.5"
                  />
                </svg>
                {event.eventDate}
              </span>

              {/* Event Link with External Link Icon */}
              <a
                href={event.eventLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-800 hover:bg-black text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-md text-sm sm:text-base self-start sm:self-auto"
              >
                <span>Event Link</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Participated;
