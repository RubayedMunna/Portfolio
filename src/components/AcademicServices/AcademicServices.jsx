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
        // { name: 'Journal Name 1', website: 'https://www.journal1website.com' },
        // { name: 'Journal Name 2', website: 'https://www.journal2website.com' },
    ];

    const conferences = [
        // { name: 'Conference Name 1', website: 'https://www.conference1website.com' },
        // { name: 'Conference Name 2', website: 'https://www.conference2website.com' },
    ];

    const programCommittees = [
        // { name: 'Program Committee Name 1', website: 'https://www.programcommittee1website.com' },
        // { name: 'Program Committee Name 2', website: 'https://www.programcommittee2website.com' },
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

    const NoItemsMessage = ({ sectionLabel }) => (
        <div className="text-center mt-6 py-8">
            <p className="text-gray-600 text-lg font-medium">
                No {sectionLabel.toLowerCase()} found.
            </p>
        </div>
    );

    return (
        <div className="container mt-5 mx-auto px-4 md:px-6">
            {/* Header */}
            <header className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent inline-block drop-shadow-lg animate-fade-in">
                    Academic Services
                </h2>
                <div className="w-28 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-3 rounded-full"></div>
                <p className="text-gray-600 mt-4 text-base italic">
                    Contributions, Support, and Leadership Roles
                </p>
            </header>



            {/* Section Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
                {sections.map(({ id, label }) => (
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


            {/* Content */}
            {activeSection === 'journal' && (
                journals.length > 0 ? renderItems(journals, <FaBook className="text-amber-600 w-6 h-6" />) : <NoItemsMessage sectionLabel="Reviewer for Journal" />
            )}
            {activeSection === 'conference' && (
                conferences.length > 0 ? renderItems(conferences, <FaMicrophone className="text-amber-600 w-6 h-6" />) : <NoItemsMessage sectionLabel="Reviewer for Conference" />
            )}
            {activeSection === 'program' && (
                programCommittees.length > 0 ? renderItems(programCommittees, <FaUsers className="text-amber-600 w-6 h-6" />) : <NoItemsMessage sectionLabel="Program Committee Member" />
            )}
        </div>
    );
}

export default AcademicServices;