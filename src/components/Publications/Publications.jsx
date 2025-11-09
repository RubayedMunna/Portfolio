import React, { useState } from 'react';
import Journal from './Journal/Journal';
import Conference from './Conference/Conference';
import Book from './Book/Book';
import Poster from './Poster/Poster';
import { FaScroll } from 'react-icons/fa';

function Publications() {
    const [activeSection, setActiveSection] = useState('journal');

    const toggleContent = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div className="container mt-5 mx-auto px-4 md:px-6">
            {/* <div className="ms-3 me-4"> */}

            {/* --- Modern Header --- */}
            <header className="text-center mb-12 relative">
                {/* Icon and Title */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4">
                    

                    {/* Title and Subtitle */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent drop-shadow-lg">
                            Publications
                        </h2>
                        <div className="w-28 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-3 rounded-full"></div>
                        <p className="text-gray-600 mt-4 text-base italic">
                            Research work and academic contributions
                        </p>
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



            {/* --- Dynamic Content --- */}
            <div className="mt-6">
                {activeSection === 'journal' && <Journal />}
                {activeSection === 'conference' && <Conference />}
                {activeSection === 'book' && <Book />}
                {activeSection === 'poster' && <Poster />}
            </div>
            {/* </div> */}
        </div>
    );
}

export default Publications;
