import React, { useState } from 'react';
import Projects from './Projects/Projects';
import Awards from './Awards/Awards';
import Certifications from './Certifications/Certifications';

function Accomplishments() {
    const [activeSection, setActiveSection] = useState('projects');

    // Function to toggle the active section
    const toggleContent = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div>
            <div className="container mt-5 mx-auto">
                <div className="ms-3 me-4">
                    <header className="bg-blue-500 text-white py-4 rounded-lg">
                        <div className="container mx-auto ml-4">
                            <h1 className="text-3xl font-bold">Accomplishments</h1>
                        </div>
                    </header>
                    <div className="container mx-auto mt-8">
                        {/* Buttons */}
                        <div className="flex flex-wrap space-x-4">
                            <button
                                className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 py-2 border border-gray-400 rounded shadow  ${activeSection === 'projects' && 'active'}`}
                                onClick={() => toggleContent('projects')}
                            >
                                Projects
                            </button>
                            <button
                                className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 py-2 border border-gray-400 rounded shadow ${activeSection === 'awards' && 'active'}`}
                                onClick={() => toggleContent('awards')}
                            >
                                Awards
                            </button>
                            <button
                                className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 py-2 border border-gray-400 rounded shadow ${activeSection === 'certifications' && 'active'}`}
                                onClick={() => toggleContent('certifications')}
                            >
                                Certifications
                            </button>
                        </div>

                        {/* Content Sections */}
                        <div id="projects" className={`content mt-4 ${activeSection !== 'projects' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Projects</h2>
                            <Projects />
                        </div>

                        <div id="awards" className={`content mt-4 ${activeSection !== 'awards' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Awards</h2>
                            <Awards />
                        </div>

                        <div id="certifications" className={`content mt-4 ${activeSection !== 'certifications' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Certifications</h2>
                            <Certifications />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accomplishments;
