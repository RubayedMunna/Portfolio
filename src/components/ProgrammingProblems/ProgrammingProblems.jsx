import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faList, faTrophy, faUser, faStar } from '@fortawesome/free-solid-svg-icons';

function ProgrammingProblems() {

    const [activeSection, setActiveSection] = useState('online');

    // Function to toggle the active section
    const toggleContent = (sectionId) => {
        setActiveSection(sectionId);
    };

    const [onlineOJ, setonlineOJ] = useState([
        {
            id: 1,
            ojName: 'Codeforces',
            ojLink:'https://codeforces.com/',
            ojHandle: 'https://codeforces.com/profile/RubayedMunna',
            ojHandleName: 'RubayedMunna',
            solvedProblems: 978,
            participatedContest: 107,
            highestRating: 1466,
            currentRating: 1369,
        },
        {
            id: 2,
            ojName: 'Atcoder',
            ojLink:'https://atcoder.jp/',
            ojHandle: 'https://atcoder.jp/users/RubayedMunna',
            ojHandleName: 'RubayedMunna',
            solvedProblems: 'N/A',
            participatedContest: 16,
            highestRating: 398,
            currentRating: 360,
        },
        {
            id: 3,
            ojName: 'Codechef',
            ojLink:'https://www.codechef.com/',
            ojHandle: 'https://www.codechef.com/users/munna_370',
            ojHandleName: 'munna_370',
            solvedProblems: 56,
            participatedContest: 10,
            highestRating: 1620,
            currentRating: 1539,
        },
        {
            id: 4,
            ojName: 'LightOJ',
            ojLink:'https://lightoj.com/',
            ojHandle: 'https://lightoj.com/user/rubayedmunna',
            ojHandleName: 'rubayedmunna',
            solvedProblems: 101,
            participatedContest: 'N/A',
            highestRating: 'N/A',
            currentRating: 'N/A',
        },
        {
            id: 8,
            ojName: 'Leetcode',
            ojLink:'https://leetcode.com/',
            ojHandle: 'https://leetcode.com/RubayedMunna/',
            ojHandleName: 'RubayedMunna',
            solvedProblems: 5,
            participatedContest: 0,
            highestRating: 0,
            currentRating: 0,
        },
        {
            id: 5,
            ojName: 'UVA',
            ojLink:'https://onlinejudge.org/',
            ojHandle: 'https://uhunt.onlinejudge.org/id/1140584',
            ojHandleName: 'Munna370',
            solvedProblems: 112,
            participatedContest: 'N/A',
            highestRating: 'N/A',
            currentRating: 'N/A',
        },
        {
            id: 6,
            ojName: 'Virtual Judge',
            ojLink:'https://vjudge.net/',
            ojHandle: 'https://vjudge.net/user/Rubayed_370',
            ojHandleName: 'Rubayed_370',
            solvedProblems: 431,
            participatedContest: 65,
            highestRating: 'N/A',
            currentRating: 'N/A',
        },
        {
            id: 7,
            ojName: 'SPOJ',
            ojLink:'https://www.spoj.com/',
            ojHandle: 'https://www.spoj.com/myaccount/',
            ojHandleName: 'munna_370',
            solvedProblems: 3,
            participatedContest: 0,
            highestRating: 0,
            currentRating: 0,
        },

        {
            id: 9,
            ojName: 'beecrowd',
            ojLink:'https://www.beecrowd.com.br/',
            ojHandle: 'https://www.beecrowd.com.br/judge/en/profile/455584',
            ojHandleName: 'RUBAYEDMUNNA',
            solvedProblems: 41,
            participatedContest: 0,
            highestRating: 0,
            currentRating: 0,
        },

        // Add more events as needed
    ]);

    const [onsiteContests, setContests] = useState([
        {
            id: 3,
            contestTitle: 'The 2022 ICPC Asia Dhaka Regional Site Online Preliminary Contest',
            organizer: 'International Collegiate Programming Contest(ICPC)',
            teamname: 'JU_Tintin',
            location: 'Online',
            teamMembers: 'Md Sahal, Jahid Hossain',
            rank: 87,
            date: '2022-2023',
            website: '#'
        },
        {
            id: 2,
            contestTitle: 'The 2021 ICPC Asia Dhaka Regional Site Online Preliminary Contest',
            organizer: 'International Collegiate Programming Contest(ICPC)',
            location: 'Online',
            teamname: 'JU_Autobots',
            teamMembers: 'Sakib Mollah, Abdus Salam Sojib',
            rank: 'N/A',
            date: 'September 3 2022',
            website: '#'
        },
        {

            id: 1,
            contestTitle: 'The 2020 ICPC Asia Dhaka Regional Site Online Preliminary Contest',
            organizer: 'International Collegiate Programming Contest(ICPC)',
            location: 'Online',
            teamname: 'JU_Autobots',
            teamMembers: 'Tamjid Islam, Sadia Hossain',
            rank: 'N/A',
            date: 'April 7 2021',
            website: '#'
        },


        // Add more events as needed
    ]);

    return (
        <div>
            <div className="container mt-5 mx-auto">
                <div className="ms-3 me-4">
                    <header className="bg-gray-500 text-white py-4 rounded-lg">
                        <div className="container mx-auto ml-4">
                            <h1 className="text-3xl font-bold">Programming Problems</h1>
                        </div>
                    </header>

                    <div className="container mx-auto mt-8">
                        {/* Buttons */}
                        <div className="inline-flex rounded-md shadow-sm">
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white  ${activeSection === 'online' && 'active'}`}
                                onClick={() => toggleContent('online')}
                            >
                                Online Judge
                            </button>
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white ${activeSection === 'onsite' && 'active'}`}
                                onClick={() => toggleContent('onsite')}
                            >
                                Onsite Contest
                            </button>
                        </div>

                        {/* Content Sections */}
                        <div id="online" className={`content mt-4 ${activeSection !== 'online' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Online Judges</h2>
                            <div>
                                <div className="container mx-auto">
                                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                                        {onlineOJ.map((event, index) => (
                                            <div key={index} className="max-w-full bg-white shadow-md overflow-hidden rounded-md my-0">
                                                <div className="bg-blue-700 h-2 w-full"></div>
                                                <div className="px-6 py-4">
                                                    <div className="font-bold text-xl text-gray-750 mb-2"><a href={event.ojLink} target='_blank'>{event.ojName}</a></div>
                                                    <ul className="list-disc list-inside mt-4">
                                                        <li className="flex items-center mt-2">
                                                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                                                            <span className='font-bold text-l text-gray-700'>Solved Problems:</span>
                                                            <span className='mx-2 text-l text-gray-700'>{event.solvedProblems}</span>
                                                        </li>
                                                        <li className="flex items-center mt-2">
                                                            <FontAwesomeIcon icon={faList} className="text-blue-500 mr-2" />
                                                            <span className='font-bold text-l text-gray-700'>Participated Contest:</span>
                                                            <span className='mx-2 text-l text-gray-700'>{event.participatedContest}</span>
                                                        </li>
                                                        <li className="flex items-center mt-2">
                                                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />
                                                            <span className='font-bold text-l text-gray-700'>Current Rating:</span>
                                                            <span className='mx-2 text-l text-gray-700'>{event.currentRating}</span>
                                                        </li>
                                                        <li className="flex items-center mt-2">
                                                            <FontAwesomeIcon icon={faTrophy} className="text-orange-500 mr-2" />
                                                            <span className='font-bold text-l text-gray-700'>Highest Rating:</span>
                                                            <span className='mx-2 text-l text-gray-700'>{event.highestRating}</span>
                                                        </li>
                                                        <li className="flex items-center mt-2">
                                                            <FontAwesomeIcon icon={faUser} className="text-purple-500 mr-2" />
                                                            <span className='font-bold text-l text-gray-700'>Handle:</span>
                                                            <a href={event.ojHandle} target='_blank' className='font-bold text-l text-gray-700 mx-2'>{event.ojHandleName}</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="onsite" className={`content mt-4 ${activeSection !== 'onsite' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Onsite Contests</h2>
                            <div>
                                <div className="container mx-auto">
                                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                                        {onsiteContests.map((event, index) => (
                                            <div key={index} className="max-w-full bg-white shadow-md overflow-hidden rounded-md my-0">
                                                <div className="bg-blue-700 h-2 w-full"></div>
                                                <div className="px-6 py-4">
                                                    <div className="font-bold text-2l text-gray-750 mb-2">{event.contestTitle}</div>
                                                    <ul className="list-disc list-inside mt-4">
                                                    <li className="flex items-center mt-2">
                                                            <span className='font-bold text-l text-gray-700'>Team:</span>
                                                            <span className='mx-2 text-l text-gray-700'>{event.teamname}</span>
                                                        </li>
                                                        <li className="flex items-center mt-2">
                                                            <span className='font-bold text-l text-gray-700'>Team Members:</span>
                                                            <span className='mx-2 text-l text-gray-700'>{event.teamMembers}</span>
                                                        </li>
                                                        <li className="flex items-center mt-2">
                                                            <span className='font-bold text-l text-gray-700'>Ranking:</span>
                                                            <span className='mx-2 text-l text-gray-700'>{event.rank}</span>
                                                        </li>

                                                        <li className="flex items-center mt-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                                            </svg>
                                                            <span>{event.organizer}</span>
                                                        </li>
                                                        <li className="flex items-center mt-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                                                                <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                                                            </svg>
                                                            <span>{event.location}</span>
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div className="px-6 py-4 flex items-center justify-between">
                                                    <div className='flex items-center'>
                                                        <span className="bg-blue-500 text-white font-bold py-1 px-2 rounded-lg mr-4">{event.date}</span>
                                                        {/* Event Link */}
                                                        <a href={event.website} className="flex items-center bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" target="_blank">
                                                            <i className='bx bx-globe text-white'></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgrammingProblems;