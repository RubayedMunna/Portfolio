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
            name: 'Jahangirnagar University Science Club National Science Festival',
            status: 'Hosted',
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
            <header
                className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white shadow-2xl transition-all duration-500 ease-in-out hover:scale-[1.05] hover:shadow-amber-400/60 hover:shadow-3xl"
            >
                {/* Animated radial gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-400/30 via-transparent to-transparent animate-pulse-slow"></div>

                <div className="relative container mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between">
                    {/* Left Section */}
                    <div className="flex items-start md:items-center space-x-4">
                        <div className="hidden sm:flex w-12 h-12 rounded-full bg-white/20 backdrop-blur-md items-center justify-center shadow-md border border-white/30 transition-transform duration-500 hover:rotate-12">
                            <FaRunning className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Extracurricular Activities</h1>
                            <p className="text-amber-200 text-sm mt-1">Clubs, Competitions, and Leadership Roles</p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="hidden md:block bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm font-medium tracking-wide hover:bg-white/20 transition mt-2 md:mt-0">
                        <span className="text-amber-200">Campus Involvement</span>
                    </div>
                </div>
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
