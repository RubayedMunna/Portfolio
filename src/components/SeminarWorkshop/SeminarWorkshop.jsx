import React, { useState } from 'react';
import Conducted from './Conducted/Conducted';
import Participated from './Participated/Participated';
import { FaBookReader } from 'react-icons/fa';

function SeminarWorkshop() {
    const [activeSection, setActiveSection] = useState('participated');

    const toggleContent = (sectionId) => setActiveSection(sectionId);

    const sections = [
        { id: 'participated', label: 'Participated' },
        { id: 'conducted', label: 'Conducted' },
    ];

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
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        {/* Icon hidden on mobile */}
                        <div className="hidden sm:flex w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-md border border-white/30 transition-transform duration-500 hover:rotate-12">
                            <FaBookReader className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Seminars & Workshops</h1>
                            <p className="text-amber-200 text-sm mt-1">Participated and Conducted</p>
                        </div>
                    </div>

                    {/* Right Badge */}
                    <div className="hidden md:block bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm font-medium tracking-wide hover:bg-white/20 transition mt-2 md:mt-0">
                        <span className="text-amber-200">Knowledge Sharing</span>
                    </div>
                </div>
            </header>


            {/* Toggle Buttons */}
            <div className="flex gap-3 justify-center mb-8 flex-wrap">
                {sections.map(({ id, label }) => (
                    <button
                        key={id}
                        onClick={() => toggleContent(id)}
                        className={`relative px-6 py-3 text-sm font-semibold rounded-full border transition-all duration-300 transform
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


            {/* Dynamic Content */}
            <div className="mt-6">
                {activeSection === 'participated' && <Participated />}
                {activeSection === 'conducted' && <Conducted />}
            </div>
        </div>
    );
}

export default SeminarWorkshop;
