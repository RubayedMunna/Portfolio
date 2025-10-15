import React, { useState } from 'react';
import Conducted from './Conducted/Conducted';
import Participated from './Participated/Participated';

function SeminarWorkshop() {
    const [activeSection, setActiveSection] = useState('participated');

    const toggleContent = (sectionId) => {
        setActiveSection(sectionId);
    };

    const sections = [
        { id: 'participated', label: 'Participated Seminar/Workshop' },
        { id: 'conducted', label: 'Conducted Seminar/Workshop' },
    ];

    return (
        <div className="container mt-10 mx-auto">
            <div className="ms-3 me-4">

                {/* --- Stylish Seminars & Workshops Header --- */}
                <header className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white shadow-2xl">
                    {/* Animated radial gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-400/30 via-transparent to-transparent animate-pulse-slow"></div>

                    <div className="relative container mx-auto px-6 py-6 flex items-center justify-between">
                        {/* Left Section: Icon + Title + Subtitle */}
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-md border border-white/30">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                                    {/* Workshop / seminar icon (network/connection) */}
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-4xl font-extrabold tracking-tight">Seminars & Workshops</h1>
                                <p className="text-amber-200 text-sm mt-1">Participated and Conducted</p>
                            </div>
                        </div>

                        {/* Right Section: Badge */}
                        <div className="hidden md:block bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm font-medium tracking-wide hover:bg-white/20 transition">
                            <span className="text-amber-200">Knowledge Sharing</span>
                        </div>
                    </div>
                </header>


                {/* --- Modern Toggle Buttons --- */}
                <div className="flex gap-3 justify-center mb-8 flex-wrap">
                    {sections.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => toggleContent(id)}
                            className={`relative px-6 py-3 text-sm font-semibold rounded-full border transition-all duration-300 ${activeSection === id
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

                {/* --- Dynamic Content --- */}
                <div className="mt-6">
                    {activeSection === 'participated' && <Participated />}
                    {activeSection === 'conducted' && <Conducted />}
                </div>
            </div>
        </div>
    );
}

export default SeminarWorkshop;
