import React, { useState } from 'react';
import Conducted from './Conducted/Conducted'
import Participated from './Participated/Participated'

function SeminarWorkshop() {
    const [activeSection, setActiveSection] = useState('conducted');

    // Function to toggle the active section
    const toggleContent = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div>
            <div className="container mt-5 mx-auto">
                <div className="ms-3 me-4">
                    <header className="bg-gray-500 text-white py-4 rounded-lg">
                        <div className="container mx-auto ml-4">
                            <h1 className="text-3xl font-bold">Seminars and Workshops</h1>
                        </div>
                    </header>
                    <div className="container mx-auto mt-8">
                        {/* Buttons */}
                        <div className="inline-flex rounded-md shadow-sm">
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white  ${activeSection === 'conducted' && 'active'}`}
                                onClick={() => toggleContent('conducted')}
                            >
                                Conducted Seminar/Workshop
                            </button>
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white ${activeSection === 'participated' && 'active'}`}
                                onClick={() => toggleContent('participated')}
                            >
                                Participated Seminar/Workshop
                            </button>
                        </div>

                        {/* Content Sections */}
                        <div id="conducted" className={`content mt-4 ${activeSection !== 'conducted' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Conducted</h2>
                            <Conducted />
                        </div>

                        <div id="participated" className={`content mt-4 ${activeSection !== 'participated' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Participated</h2>
                            <Participated />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeminarWorkshop;
