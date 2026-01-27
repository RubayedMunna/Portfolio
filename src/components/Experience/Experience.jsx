import React, { useState } from 'react';
import { FaClock, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

function Experience() {

    // ✅ Duration Calculation Function
    const calculateDuration = (from, to) => {
        const startDate = new Date(from);
        const endDate = to === "Present" ? new Date() : new Date(to);

        let months =
            (endDate.getFullYear() - startDate.getFullYear()) * 12 +
            (endDate.getMonth() - startDate.getMonth());

        if (endDate.getDate() < startDate.getDate()) {
            months--;
        }

        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;

        if (years > 0 && remainingMonths > 0)
            return `${years} Year${years > 1 ? "s" : ""} ${remainingMonths} Month${remainingMonths > 1 ? "s" : ""}`;

        if (years > 0)
            return `${years} Year${years > 1 ? "s" : ""}`;

        return `${remainingMonths} Month${remainingMonths !== 1 ? "s" : ""}`;
    };

    const [cards] = useState([
        {
            id: 1,
            jobTitle: 'Lecturer',
            jobType: 'Full Time',
            jobInstitution: 'Department of CSE, Southeast University',
            institutionAddress: '251/A Tejgaon I/A, Dhaka 1208',
            from: 'February 08, 2026',
            to: 'Present',
            responsiblilities: [
                'Conduct undergraduate lectures and tutorials',
                'Assist in curriculum development and academic planning',
                'Engage in student mentoring and assessment',
            ],
        },
        {
            id: 2,
            jobTitle: 'Lecturer',
            jobType: 'Full Time',
            jobInstitution: 'Department of CSE, Daffodil International University',
            institutionAddress: 'Daffodil Smart City, Ashulia, Dhaka',
            from: 'June 28, 2025',
            to: 'August 31, 2025',
            responsiblilities: [
                'Conduct undergraduate lectures and tutorials',
                'Assist in curriculum development and academic planning',
                'Engage in student mentoring and assessment',
            ],
        },
    ]);

    return (
        <div className="container mt-10 mx-auto px-4 max-w-3xl mb-20">

            <header className="text-center mb-14">

                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent inline-block drop-shadow-lg animate-fade-in">
                    Professional Experiences
                </h2>

                <div className="w-28 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-3 rounded-full"></div>

                <p className="text-gray-600 mt-4 text-base italic">
                    Roles, responsibilities, and contributions
                </p>

            </header>

            {/* TIMELINE ITEMS */}
            <div className="relative space-y-0">
                {cards.map((card, index) => (
                    <div key={card.id} className="relative pl-8 md:pl-12 py-2 group">

                        {/* --- THE ROPE --- */}
                        <div
                            className={`absolute left-[3px] w-[2px] bg-amber-600 h-full
                            ${index === 0 ? 'top-[6px]' : 'top-0'}`}
                        ></div>

                        {/* --- THE KNOT --- */}
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

                            {/* ✅ AUTO DURATION */}
                            <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2 border border-slate-200">
                                <FaClock className="text-xs" />
                                {calculateDuration(card.from, card.to)}
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
