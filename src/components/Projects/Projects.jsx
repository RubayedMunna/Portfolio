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

        <div>
            <div className="container mt-5 mx-auto">
                <div className="ms-3 me-4">
                    <header className="bg-gray-500 text-white py-4 rounded-lg mb-8">
                        <div className="container mx-auto ml-4">
                            <h1 className="text-3xl font-bold">Projects</h1>
                        </div>
                    </header>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                            {projects.map((project, index) => (
                                <div key={index} className="max-w-full rounded overflow-hidden shadow-lg bg-white">
                                    <div className="bg-blue-700 h-2 w-full"></div>
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{project.projectName}</div>
                                        <ul className="list-disc mt-4 ml-4 text-gray-700 text-base">
                                            {project.projectDescription.map((description, i) => (
                                                <li key={i}>{description}</li>
                                            ))}
                                        </ul>
                                        <ul className="list-disc list-inside mt-4">
                                            <li className="flex items-center mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
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
            </div>
        </div>


    );
}

export default Projects;
