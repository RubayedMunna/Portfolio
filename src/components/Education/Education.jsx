import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

function Education() {
    const [education] = useState([
        {
            degree: 'MASTERS OF SCIENCE (M.SC.)',
            department: 'Computer Science and Engineering',
            institution: 'Jahangirnagar University',
            gpa: '-',
            outof: '4.00',
            beginDate: 'July 2025',
            endDate: 'Present',
        },
        {
            degree: 'BACHELOR OF SCIENCE (B.SC.)',
            department: 'Computer Science and Engineering',
            institution: 'Jahangirnagar University',
            gpa: '3.82',
            outof: '4.00',
            beginDate: 'March 2020',
            endDate: 'July 2025',
        },
        {
            degree: 'HIGHER SECONDARY CERTIFICATE (HSC)',
            department: 'Science',
            institution: 'Badargonj Govt. College',
            gpa: '5.00',
            outof: '5.00',
            beginDate: 'July 2017',
            endDate: 'March 2019',
        },
        {
            degree: 'SECONDARY SCHOOL CERTIFICATE (SSC)',
            department: 'Science',
            institution: 'Awliagonj High School',
            gpa: '4.41',
            outof: '5.00',
            beginDate: 'January 2015',
            endDate: 'February 2017',
        },
    ]);

    return (
        <div className="container mt-5 mx-auto px-4 md:px-6">
            <header
                className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white shadow-2xl transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-amber-400/60 hover:shadow-3xl"
            >
                <div className="relative container mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        <div className="hidden sm:flex w-12 h-12 rounded-full bg-white/20 backdrop-blur-md items-center justify-center shadow-md border border-white/30 transition-transform duration-500 hover:rotate-12">
                            <FaGraduationCap className="text-white w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Education</h1>
                            <p className="text-amber-200 text-sm mt-1">Timeline of learning, growth, and milestones</p>
                        </div>
                    </div>

                    <div className="hidden md:block bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm font-medium tracking-wide hover:bg-white/20 transition mt-2 md:mt-0">
                        <span className="text-amber-200">Academic Journey</span>
                    </div>
                </div>
            </header>

            <div className="education relative">
                {education.map((edu, index) => (
                    <div key={index} className="relative z-10">
                        <div className="w-full md:w-4/5 mx-auto bg-white shadow-xl overflow-hidden pb-3 rounded-xl border-2 border-amber-700 my-12 relative transition-all duration-500 ease-out transform
                        hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl hover:bg-amber-50 group">

                            {/* Glowing Accent */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-500/10 via-orange-400/10 to-amber-600/10 blur-lg rounded-xl"></div>

                            <div className="bg-gradient-to-r from-white to-amber-50 text-gray-750 px-2 py-1 relative z-10 transition-colors duration-500 group-hover:bg-amber-100">
                                <h2 className="text-2xl font-semibold flex flex-col md:flex-row items-center px-4 md:px-10">
                                    <span className="bg-white text-gray-750 pr-4 py-2 rounded-lg shadow-sm">{edu.degree}</span>
                                </h2>

                                <h2 className="text-xl flex flex-col items-start px-4 md:px-10 mt-2">
                                    <span className="text-gray-600 font-medium tracking-wide">{edu.department}</span>
                                    <span className="flex items-center text-gray-800 font-semibold mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5 mr-2 text-amber-700"
                                        >
                                            <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                                            <path
                                                fillRule="evenodd"
                                                d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
                                                clipRule="evenodd"
                                            />
                                            <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                                        </svg>
                                        {edu.institution}
                                    </span>
                                </h2>

                                <h2 className="text-xl italic flex flex-col md:flex-row items-center px-4 md:px-10 mt-2">
                                    <span className="bg-white text-gray-900 pr-4 py-2 rounded-lg shadow-sm">GPA: {edu.gpa} out of {edu.outof}</span>
                                </h2>

                                <div className="bg-white text-white px-6 py-3 mt-3">
                                    <h2 className="text-l text-gray-700 text-center md:text-left">
                                        <span className="bg-amber-600 text-white px-4 py-2 rounded-lg shadow-md font-semibold">{edu.beginDate} - {edu.endDate}</span>
                                    </h2>
                                </div>
                            </div>

                            {/* Bottom Line Hover Effect */}
                            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
