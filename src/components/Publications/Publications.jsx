import React, { useState } from 'react';
import Journal from './Journal/Journal';
import Conference from './Conference/Conference';
import Book from './Book/Book';
import Poster from './Poster/Poster';

function Publications() {
    const [activeSection, setActiveSection] = useState('journal');

    const toggleContent = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div className="container mt-10 mx-auto">
            <div className="ms-3 me-4">

                {/* --- Modern Header --- */}
                <header className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white shadow-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-400/40 via-transparent to-transparent animate-pulse-slow"></div>

                    <div className="relative container mx-auto px-6 py-6 flex items-center justify-between">
                        {/* Left Section */}
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-md border border-white/30">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-4xl font-extrabold tracking-tight">Publications</h1>
                                <p className="text-amber-200 text-sm mt-1">Research work and academic contributions</p>
                            </div>
                        </div>

                        {/* Right Badge */}
                        <div className="hidden md:block bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm font-medium tracking-wide hover:bg-white/20 transition">
                            <span className="text-amber-200">Scholarly Works</span>
                        </div>
                    </div>
                </header>

                {/* --- Modern Buttons --- */}
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                    {[
                        { id: 'journal', label: 'Journal' },
                        { id: 'conference', label: 'Conference Paper' },
                        { id: 'book', label: 'Book' },
                        { id: 'poster', label: 'Poster' }
                    ].map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => toggleContent(id)}
                            className={`relative px-6 py-3 text-sm font-semibold rounded-full border transition-all duration-300 ${
                                activeSection === id
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
                    {activeSection === 'journal' && <Journal />}
                    {activeSection === 'conference' && <Conference />}
                    {activeSection === 'book' && <Book />}
                    {activeSection === 'poster' && <Poster />}
                </div>
            </div>
        </div>
    );
}

export default Publications;
