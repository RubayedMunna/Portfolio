import React, { useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([
    {
      projectName: 'Project 1',
      projectDescription: 'Explanation about the project goes here. You can provide details and information about the project in this section.',
      institutionName: 'Your Institution 1',
      projectDate: 'January 1, 2022',
      githubUrl: 'https://github.com/yourusername/yourproject1',
      websiteUrl: 'https://your-website-url1.com',
    },
    {
      projectName: 'Project 2',
      projectDescription: 'Explanation about the project goes here. You can provide details and information about the project in this section.',
      institutionName: 'Your Institution 2',
      projectDate: 'February 15, 2022',
      githubUrl: 'https://github.com/yourusername/yourproject2',
      websiteUrl: 'https://your-website-url2.com',
    },
    // Add more project entries as needed
  ]);

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <div className="bg-blue-500 h-2 w-full"></div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.projectName}</div>
                <p className="text-gray-700 text-base">{project.projectDescription}</p>
                <ul className="list-disc list-inside mt-4">
                  <li className="flex items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>
                    <span>{project.institutionName}</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 py-4 flex items-center justify-between">
                <div className='flex items-center'>
                  <span className="bg-blue-500 text-white font-bold py-1 px-2 rounded-lg mr-4">{project.projectDate}</span>
                  {/* GitHub with icon */}
                  <a href={project.githubUrl} className="flex items-center bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mr-2" target="_blank">
                    <i className="bx bxl-github text-white"></i>
                  </a>
                  {/* Website with icon */}
                  <a href={project.websiteUrl} className="flex items-center bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" target="_blank">
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

export default Projects;
