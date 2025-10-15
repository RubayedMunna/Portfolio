import React, { useState, useMemo } from 'react';

function Poster() {
    const [cards, setCards] = useState([
        {
            id: 1,
            title: 'Poster Title 1',
            authors: 'Author1, My name, Author3, Author4',
            eventName: 'Conference Name 1',
            publishedYear: '2023',
            status: 'Presented',
            pdfLink: '#',
            citationLink: '#',
            sourceLink: '#',
            bibtex: `@misc{Nipo2023Poster1,
  title={Poster Title 1},
  author={Nipo, Akila and Islam, Rubayed All and Islam, Md. Imdadul},
  year={2023},
  note={Presented at Conference Name 1}
}`,
        },
        {
            id: 2,
            title: 'Upcoming Poster Title 2',
            authors: 'AuthorA, AuthorB',
            eventName: 'Conference Name 2',
            publishedYear: '2025',
            status: 'Submitted',
            pdfLink: '#',
            citationLink: '#',
            sourceLink: '#',
        },
        // Add more card objects as needed
    ]);

    const statuses = ['Status', 'Published', 'Accepted', 'Under Review', 'Submitted', 'Presented'];

    const [selectedYear, setSelectedYear] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [selectedBibTex, setSelectedBibTex] = useState('');

    const uniqueYears = useMemo(() => {
        const years = [...new Set(cards.map(card => card.publishedYear))].sort((a, b) => b - a);
        return ['Year', ...years];
    }, [cards]);

    // Filter cards based on selected year and status
    const filteredCards = cards.filter(
        (card) =>
            (selectedYear === '' || selectedYear === 'Year' || card.publishedYear === selectedYear) &&
            (selectedStatus === '' || selectedStatus === 'Status' || card.status === selectedStatus)
    );

    return (
        <div>
            <div className="md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-span-6 md:col-start-7">
                    <div className="md:flex md:space-x-4">
                        <div className="md:w-1/2 sm:w-full">
                            <select
                                className="form-select block w-full p-2 border border-amber-300 rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                            >
                                {uniqueYears.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="md:w-1/2 sm:w-full">
                            <select
                                className="form-select block w-full p-2 border border-amber-300 rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                            >
                                {statuses.map((status) => (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
                    <div>
                        {filteredCards.length > 0 ? (
                            filteredCards.map((card) => (
                                <div 
                                    key={card.id} 
                                    className="max-w-full mx-auto bg-white shadow-xl overflow-hidden rounded-xl border-2 border-amber-600 mt-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-amber-700"
                                >
                                    <div className="bg-gradient-to-r from-amber-50 to-white px-2 py-3">
                                        <h2 className="text-xl font-bold">
                                            <span className="bg-white text-amber-700 px-4 py-3 rounded-lg shadow-sm border border-amber-200">
                                                {card.title}
                                            </span>
                                        </h2>
                                    </div>
                                    <div className="px-6 py-4 bg-white">
                                        <p className="text-gray-700">
                                            {card.authors}. {card.eventName} ({card.publishedYear}).
                                        </p>
                                    </div>

                                    <div className="px-6 py-4 flex items-center justify-between bg-gradient-to-r from-white to-amber-50 border-t border-amber-200">
                                        <p className="text-gray-700">
                                            <span className={`bg-amber-600 text-white px-3 py-2 rounded-lg shadow-md font-semibold border border-amber-700`}>
                                                {card.status}
                                            </span>
                                        </p>
                                        {(card.status === 'Presented' || card.status === 'Published') && (
                                            <div className="flex space-x-3">
                                                {card.pdfLink && card.pdfLink !== '#' && (
                                                    <button className="bg-transparent hover:bg-amber-600 text-amber-700 font-semibold hover:text-white py-2 px-4 border-2 border-amber-600 hover:border-amber-700 rounded-lg transition-all duration-300 hover:scale-110">
                                                        <a href={card.pdfLink} target="_blank" rel="noopener noreferrer">
                                                            <i className="bx bxs-file-pdf text-xl"></i> PDF
                                                        </a>
                                                    </button>
                                                )}
                                                {card.bibtex && (
                                                    <button 
                                                        onClick={() => { 
                                                            setSelectedBibTex(card.bibtex); 
                                                            setShowModal(true); 
                                                        }} 
                                                        className="bg-transparent hover:bg-amber-600 text-amber-700 font-semibold hover:text-white py-2 px-4 border-2 border-amber-600 hover:border-amber-700 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer flex items-center"
                                                    >
                                                        <i className="bx bxs-quote-single-right text-xl mr-1"></i> Citation
                                                    </button>
                                                )}
                                                {card.sourceLink && card.sourceLink !== '#' && (
                                                    <button className="bg-transparent hover:bg-amber-600 text-amber-700 font-semibold hover:text-white py-2 px-4 border-2 border-amber-600 hover:border-amber-700 rounded-lg transition-all duration-300 hover:scale-110">
                                                        <a href={card.sourceLink} target="_blank" rel="noopener noreferrer">
                                                            <i className="bx bx-link text-xl"></i> Source
                                                        </a>
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-gray-600 mt-6 text-lg font-medium">
                                No publication found.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {showModal && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
                    onClick={() => setShowModal(false)}
                >
                    <div 
                        className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto shadow-2xl border-2 border-amber-600" 
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-amber-700">BibTeX Citation</h3>
                            <button 
                                onClick={() => setShowModal(false)} 
                                className="text-amber-600 hover:text-amber-800 transition-colors duration-300"
                            >
                                <i className="bx bx-x text-xl"></i>
                            </button>
                        </div>
                        <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-auto border border-gray-300 whitespace-pre-wrap">
                            {selectedBibTex}
                        </pre>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Poster;