import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

// Example award images
// import AwardImage1 from '../../../assets/images/award1.png';
// import AwardImage2 from '../../../assets/images/award2.png';

function Awards() {
  const [awards] = useState([
    // {
    //   awardTitle: 'Award 1',
    //   institutionName: 'Institution 1',
    //   awardDate: 'January 1, 2022',
    //   awardUrl: '#', // Replace with actual URL
    //   awardImage: AwardImage1,
    // },
    // {
    //   awardTitle: 'Award 2',
    //   institutionName: 'Institution 2',
    //   awardDate: 'February 15, 2022',
    //   awardUrl: '#', // Replace with actual URL
    //   awardImage: AwardImage2,
    // },
    // Add more awards as needed
  ]);

  return (
    <div className="container mx-auto px-4 md:px-6">
      {awards.length === 0 ? (
        <div className="text-center text-red-500 text-lg font-semibold mt-10">
          No awards found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border-2 border-amber-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-amber-400 hover:bg-amber-50 relative flex flex-col mx-auto"
            >
              {/* Top border */}
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 h-2 w-full rounded-t-xl absolute top-0 left-0 right-0"></div>

              <div className="flex flex-col items-center justify-center p-6 pt-8 w-full">
                {/* Award Image */}
                {award.awardImage && (
                  <div className="mb-4 w-full h-40 sm:h-48 overflow-hidden rounded-lg border-2 border-amber-100">
                    <img
                      src={award.awardImage}
                      alt={award.awardTitle}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}

                {/* Award Title */}
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 text-center mb-3">
                  {award.awardTitle}
                </h2>

                {/* Institution */}
                <div className="flex items-center text-gray-700 mb-4 text-sm sm:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2 text-amber-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                  <span>{award.institutionName}</span>
                </div>

                {/* Award Date & Link */}
                <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-3 mt-2">
                  <span className="bg-amber-600 text-white font-bold py-2 px-3 rounded-lg shadow-md text-sm sm:text-base">
                    {award.awardDate}
                  </span>
                  <a
                    href={award.awardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-800 hover:bg-black text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-md text-sm sm:text-base"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mr-1"
                    >
                      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      <path
                        fillRule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View Award
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Awards;
