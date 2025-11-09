import React, { useState } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';


function Experience() {
    const [cards] = useState([
        {
            id: 1,
            jobTitle: 'Lecturer (Contractual)',
            jobType: 'Full Time',
            jobInstitution: 'Daffodil International University',
            institutionAddress: 'Daffodil Smart City, Ashulia, Dhaka',
            from: 'June 28, 2025',
            to: 'August 31, 2025',
            duration: 'One Semester',
            responsiblilities: [
                'Conduct undergraduate lectures and tutorials',
                'Assist in curriculum development and academic planning',
                'Engage in student mentoring and assessment',
            ],
        },

    ]);

    const [showModal, setShowModal] = useState(false);
    const [activeCard, setActiveCard] = useState(null);

    const openModal = (card) => {
        setActiveCard(card);
        setShowModal(true);
    };

    const closeModal = () => {
        setActiveCard(null);
        setShowModal(false);
    };

    return (
        <div className="container mt-5 mx-auto px-4 md:px-6">
            {/* Header */}
            <header className="text-center mb-14">
                {/* Gradient Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent inline-block drop-shadow-lg animate-fade-in">
                    Professional Experiences
                </h2>

                {/* Gradient Bottom Line */}
                <div className="w-28 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-3 rounded-full"></div>

                {/* Subtitle */}
                <p className="text-gray-600 mt-4 text-base italic">
                    Roles, responsibilities, and contributions
                </p>
            </header>


            {/* Experience Cards */}
            <div className="experience relative">
                {cards.map((card) => (
                    <div key={card.id} className="relative z-10">
                        <div className="w-full md:w-4/5 mx-auto bg-white shadow-xl overflow-hidden pb-3 rounded-xl border-2 border-amber-700 my-12 relative transition-all duration-500 ease-out transform hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl hover:bg-amber-50 group">

                            {/* Glowing Accent */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-500/10 via-orange-400/10 to-amber-600/10 blur-lg rounded-xl"></div>

                            <div className="bg-gradient-to-r from-white to-amber-50 text-gray-750 px-2 py-1 relative z-10 transition-colors duration-500 group-hover:bg-amber-100">
                                <h2 className="text-2xl font-bold flex flex-col md:flex-row items-center px-4 md:px-10">
                                    <span className="bg-white text-gray-900 px-4 py-2 rounded-lg shadow-sm">{card.jobTitle}</span>
                                </h2>

                                <h2 className="text-xl flex flex-col md:flex-row items-center px-4 md:px-10 mt-2">
                                    <span className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-sm">{card.jobType}</span>
                                </h2>

                                <h2 className="text-xl font-bold flex flex-col md:flex-row items-center px-4 md:px-10 mt-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 text-amber-700 mr-2"
                                    >
                                        <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                                        <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
                                        <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                                    </svg>
                                    <span className="bg-white text-gray-700 pr-4 pl-0 rounded-lg shadow-sm ml-0 md:ml-2 mt-1 md:mt-0">
                                        {card.jobInstitution}, {card.institutionAddress}
                                    </span>
                                </h2>


                                <div className="bg-white px-6 py-4 mt-3 space-y-3">
                                    {/* Date Range */}
                                    <h2 className="text-lg text-gray-700 text-center md:text-left">
                                        <span className="bg-amber-600 text-white px-4 py-2 rounded-lg shadow-md font-semibold">
                                            {card.from} - {card.to}
                                        </span>
                                    </h2>

                                    {/* Duration */}
                                    <h2 className="text-md text-slate-700 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
                                        <FaClock className="text-slate-500 w-5 h-5" />
                                        <span className="bg-slate-200 text-slate-900 px-3 py-1 rounded-lg font-medium shadow-sm">
                                         {card.duration}
                                        </span>
                                    </h2>
                                </div>


                                {/* Button to open modal */}
                                {/* Button to open modal */}
                                <div className="flex justify-center md:justify-start mt-4 px-4 md:px-10">
                                    <button
                                        onClick={() => openModal(card)}
                                        className="bg-slate-600 text-white font-semibold px-5 py-2 rounded-2xl shadow-md hover:bg-slate-700 hover:shadow-slate-400 transition-all duration-300 flex items-center gap-2"
                                    >
                                        <i className="bx bx-list-check text-lg"></i> Key Responsibilities
                                    </button>
                                </div>

                            </div>

                            {/* Bottom Line Hover Effect */}
                            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-500 ease-in-out rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Key Responsibilities Modal */}
            {showModal && activeCard && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto shadow-2xl border-2 border-amber-600"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-amber-700">Key Responsibilities</h3>
                            <button
                                onClick={closeModal}
                                className="text-amber-600 hover:text-amber-800 transition-colors duration-300"
                            >
                                <i className="bx bx-x text-xl"></i>
                            </button>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            {activeCard.responsiblilities.map((res, idx) => (
                                <li key={idx}>{res}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Experience;
