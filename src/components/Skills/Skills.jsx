import React, { useState } from 'react';
import ProgrammingLanguage from './ProgrammingLanguage/ProgrammingLanguage';
import WebDevelopment from './WebDevelopment/WebDevelopment';
import Database from './Database/Database';
import MachineLearning from './MachineLearning/MachineLearning';
import ProjectManagement from './ProjectManagement/ProjectManagement';
import Cloud from './Cloud/Cloud';
import Miscellaneous from './Miscellaneous/Miscellaneous';
import DSAndAlgo from './DSAndAlgo/DSAndAlgo';
import { FaCode } from 'react-icons/fa';

function Skills() {
    const [activeSection, setActiveSection] = useState('programming-language');

    const toggleContent = (sectionId) => setActiveSection(sectionId);

    const buttons = [
        { id: 'programming-language', label: 'Programming Lang.' },
        { id: 'ds-algo', label: 'DS & Algo' },
        { id: 'web-development', label: 'Web Dev.' },
        { id: 'database', label: 'Database' },
        { id: 'machine-learning', label: 'Machine Learning' },
        { id: 'project-management', label: 'Project Management' },
        { id: 'cloud-technology', label: 'Cloud Tech' },
        { id: 'miscellaneous', label: 'Miscellaneous' },
    ];

    return (
        <div className="container mt-5 mx-auto px-4 md:px-6">
            {/* <div className="ms-3 me-4"> */}

            {/* --- Stylish Skills Header --- */}
            <header className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent inline-block drop-shadow-lg animate-fade-in">
                    Skills
                </h2>
                <div className="w-28 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-3 rounded-full"></div>
                <p className="text-gray-600 mt-4 text-base italic">
                    Competencies & Expertise
                </p>
            </header>



            {/* --- Modern Buttons --- */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
                {buttons.map(({ id, label }) => (
                    <button
                        key={id}
                        onClick={() => toggleContent(id)}
                        className={`relative px-5 py-2 text-sm font-semibold rounded-full border transition-all duration-300 transform
        ${activeSection === id
                                ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white border-amber-600 shadow-lg scale-105 hover:scale-[1.15] hover:shadow-2xl'
                                : 'bg-white text-gray-800 border-amber-300 hover:text-amber-700 hover:border-amber-500 hover:shadow-lg hover:scale-[1.12]'
                            }`}
                    >
                        {activeSection === id && (
                            <span className="absolute inset-0 bg-amber-400/20 blur-md rounded-full animate-pulse-slow"></span>
                        )}
                        <span className="relative z-10">{label}</span>
                    </button>
                ))}
            </div>


            {/* --- Content Sections --- */}
            <div className="mt-6 space-y-6">
                {activeSection === 'programming-language' && (
                    <>
                        <ProgrammingLanguage />
                    </>
                )}
                {activeSection === 'ds-algo' && (
                    <>
                        <DSAndAlgo />
                    </>
                )}
                {activeSection === 'web-development' && (
                    <>
                        <WebDevelopment />
                    </>
                )}
                {activeSection === 'database' && (
                    <>
                        <Database />
                    </>
                )}
                {activeSection === 'machine-learning' && (
                    <>
                        <MachineLearning />
                    </>
                )}
                {activeSection === 'project-management' && (
                    <>
                        <ProjectManagement />
                    </>
                )}
                {activeSection === 'cloud-technology' && (
                    <>
                        <Cloud />
                    </>
                )}
                {activeSection === 'miscellaneous' && (
                    <>
                        <Miscellaneous />
                    </>
                )}
            </div>

            {/* </div> */}
        </div>
    );
}

export default Skills;
