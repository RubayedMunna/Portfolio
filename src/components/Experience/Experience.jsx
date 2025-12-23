import React, { useState } from 'react';
import { FaClock, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

function Experience() {
    const [cards] = useState([
        {
            id: 1,
            jobTitle: 'Lecturer',
            jobType: 'Full Time',
            jobInstitution: 'Department of CSE, Daffodil International University',
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
        // {
        //     id: 2,
        //     jobTitle: 'Research Assistant',
        //     jobType: 'Part Time',
        //     jobInstitution: 'Independent University, Bangladesh',
        //     institutionAddress: 'Bashundhara R/A, Dhaka',
        //     from: 'Jan 2024',
        //     to: 'Dec 2024',
        //     duration: '1 Year',
        //     responsiblilities: [
        //         'Analyzed datasets for NLP research',
        //         'Co-authored 2 conference papers',

        //     ],
        // },
    ]);

    return (
        <div className="container mt-10 mx-auto px-4 max-w-3xl mb-20">

            {/* Header */}
            {/* <header className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent inline-block drop-shadow-lg">
                    Professional Experiences
                </h2>
                <div className="w-28 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-3 rounded-full"></div>
            </header> */}
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

            {/* TIMELINE ITEMS */}
            <div className="relative space-y-0">
                {cards.map((card, index) => (
                    <div key={card.id} className="relative pl-8 md:pl-12 py-2 group">

                        {/* --- THE ROPE (Vertical Line) --- */}
                        {/* Updated Logic:
                           - We removed the condition that stopped the line for the last item.
                           - Now 'h-full' applies to ALL items, so the line runs alongside the text for the last item too.
                           - We keep the 'top-[6px]' for index 0 so the line doesn't poke out above the first knot.
                        */}
                        <div
                            className={`absolute left-[3px] w-[2px] bg-amber-600 h-full
                            ${index === 0 ? 'top-[6px]' : 'top-0'} 
                            `}
                        ></div>

                        {/* --- THE KNOT (Circle) --- */}
                        <div className="absolute left-[-4px] top-[6px] h-4 w-4 rounded-full border-2 border-amber-600 bg-white z-10 group-hover:scale-125 transition-transform duration-300 shadow-sm"></div>

                        {/* CONTENT */}
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                            <h3 className="text-2xl font-bold text-gray-800">
                                {card.jobTitle}
                            </h3>
                            <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-1 rounded-full self-start">
                                {card.jobType}
                            </span>
                        </div>

                        <div className="text-lg text-amber-700 font-medium italic mb-2 flex flex-wrap items-center gap-2">
                            <span className="flex items-center gap-1">
                                <FaBuilding className="text-sm" /> {card.jobInstitution}
                            </span>
                            <span className="hidden sm:inline text-gray-400">|</span>
                            <span className="flex items-center gap-1 text-gray-500 text-base not-italic">
                                <FaMapMarkerAlt className="text-sm" /> {card.institutionAddress}
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-4">
                            <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-md text-sm font-bold shadow-sm">
                                {card.from} - {card.to}
                            </span>
                            <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2 border border-slate-200">
                                <FaClock className="text-xs" /> {card.duration}
                            </span>
                        </div>

                        <ul className="list-disc text-gray-600 ml-5 space-y-2 marker:text-amber-500 pb-8">
                            {card.responsiblilities.map((res, idx) => (
                                <li key={idx} className="pl-1 hover:text-gray-900 transition-colors">
                                    {res}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;