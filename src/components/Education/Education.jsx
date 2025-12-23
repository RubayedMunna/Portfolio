import React, { useState } from 'react';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

function Education() {
    const [education] = useState([
        {
            degree: 'MASTERS OF SCIENCE (M.SC.)',
            department: 'Computer Science and Engineering',
            institution: 'Jahangirnagar University',
            address: 'Savar, Dhaka-1342, Bangladesh',
            gpa: 'CGPA: -',
            outof: '4.00',
            beginDate: 'July 2025',
            endDate: 'Present',
        },
        {
            degree: 'BACHELOR OF SCIENCE (B.SC.)',
            department: 'Computer Science and Engineering',
            institution: 'Jahangirnagar University',
            address: 'Savar, Dhaka-1342, Bangladesh',
            gpa: 'CGPA: 3.82',
            outof: '4.00',
            beginDate: 'March 2020',
            endDate: 'July 2025',
        },
        {
            degree: 'HIGHER SECONDARY CERTIFICATE (HSC)',
            department: 'Science',
            institution: 'Badargonj Govt. College',
            address: 'Rangpur, Bangladesh',
            gpa: 'GPA: 5.00',
            outof: '5.00',
            beginDate: 'July 2017',
            endDate: 'March 2019',
        },
        {
            degree: 'SECONDARY SCHOOL CERTIFICATE (SSC)',
            department: 'Science',
            institution: 'Awliagonj High School',
            address: 'Badarganj, Rangpur, Bangladesh',
            gpa: 'GPA: 4.41',
            outof: '5.00',
            beginDate: 'January 2015',
            endDate: 'February 2017',
        },
    ]);

    return (
        <div className="container mt-10 mx-auto px-4 max-w-2xl mb-20">
            
            {/* Header */}
            <header className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent inline-block drop-shadow-lg">
                    Education
                </h2>
                <div className="w-28 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-3 rounded-full"></div>
                <p className="text-gray-600 mt-4 text-base italic">
                    Timeline of learning, growth, and milestones
                </p>
            </header>

            {/* TIMELINE ITEMS */}
            <div className="relative space-y-0">
                {education.map((edu, index) => (
                    <div key={index} className="relative pl-8 md:pl-12 py-2 group">
                        
                        {/* --- THE ROPE (Vertical Line) --- */}
                        <div 
                            className={`absolute left-[3px] w-[2px] bg-amber-600 h-full
                            ${index === 0 ? 'top-[6px]' : 'top-0'} 
                            `}
                        ></div>

                        {/* --- THE KNOT (Circle) --- */}
                        <div className="absolute left-[-4px] top-[6px] h-4 w-4 rounded-full border-2 border-amber-600 bg-white z-10 group-hover:scale-125 transition-transform duration-300 shadow-sm"></div>

                        {/* CONTENT */}
                        <div className="flex flex-col gap-1">
                            
                            {/* Degree Title */}
                            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                {edu.degree}
                            </h3>

                            {/* Department */}
                            <span className="text-lg font-semibold text-amber-700">
                                {edu.department}
                            </span>

                            {/* Institution & Address Wrapper */}
                            {/* Mobile: flex-col (stacked) | Desktop: flex-row (same line) */}
                            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 my-2 text-md text-gray-700">
                                
                                {/* Institution Name */}
                                <div className="font-bold flex items-center gap-2">
                                    <FaUniversity className="text-amber-600 text-lg"/> 
                                    {edu.institution}
                                    {/* Comma: Hidden on Mobile, Visible on Desktop */}
                                    <span className="hidden md:inline text-gray-800">,</span>
                                </div>
                                
                                {/* Address */}
                                <div className="text-sm md:text-md text-gray-500 italic flex items-center gap-2 md:gap-0">
                                    {/* Icon: Visible on Mobile, Hidden on Desktop */}
                                    <FaMapMarkerAlt className="text-amber-500/70 md:hidden"/> 
                                    {edu.address}
                                </div>
                            </div>

                            {/* Badges Row (GPA & Date) */}
                            <div className="flex flex-wrap gap-3 mb-6 mt-1">
                                {/* Date Badge */}
                                <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-md text-sm font-bold shadow-sm flex items-center gap-2">
                                    <FaCalendarAlt className="text-slate-500"/>
                                    {edu.beginDate} - {edu.endDate}
                                </span>

                                {/* GPA Badge */}
                                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-md text-sm font-bold shadow-sm border border-amber-200 flex items-center gap-2">
                                    <FaStar className="text-amber-500 text-xs"/>
                                    {edu.gpa} / {edu.outof}
                                </span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;