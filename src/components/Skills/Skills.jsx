import React, { useState } from 'react';
import ProgrammingLanguage from './ProgrammingLanguage/ProgrammingLanguage';
import WebDevelopment from './WebDevelopment/WebDevelopment'
import Database from './Database/Database'
import MachineLearning from './MachineLearning/MachineLearning'
import ProjectManagement from './ProjectManagement/ProjectManagement'
import Cloud from './Cloud/Cloud'
import Miscellaneous from './Miscellaneous/Miscellaneous'
import DSAndAlgo from './DSAndAlgo/DSAndAlgo';

function Skills() {
    const [activeSection, setActiveSection] = useState('programming-language');

    // Function to toggle the active section
    const toggleContent = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div>
            <div className="container mt-5 mx-auto">
                <div className="ms-3 me-4">
                    <header className="bg-gray-500 text-white py-4 rounded-lg">
                        <div className="container mx-auto ml-4">
                            <h1 className="text-3xl font-bold">Skills</h1>
                        </div>
                    </header>
                    <div className="container mx-auto mt-8">
                        {/* Buttons */}
                        <div className={'inline-flex rounded-md shadow-sm'} >
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white  ${activeSection === 'programming-language' && 'active'}`}
                                onClick={() => toggleContent('programming-language')}
                            >
                                Programming Lang.
                            </button>
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white  ${activeSection === 'ds-algo' && 'active'}`}
                                onClick={() => toggleContent('ds-algo')}
                            >
                                DS and Algorithm
                            </button>
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white  ${activeSection === 'web-development' && 'active'}`}
                                onClick={() => toggleContent('web-development')}
                            >
                                Web Dev.
                            </button>
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white  ${activeSection === 'database' && 'active'}`}
                                onClick={() => toggleContent('database')}
                            >
                                Database
                            </button>
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white  ${activeSection === 'machine-learning' && 'active'}`}
                                onClick={() => toggleContent('machine-learning')}
                            >
                                Machine Learning
                            </button>
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white  ${activeSection === 'project-management' && 'active'}`}
                                onClick={() => toggleContent('project-management')}
                            >
                                Project Management
                            </button>
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white  ${activeSection === 'cloud-technology' && 'active'}`}
                                onClick={() => toggleContent('cloud-technology')}
                            >
                                Cloud Technology
                            </button>
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white  ${activeSection === 'miscellaneous' && 'active'}`}
                                onClick={() => toggleContent('miscellaneous')}
                            >
                                Miscellaneous
                            </button>
                        </div>

                        {/* Content Sections */}
                        <div id="programming-language" className={`content mt-4 ${activeSection !== 'programming-language' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Programming Languages</h2>
                            <ProgrammingLanguage />
                        </div>
                        <div id="ds-algo" className={`content mt-4 ${activeSection !== 'ds-algo' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Data Structure and Algorithms</h2>
                            <DSAndAlgo />
                        </div>
                        <div id="web-development" className={`content mt-4 ${activeSection !== 'web-development' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Web Development</h2>
                            <WebDevelopment />
                        </div>
                        <div id="database" className={`content mt-4 ${activeSection !== 'database' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Database</h2>
                            <Database />
                        </div>
                        <div id="machine-learning" className={`content mt-4 ${activeSection !== 'machine-learning' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Machine Learning</h2>
                            <MachineLearning />
                        </div>
                        <div id="project-management" className={`content mt-4 ${activeSection !== 'project-management' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Project Management</h2>
                            <ProjectManagement />
                        </div>
                        <div id="cloud-technology" className={`content mt-4 ${activeSection !== 'cloud-technology' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Cloud Technology</h2>
                            <Cloud />
                        </div>
                        <div id="miscellaneous" className={`content mt-4 ${activeSection !== 'miscellaneous' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Miscellaneous</h2>
                            <Miscellaneous />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
