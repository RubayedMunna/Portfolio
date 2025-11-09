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
            <header className="text-center mb-14 relative">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent inline-block drop-shadow-lg animate-fade-in">
                    Seminars & Workshops
                </h2>
                <div className="w-28 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-3 rounded-full"></div>
                <p className="text-gray-600 mt-4 text-base italic">
                    Knowledge Sharing
                </p>
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
