import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faList, faTrophy, faUser, faStar } from '@fortawesome/free-solid-svg-icons';

function ProgrammingProblems() {
    const [activeSection, setActiveSection] = useState('online');

    const toggleContent = (sectionId) => setActiveSection(sectionId);

    const sections = [
        { id: 'online', label: 'Online Judge' },
        { id: 'onsite', label: 'Onsite Contest' },
    ];

    const onlineOJ = [
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
        // ...other OJs
    ];

    const onsiteContests = [
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
        // ...other contests
    ];

    return (
        <div className="container mt-10 mx-auto">
            <div className="ms-3 me-4">

                {/* --- Modern Header --- */}
                <header className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white shadow-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-400/30 via-transparent to-transparent animate-pulse-slow"></div>
                    <div className="relative container mx-auto px-6 py-6 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-md border border-white/30">
                                <FontAwesomeIcon icon={faList} className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h1 className="text-4xl font-extrabold tracking-tight">Programming Problems</h1>
                                <p className="text-amber-200 text-sm mt-1">Online judges & onsite contests record</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* --- Modern Buttons --- */}
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                    {sections.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => toggleContent(id)}
                            className={`relative px-5 py-2 text-sm font-semibold rounded-full border transition-all duration-300 ${
                                activeSection === id
                                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white border-amber-600 shadow-lg scale-105'
                                    : 'bg-white text-gray-800 border-amber-300 hover:text-amber-700 hover:border-amber-500 hover:shadow-md'
                            }`}
                        >
                            {activeSection === id && (
                                <span className="absolute inset-0 bg-amber-400/20 blur-md rounded-full animate-pulse-slow"></span>
                            )}
                            <span className="relative z-10">{label}</span>
                        </button>
                    ))}
                </div>

                {/* --- Online Judge Section --- */}
                {activeSection === 'online' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {onlineOJ.map((event) => (
                            <div key={event.id} className="rounded-xl overflow-hidden shadow-xl border-2 border-amber-200 hover:border-amber-400 hover:scale-105 hover:shadow-2xl hover:bg-amber-50 transition-all duration-300 bg-white">
                                <div className="bg-gradient-to-r from-amber-600 to-amber-700 h-3 w-full"></div>
                                <div className="px-6 py-4">
                                    <h2 className="font-bold text-xl mb-3 text-gray-800 hover:text-amber-700 transition-colors duration-300">
                                        <a href={event.ojLink} target="_blank" rel="noopener noreferrer">{event.ojName}</a>
                                    </h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li className="flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                                            <span className="font-semibold text-gray-700">Solved Problems:</span>
                                            <span className="mx-2 text-gray-600">{event.solvedProblems}</span>
                                        </li>
                                        <li className="flex items-center">
                                            <FontAwesomeIcon icon={faList} className="text-blue-500 mr-3" />
                                            <span className="font-semibold text-gray-700">Participated Contests:</span>
                                            <span className="mx-2 text-gray-600">{event.participatedContest}</span>
                                        </li>
                                        <li className="flex items-center">
                                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-3" />
                                            <span className="font-semibold text-gray-700">Current Rating:</span>
                                            <span className="mx-2 text-gray-600">{event.currentRating}</span>
                                        </li>
                                        <li className="flex items-center">
                                            <FontAwesomeIcon icon={faTrophy} className="text-orange-500 mr-3" />
                                            <span className="font-semibold text-gray-700">Highest Rating:</span>
                                            <span className="mx-2 text-gray-600">{event.highestRating}</span>
                                        </li>
                                        <li className="flex items-center">
                                            <FontAwesomeIcon icon={faUser} className="text-purple-500 mr-3" />
                                            <span className="font-semibold text-gray-700">Handle:</span>
                                            <a href={event.ojHandle} target="_blank" rel="noopener noreferrer" className="text-amber-600 font-semibold hover:text-amber-700 mx-2 transition-colors">{event.ojHandleName}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* --- Onsite Contest Section --- */}
                {activeSection === 'onsite' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {onsiteContests.map((contest) => (
                            <div key={contest.id} className="rounded-xl overflow-hidden shadow-xl border-2 border-amber-200 hover:border-amber-400 hover:scale-105 hover:shadow-2xl hover:bg-amber-50 transition-all duration-300 bg-white">
                                <div className="bg-gradient-to-r from-amber-600 to-amber-700 h-3 w-full"></div>
                                <div className="px-6 py-4">
                                    <h2 className="font-bold text-xl mb-3 text-gray-800">{contest.contestTitle}</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><span className="font-semibold">Team:</span> <span className="ml-2">{contest.teamname}</span></li>
                                        <li><span className="font-semibold">Team Members:</span> <span className="ml-2">{contest.teamMembers}</span></li>
                                        <li><span className="font-semibold">Rank:</span> <span className="ml-2">{contest.rank}</span></li>
                                        <li><span className="font-semibold">Organizer:</span> <span className="ml-2">{contest.organizer}</span></li>
                                        <li><span className="font-semibold">Location:</span> <span className="ml-2">{contest.location}</span></li>
                                    </ul>
                                </div>
                                <div className="px-6 py-4 flex items-center justify-between">
                                    <span className="bg-amber-600 text-white font-bold py-2 px-3 rounded-lg shadow-md">{contest.date}</span>
                                    <a href={contest.website} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-110 shadow-md flex items-center">
                                        View
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProgrammingProblems;
