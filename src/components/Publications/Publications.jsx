import React, { useState } from 'react';
import Journal from './Journal/Journal';
import Conference from './Conference/Conference';
import BookChapter from './BookChapter/BookChapter';
import Workshop from './Workshop/Workshop';
import Book from './Book/Book';
import Tutorial from './Tutorial/Tutorial';
import Poster from './Poster/Poster';

function Publications() {
    const [activeSection, setActiveSection] = useState('journal');

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
                            <h1 className="text-3xl font-bold">Publications</h1>
                        </div>
                    </header>
                    <div className="container mx-auto mt-8">
                        {/* Buttons */}
                        <div className="inline-flex rounded-md shadow-sm">
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white  ${activeSection === 'journal' && 'active'}`}
                                onClick={() => toggleContent('journal')}
                            >
                                Journal
                            </button>
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white  ${activeSection === 'conference' && 'active'}`}
                                onClick={() => toggleContent('conference')}
                            >
                                Conference Paper
                            </button>

                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white  ${activeSection === 'book' && 'active'}`}
                                onClick={() => toggleContent('book')}
                            >
                                Book
                            </button>
                            <button
                                className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white ${activeSection === 'poster' && 'active'}`}
                                onClick={() => toggleContent('poster')}
                            >
                                Poster
                            </button>
                            
                        </div>

                        {/* Content Sections */}
                        <div id="jounal" className={`content mt-4 ${activeSection !== 'journal' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Journals</h2>
                            <Journal />
                        </div>
                        <div id="conference" className={`content mt-4 ${activeSection !== 'conference' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Conference Papers</h2>
                            <Conference />
                        </div>

                        <div id="book" className={`content mt-4 ${activeSection !== 'book' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Books</h2>
                            <Book />
                        </div>

                        <div id="poster" className={`content mt-4 ${activeSection !== 'poster' && 'hidden'}`}>
                            <h2 className="text-2xl font-bold mb-3">Posters</h2>
                            <Poster />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publications;
