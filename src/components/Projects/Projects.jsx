import React, { useState } from 'react';

function Projects() {
    const [projects, setProjects] = useState([
        {
            projectName: 'Smart Class Routine Management System',
            projectDescription: [
                'A web-based application designed to automate and manage class routines efficiently within an academic institution.',
                'Developed using React.js for the frontend, Node.js for the backend, and MySQL for the database.',
                'Implements Scrum methodology for agile project management.',
                'Includes unit testing with Mocha and CI/CD integration using GitHub Actions.',
                'Ensures conflict-free class scheduling, rescheduling, and cancellation with administrative control.',
            ],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'March 2024',
            githubUrl: 'https://github.com/JUCSE49-Mavericks/Smart-Class-Routine-Management-System.git',
            websiteUrl: '#',
        },

        {
            projectName: 'Outcome Based Education (OBE) System',
            projectDescription: [
                'A complete automation of the Outcome Based Education (OBE) system.',
                'Reactjs+Django based WebAPP.',
                'The departments those are following Outcome Based Education can use this app.',
                'It stores and analyzes each of the student so that teachers can have knowledge of the strength and weaknesses of a student and work upon it.',
                'It also analyzes a teachers teaching capability.',
            ],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'October 2023',
            githubUrl: 'https://github.com/OBESystem/obe-system',
            websiteUrl: '#',
        },
        {
            projectName: 'Student Information System',
            projectDescription: [
                'This is a student information and registration system.',
                'Based on PHP, HTML, CSS and MySQL.',
                'Students can register and give their information.',
                'It stores student information and shows if needed.',
            ],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'December 2022',
            githubUrl: 'https://github.com/RubayedMunna/Registration-and-Login-System',
            websiteUrl: '#',
        },

        {
            projectName: 'Cloned Amazon',
            projectDescription: [
                'This project was made out of curiosity.',
                'I have used HTML and CSS only to build a cloned website of Amazon.',
            ],
            institutionName: 'Personal Project',
            projectDate: 'July 2023',
            githubUrl: 'https://github.com/RubayedMunna/cloned_amazon',
            websiteUrl: 'https://cloned-amazon-rubayed.netlify.app/',
        },

        {
            projectName: 'Student Hostel Management System with JAVA',
            projectDescription: [
                'This is a hall management system.',
                'Based on JAVA.',
                'This was my academic project.',
                'The operations of a hostel and its canteen-dining, room information, governing body and alumny students can be managed by this system.',
            ],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'July 2022',
            githubUrl: 'https://github.com/RubayedMunna/SHMS-With-OOP',
            websiteUrl: '#',
        },

        {
            projectName: 'Student Hostel Management System with C++',
            projectDescription: [
                'This is a hall management system.',
                'Based on C++.',
                'This was my academic project.',
                'The operations of a hostel and its canteen-dining, room information, governing body and alumny students can be managed by this system.',
            ],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'January 2022',
            githubUrl: 'https://github.com/RubayedMunna/Student-Hostel-Management-System-C-',
            websiteUrl: '#',
        },

        {
            projectName: 'Tic-Tac-Toe and Simple Calculator',
            projectDescription: [
                'This is C based project.',
                'The project has two zones, Calculator and Game zone.',
                'There was a simple calculator.',
                'At the Game zone there was facility of playing tic-tac-toe.',
                'My system was able to determine the winner and situation like draw.',
            ],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'August 2021',
            githubUrl: 'https://github.com/RubayedMunna/Tic-Tac-Toe',
            websiteUrl: '#',
        },
        // Add more project entries as needed
    ]);

    return (
        <div className="container mx-auto mt-10 px-4 md:px-6">
            {/* --- Stylish Projects Header --- */}
            <header className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white shadow-2xl">
                {/* Animated radial gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-400/40 via-transparent to-transparent animate-pulse-slow"></div>

                <div className="relative container mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between">
                    {/* Left Section: Icon + Title + Subtitle */}
                    <div className="flex items-start md:items-center space-x-4">
                        {/* Icon hidden on mobile */}
                        <div className="hidden sm:flex w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-md border border-white/30">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Projects</h1>
                            <p className="text-amber-200 text-sm mt-1">Academic and personal projects showcasing skills</p>
                        </div>
                    </div>

                    {/* Right Section: Badge */}
                    <div className="hidden md:block bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm font-medium tracking-wide hover:bg-white/20 transition mt-2 md:mt-0">
                        <span className="text-amber-200">Portfolio Highlights</span>
                    </div>
                </div>
            </header>

            {/* --- Projects Grid --- */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="mx-auto w-full max-w-lg rounded-xl overflow-hidden shadow-xl bg-white border-2 border-amber-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-amber-500 hover:bg-amber-50"
                    >
                        <div className="bg-gradient-to-r from-amber-600 to-amber-700 h-3 w-full"></div>
                        <div className="px-4 sm:px-6 py-4">
                            <h2 className="font-bold text-xl mb-3 text-gray-800">{project.projectName}</h2>
                            <ul className="list-disc ml-4 text-gray-700 space-y-1">
                                {project.projectDescription.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                            <p className="mt-4 text-gray-800 font-medium flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-amber-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M12 3v18" />
                                </svg>
                                {project.institutionName}
                            </p>
                        </div>
                        <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
                            <span className="bg-amber-600 text-white font-bold py-2 px-3 rounded-lg shadow-md">{project.projectDate}</span>
                            <div className="flex space-x-2">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-gray-800 hover:bg-black text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-110 shadow-md"
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href={project.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-110 shadow-md"
                                >
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
