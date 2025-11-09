import React, { useState } from 'react';
import { FaBuilding, FaCalendarAlt, FaGlobe, FaMapMarkerAlt, FaLink } from 'react-icons/fa';
import { FaRunning } from 'react-icons/fa';

function Extracurricular() {
    const [extracurricularActivities] = useState([
        {
            role: 'Executive Member',
            institution: 'Jahangirnagar University Robotics Club',
            website: 'https://www.facebook.com/profile.php?id=100093557881807&mibextid=ZbWKwL',
            beginDate: '17 January 2024',
            endDate: 'Present',
        },


    ]);

    const [competitions] = useState([
        {
            name: '7th Jahangirnagar University Science Club National Science Festival',
            status: 'Participated',
            organizer: 'Jahangirnagar University Science Club (JUSC)',
            organizerWebsite: 'https://juscbd.org/',
            location: 'Zahir Raihan Auditorium, Jahangirnagar University, Bangladesh',
            disciplines: ['Project Showcasing'],
            eventDate: 'October 18, 2025',
            eventLink: 'https://www.facebook.com/events/s/7th-jusc-national-science-fest/804147495349304/'
        },
        {
            name: '6th Jahangirnagar University Science Club National Science Festival',
            status: 'Hosted (Co-host)',
            organizer: 'Jahangirnagar University Robotics Club (JURC) - Co-host',
            organizerWebsite: 'https://jurc.org/',
            location: 'Social Science Building, Jahangirnagar University, Bangladesh',
            disciplines: ['Line Follower Robot(LFR)', 'Robo Soccer'],
            eventDate: 'September 21, 2024 (DELAYED)',
            eventLink: 'https://facebook.com/events/s/6th-jusc-national-science-fest/2656085411239202/'
        },


    ]);

    return (
        <div className="container mt-5 mx-auto px-4 md:px-6">
            {/* Header */}
            <header className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent inline-block drop-shadow-lg animate-fade-in">
                    Extracurricular Activities
                </h2>
                <div className="w-28 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-3 rounded-full"></div>
                <p className="text-gray-600 mt-4 text-base italic">
                    Clubs, Competitions, and Leadership Roles
                </p>
            </header>



            {/* Organizations Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-amber-400 inline-block pb-1 text-center 
               rounded-md transition-all duration-300 transform hover:scale-105 hover:text-amber-600 hover:shadow-md">
                    Organizations
                </h2>


                <div className="flex flex-col items-center space-y-6">
                    {extracurricularActivities.map((activity, index) => (
                        <div key={index} className="w-full max-w-3xl bg-white shadow-xl rounded-2xl border border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition transform hover:scale-105 overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-amber-500 to-amber-700"></div>

                            <div className="p-6 pt-10">
                                {/* Role */}
                                <div className="flex items-center mb-3">
                                    <FaBuilding className="w-6 h-6 text-amber-600 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-800">{activity.role}</h3>
                                </div>

                                {/* Institution & Website */}
                                <div className="flex items-center mb-3">
                                    <span className="text-gray-700 font-semibold">{activity.institution}</span>
                                    <a href={activity.website} target="_blank" rel="noopener noreferrer" className="ml-3 text-amber-600 hover:text-amber-700 transition">
                                        <FaGlobe className="w-5 h-5" />
                                    </a>
                                </div>

                                {/* Dates */}
                                <div className="flex items-center mt-2">
                                    <FaCalendarAlt className="w-5 h-5 text-amber-600 mr-2" />
                                    <span className="bg-amber-600 text-white px-3 py-1 rounded-lg font-medium">
                                        {activity.beginDate} - {activity.endDate}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Competitions Section */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-amber-400 inline-block pb-1 rounded-md 
               transition-all duration-300 transform hover:scale-105 hover:text-amber-600 hover:shadow-md">
                    Competitions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {competitions.map((competition, index) => (
                        <div key={index} className="bg-white shadow-xl rounded-2xl border border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition transform hover:scale-105 overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-amber-500 to-amber-700"></div>

                            <div className="p-6 pt-10">
                                {/* Name */}
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{competition.name}</h3>

                                {/* Event Date */}
                                <div className="flex items-center mb-2">
                                    <FaCalendarAlt className="text-amber-600 w-5 h-5 mr-2" />
                                    <span className="text-gray-700">{competition.eventDate}</span>
                                </div>

                                {/* Status */}
                                <div className="mb-2">
                                    <span className="bg-green-500 text-white px-3 py-1 rounded-lg font-semibold shadow-sm">{competition.status}</span>
                                </div>

                                {/* Organizer */}
                                <div className="flex items-center mb-2">
                                    <FaBuilding className="text-amber-600 w-5 h-5 mr-2" />
                                    <a href={competition.organizerWebsite} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold hover:underline transition">
                                        {competition.organizer}
                                    </a>
                                </div>

                                {/* Location */}
                                <div className="flex items-center mb-2">
                                    <FaMapMarkerAlt className="text-amber-600 w-5 h-5 mr-2" />
                                    <span className="text-gray-700">{competition.location}</span>
                                </div>

                                {/* Event Link */}
                                <div className="flex items-center mb-3">
                                    <FaLink className="text-amber-600 w-5 h-5 mr-2" />
                                    <a href={competition.eventLink} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold hover:underline transition">
                                        Event Link
                                    </a>
                                </div>

                                {/* Disciplines */}
                                <div className="flex flex-wrap mt-3">
                                    {competition.disciplines.map((discipline, idx) => (
                                        <span key={idx} className="bg-amber-100 text-amber-800 font-semibold px-3 py-1 rounded-lg mr-2 mb-2 shadow-sm">
                                            {discipline}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Extracurricular;
