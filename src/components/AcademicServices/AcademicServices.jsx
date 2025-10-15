import React, { useState } from 'react';
import { FaBook, FaMicrophone, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';

function AcademicServices() {
    const [activeSection, setActiveSection] = useState('journal');

    const toggleContent = (sectionId) => setActiveSection(sectionId);

    const sections = [
        { id: 'journal', label: 'Reviewer for Journal', icon: <FaBook className="text-amber-600 w-6 h-6" /> },
        { id: 'conference', label: 'Reviewer for Conference', icon: <FaMicrophone className="text-amber-600 w-6 h-6" /> },
        { id: 'program', label: 'Program Committee Member', icon: <FaUsers className="text-amber-600 w-6 h-6" /> },
    ];

    const journals = [
        { name: 'Journal Name 1', website: 'https://www.journal1website.com' },
        { name: 'Journal Name 2', website: 'https://www.journal2website.com' },
    ];

    const conferences = [
        { name: 'Conference Name 1', website: 'https://www.conference1website.com' },
        { name: 'Conference Name 2', website: 'https://www.conference2website.com' },
    ];

    const programCommittees = [
        { name: 'Program Committee Name 1', website: 'https://www.programcommittee1website.com' },
        { name: 'Program Committee Name 2', website: 'https://www.programcommittee2website.com' },
    ];

    const renderItems = (items, sectionIcon) => (
        <div className="grid grid-cols-1 gap-6 mt-6">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`w-4/5 mx-auto relative transition-transform duration-300 transform hover:scale-105 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                        }`}
                >
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-300 hover:border-amber-500">
                        {/* Card Header */}
                        <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-bold text-lg">
                            {sectionIcon}
                            <span>{item.name}</span>
                        </div>

                        {/* Card Body */}
                        <div className="px-6 py-4 bg-white text-gray-800 flex justify-between items-center">
                            <span className="text-gray-700">Click below to visit website</span>
                            <a
                                href={item.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition-colors"
                            >
                                Visit <FaExternalLinkAlt className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="container mt-10 mx-auto">
            {/* Header */}
            <header className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white shadow-2xl">
                {/* Animated radial gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-400/30 via-transparent to-transparent animate-pulse-slow"></div>

                <div className="relative container mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between">
                    {/* Left Section: Icon + Title + Subtitle */}
                    <div className="flex items-start md:items-center space-x-4">
                        <div className="hidden sm:flex w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-md border border-white/30">
                            <FaChalkboardTeacher className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Academic Services</h1>
                            <p className="text-amber-200 text-sm mt-1">Contributions, Support, and Leadership Roles</p>
                        </div>
                    </div>

                    {/* Right Section: Badge */}
                    <div className="hidden md:block bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm font-medium tracking-wide hover:bg-white/20 transition mt-2 md:mt-0">
                        <span className="text-amber-200">Contribution & Roles</span>
                    </div>
                </div>
            </header>

            {/* Section Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
                {sections.map(({ id, label }) => (
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

            {/* Content */}
            {activeSection === 'journal' && renderItems(journals, <FaBook className="text-amber-600 w-6 h-6" />)}
            {activeSection === 'conference' && renderItems(conferences, <FaMicrophone className="text-amber-600 w-6 h-6" />)}
            {activeSection === 'program' && renderItems(programCommittees, <FaUsers className="text-amber-600 w-6 h-6" />)}
        </div>
    );
}

export default AcademicServices;
