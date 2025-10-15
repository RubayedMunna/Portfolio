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
        <div className="container mt-10 mx-auto">
            <div className="ms-3 me-4">

                {/* --- Stylish Skills Header --- */}
                <header className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white shadow-2xl">
                    {/* Animated radial gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-400/30 via-transparent to-transparent animate-pulse-slow"></div>

                    <div className="relative container mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between">
                        {/* Left Section: Icon + Title + Subtitle */}
                        <div className="flex items-start md:items-center space-x-4">
                            <div className="hidden sm:flex w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-md border border-white/30">
                                <FaCode className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Skills</h1>
                                <p className="text-amber-200 text-sm mt-1">Competencies & Expertise</p>
                            </div>
                        </div>

                        {/* Right Section: Badge */}
                        <div className="hidden md:block bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm font-medium tracking-wide hover:bg-white/20 transition mt-2 md:mt-0">
                            <span className="text-amber-200">Proficiencies</span>
                        </div>
                    </div>
                </header>

                {/* --- Modern Buttons --- */}
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                    {buttons.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => toggleContent(id)}
                            className={`relative px-5 py-2 text-sm font-semibold rounded-full border transition-all duration-300 ${activeSection === id
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

            </div>
        </div>
    );
}

export default Skills;
