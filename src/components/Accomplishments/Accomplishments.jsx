import React, { useState } from 'react';
import Awards from './Awards/Awards';
import Certifications from './Certifications/Certifications';
import { FaMedal } from 'react-icons/fa';

function Accomplishments() {
    const [activeSection, setActiveSection] = useState('certifications');

    const toggleContent = (sectionId) => setActiveSection(sectionId);

    const sections = [
        { id: 'certifications', label: 'Certifications' },
        { id: 'awards', label: 'Awards' },
    ];

    return (
        <div className="container mt-10 mx-auto px-4 md:px-6">
            {/* Header */}
            <header className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white shadow-2xl">
                {/* Animated radial gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-400/30 via-transparent to-transparent animate-pulse-slow"></div>

                <div className="relative container mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between">
                    {/* Left Section */}
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        {/* Icon hidden on mobile */}
                        <div className="hidden sm:flex w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-md border border-white/30">
                            <FaMedal className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Accomplishments</h1>
                            <p className="text-amber-200 text-sm mt-1">Awards & Certifications</p>
                        </div>
                    </div>

                    {/* Right Badge */}
                    <div className="hidden md:block bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm font-medium tracking-wide hover:bg-white/20 transition mt-2 md:mt-0">
                        <span className="text-amber-200">Achievements</span>
                    </div>
                </div>
            </header>

            {/* Toggle Buttons */}
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

            {/* Dynamic Content */}
            <div className="mt-6">
                {activeSection === 'certifications' && <Certifications />}
                {activeSection === 'awards' && <Awards />}
            </div>
        </div>
    );
}

export default Accomplishments;
