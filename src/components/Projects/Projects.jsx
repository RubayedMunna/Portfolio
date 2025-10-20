import React, { useState } from 'react';

function Projects() {
    const [projects, setProjects] = useState([
        {
            projectName: 'Smart Class Routine Management System',
            projectDescription: [
                'A web application to automate and manage class routines efficiently.',
                'Developed with React.js (frontend), Node.js (backend), and MySQL (database).',
                'Supports agile management using Scrum, unit testing with Mocha, and CI/CD via GitHub Actions.',
                'Ensures conflict-free scheduling, rescheduling, and cancellation with admin control.'
            ],
            keySkills: ['React.js', 'Node.js', 'MySQL', 'Scrum', 'Mocha', 'CI/CD'],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'March 2024',
            githubUrl: 'https://github.com/JUCSE49-Mavericks/Smart-Class-Routine-Management-System.git',
            websiteUrl: '#'
        },
        {
            projectName: 'Outcome Based Education (OBE) System',
            projectDescription: [
                'Automates Outcome Based Education (OBE) processes for academic departments.',
                'React.js + Django based web application for tracking student performance and teacher evaluation.',
                'Provides analytics for student strengths/weaknesses and teaching effectiveness.'
            ],
            keySkills: ['React.js', 'Django', 'Data Analysis', 'Web Development'],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'October 2023',
            githubUrl: 'https://github.com/OBESystem/obe-system',
            websiteUrl: '#'
        },
        {
            projectName: 'Smart Vehicle Parking App (Android)',
            projectDescription: [
                'A mobile app to simplify parking by helping users find and reserve spots, while allowing admins to manage parking data.',
                'Supports role-based access: Users can search, view, and reserve spots in real-time; Admins can manage availability and monitor reservations.',
                'Features interactive maps, real-time parking tracking, and secure login/registration.'
            ],
            keySkills: ['Android Studio', 'Dart', 'Flutter', 'Firebase', 'Google Maps API', 'Git'],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'June 2025',
            githubUrl: 'https://github.com/RubayedMunna/svpa-frontend',
            websiteUrl: '#'
        },
        {
            projectName: 'IoT-Based Smart Warehouse',
            projectDescription: [
                'Monitors warehouse conditions and hazards using IoT technology.',
                'Hardware: Arduino, ESP32, DHT22, MQ-135, Flame Sensor for real-time sensing.',
                'Software: ThingSpeak for cloud analytics, React.js + Bootstrap dashboard for monitoring.',
                'Supports real-time environmental monitoring and hazard alerts.'
            ],
            keySkills: ['Arduino', 'ESP32', 'DHT22', 'MQ-135', 'Flame Sensor', 'ThingSpeak', 'React.js', 'Bootstrap', 'JavaScript', 'Git'],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'Jan 2025 - June 2025',
            githubUrl: 'https://github.com/RubayedMunna/IoT-Based-Smart-Warehouse',
            websiteUrl: '#'
        },
        {
            projectName: 'Machine Learning-Based Identification of Medicinal Plants from Leaf Images',
            projectDescription: [
                'A machine learning project for classifying medicinal leaves using image classification techniques.',
                'Handles high-dimensional image data, feature extraction, and variability in the dataset.',
                'Workflow: dataset preparation, HOG feature extraction, model training (SVM, SGD Classifier), evaluation via confusion matrix, and deployment.',
                'Applications include object detection, medical imaging, and autonomous systems requiring recognition of natural elements.'
            ],
            keySkills: ['Machine Learning', 'Image Classification', 'Scikit-learn', 'SVM', 'HOG', 'Python'],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'July 2025',
            githubUrl: 'https://github.com/RubayedMunna/ML-Based-Medicinal-Leaf-Classifier.git',
            websiteUrl: '#'
        },
        {
            projectName: 'Digit Recognition from MNIST Dataset',
            projectDescription: [
                'A machine learning project to recognize handwritten digits using deep learning.',
                'Implements a neural network for digit classification with model training and evaluation.',
                'Visualizes training results and predictions using accuracy plots and sample outputs.'
            ],
            keySkills: ['Python', 'NumPy', 'Keras', 'MNIST Dataset', 'Matplotlib', 'Jupyter Notebook'],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'May 2025',
            githubUrl: 'https://github.com/RubayedMunna/DigitRecognition_MNIST',
            websiteUrl: '#'
        },
        {
            projectName: 'Student Information System',
            projectDescription: [
                'Manages student registration and information storage.',
                'Built with PHP, HTML, CSS, and MySQL.',
                'Allows students to register, submit information, and retrieve records.'
            ],
            keySkills: ['PHP', 'HTML', 'CSS', 'MySQL'],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'December 2022',
            githubUrl: 'https://github.com/RubayedMunna/Registration-and-Login-System',
            websiteUrl: '#'
        },
        {
            projectName: 'Cloned Amazon',
            projectDescription: [
                'A front-end clone of the Amazon website built purely for learning purposes.',
                'Implemented using HTML and CSS.'
            ],
            keySkills: ['HTML', 'CSS', 'Front-End Development'],
            institutionName: 'Personal Project',
            projectDate: 'July 2023',
            githubUrl: 'https://github.com/RubayedMunna/cloned_amazon',
            websiteUrl: 'https://cloned-amazon-rubayed.netlify.app/'
        },
        {
            projectName: 'Student Hostel Management System with JAVA',
            projectDescription: [
                'Manages hostel operations including rooms, canteen, governing body, and alumni information.',
                'Developed using Java for academic project purposes.'
            ],
            keySkills: ['Java', 'OOP', 'System Design'],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'July 2022',
            githubUrl: 'https://github.com/RubayedMunna/SHMS-With-OOP',
            websiteUrl: '#'
        },
        {
            projectName: 'Student Hostel Management System with C++',
            projectDescription: [
                'Similar to the Java version, manages hostel operations including rooms, canteen, governing body, and alumni.',
                'Built with C++ for academic purposes.'
            ],
            keySkills: ['C++', 'OOP', 'System Design'],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'January 2022',
            githubUrl: 'https://github.com/RubayedMunna/Student-Hostel-Management-System-C-',
            websiteUrl: '#'
        },
        {
            projectName: 'Tic-Tac-Toe and Simple Calculator',
            projectDescription: [
                'C-based project with two functionalities: a simple calculator and a tic-tac-toe game.',
                'System determines game outcome (win/draw) automatically.'
            ],
            keySkills: ['C', 'Game Logic', 'Problem Solving'],
            institutionName: 'CSE, Jahangirnagar University',
            projectDate: 'August 2021',
            githubUrl: 'https://github.com/RubayedMunna/Tic-Tac-Toe',
            websiteUrl: '#'
        }
    ]);



    return (
        <div className="container mt-5 mx-auto px-4 md:px-6">
            {/* Projects Header */}
            <header className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white shadow-2xl transition-all duration-500 ease-in-out hover:scale-[1.05] hover:shadow-amber-400/60 hover:shadow-3xl">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-400/40 via-transparent to-transparent animate-pulse-slow"></div>
                <div className="relative container mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex items-start md:items-center space-x-4">
                        <div className="hidden sm:flex w-12 h-12 rounded-full bg-white/20 backdrop-blur-md items-center justify-center shadow-md border border-white/30 transition-transform duration-500 hover:rotate-12">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Projects</h1>
                            <p className="text-amber-200 text-sm mt-1">Academic and personal projects showcasing skills</p>
                        </div>
                    </div>
                    <div className="hidden md:block bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm font-medium tracking-wide hover:bg-white/20 transition mt-2 md:mt-0">
                        <span className="text-amber-200">Portfolio Highlights</span>
                    </div>
                </div>
            </header>

            {/* Projects Grid */}
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
                            {/* Key Skills Section */}
                            <p className="mt-3 font-bold bg-amber-100 text-amber-800 px-2 py-1 rounded">
                                Key Skills:
                            </p>
                            <div className="flex flex-wrap mt-1 gap-2">
                                {project.keySkills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-sm font-semibold rounded-full bg-amber-200 text-amber-800 hover:bg-amber-300 transition-colors duration-300 shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

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
                                {/* GitHub Link */}
                                {project.githubUrl && project.githubUrl !== '#' && (
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
                                )}

                                {/* Website Link */}
                                {project.websiteUrl && project.websiteUrl !== '#' && (
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
                                )}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;