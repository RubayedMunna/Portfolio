import React, { useState } from 'react';
import ProgrammingLanguage from './ProgrammingLanguage/ProgrammingLanguage';
import WebDevelopment from './WebDevelopment/WebDevelopment'
import Database from './Database/Database'
import MachineLearning from './MachineLearning/MachineLearning'
import ProjectManagement from './ProjectManagement/ProjectManagement'
import Cloud from './Cloud/Cloud'
import Miscellaneous from './Miscellaneous/Miscellaneous'

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
                    <header className="bg-blue-500 text-white py-4 rounded-lg">
                        <div className="container mx-auto ml-4">
                            <h1 className="text-3xl font-bold">Skills</h1>
                        </div>
                    </header>
                    <div className="container mx-auto mt-8">
                        {/* Buttons */}
                        <div className="flex flex-wrap space-x-4">
                            <button
                                className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 py-2 border border-gray-400 rounded shadow  ${activeSection === 'programming-language' && 'active'}`}
                                onClick={() => toggleContent('programming-language')}
                            >
                                Programming Lang.
                            </button>
                            <button
                                className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 py-2 border border-gray-400 rounded shadow  ${activeSection === 'web-development' && 'active'}`}
                                onClick={() => toggleContent('web-development')}
                            >
                                Web Dev.
                            </button>
                            <button
                                className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 py-2 border border-gray-400 rounded shadow  ${activeSection === 'database' && 'active'}`}
                                onClick={() => toggleContent('database')}
                            >
                                Database
                            </button>
                            <button
                                className={`bg-white hover.bg-gray-100 text-gray-800 font-semibold px-4 py-2 border border-gray-400 rounded shadow  ${activeSection === 'machine-learning' && 'active'}`}
                                onClick={() => toggleContent('machine-learning')}
                            >
                                Machine Learning
                            </button>
                            <button
                                className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 py-2 border border-gray-400 rounded shadow  ${activeSection === 'project-management' && 'active'}`}
                                onClick={() => toggleContent('project-management')}
                            >
                                Project Management
                            </button>
                            <button
                                className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 py-2 border border-gray-400 rounded shadow  ${activeSection === 'cloud-technology' && 'active'}`}
                                onClick={() => toggleContent('cloud-technology')}
                            >
                                Cloud Technology
                            </button>
                            <button
                                className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 py-2 border border-gray-400 rounded shadow  ${activeSection === 'miscellaneous' && 'active'}`}
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
