import React, { useState } from 'react';

function Certifications() {
  const [certifications, setCertifications] = useState([
    {
      certificationName: 'Certification 1',
      institutionName: 'Institution 1',
      certificationDate: 'January 1, 2022',
      certificateUrl: 'https://www.example.com/certificate1',
    },
    {
      certificationName: 'Certification 2',
      institutionName: 'Institution 2',
      certificationDate: 'February 15, 2022',
      certificateUrl: 'https://www.example.com/certificate2',
    },
    // Add more certification entries as needed
  ]);

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {certifications.map((certification, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <div className="bg-blue-500 h-2 w-full"></div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{certification.certificationName}</div>
                <ul className="list-disc list-inside mt-4">
                  <li className="flex items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>
                    <span>{certification.institutionName}</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 py-4 flex items-center justify-between">
                <div className='flex items-center'>
                  <span className="bg-blue-500 text-white font-bold py-1 px-2 rounded-lg mr-4">{certification.certificationDate}</span>
                  <a href={certification.certificateUrl} className="flex items-center bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ">
                      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
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

export default Certifications;
