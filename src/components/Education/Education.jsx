import React, { useState } from 'react'
function Education() {
    

    // State for Education
    const [education, setEducation] = useState([
        {
            degree: 'Bachelor of Science',
            department: 'Computer Science',
            institution: 'University Name 1',
            gpa: '3.8',
            outof: '4.0',
            beginDate: 'August 2016',
            endDate: 'May 2020',
        },
        {
            degree: 'Master of Science',
            department: 'Data Science',
            institution: 'University Name 2',
            gpa: '4.0',
            outof: '4.0',
            beginDate: 'September 2020',
            endDate: 'Present',
        },
        // Add more education entries as needed
    ]);

    return (
        <div>
            <div className="container mt-5 mx-auto">
                <div className="ms-3 me-4">
                    <header className="bg-blue-500 text-white py-4 rounded-lg">
                        <div className="container mx-auto ml-4">
                            <h1 className="text-3xl font-bold">Education</h1>
                        </div>
                    </header>
                    <div className="container mx-auto mt-5">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
                            <div>
                                <div className='education mb-16'>
                                    {education.map((edu, index) => (
                                        <div key={index} className="w-4/5 mx-auto bg-white shadow-md overflow-hidden pb-3 rounded-md border-l-4 border-blue-700 my-5 ">
                                            <div className="bg-white-500 text-gray-900 px-2 py-1">
                                                <h2 className="text-2xl font-bold flex items-center px-10">
                                                    <span className='bg-white text-gray-900 pr-4 py-2 rounded '>
                                                        {edu.degree}
                                                    </span>
                                                </h2>
                                                <h2 className="text-xl font-bold flex items-center px-10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ">
                                                        <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                                                        <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clip-rule="evenodd" />
                                                        <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                                                    </svg>

                                                    <span className='bg-white text-gray-900 pr-4 pl-2 rounded '>
                                                        {edu.department}, {edu.institution}
                                                    </span>
                                                </h2>

                                                <h2 className="text-xl italic flex items-center px-10">
                                                    <span className='bg-white text-gray-900 pr-4 py-2 rounded '>
                                                        GPA: {edu.gpa} out of {edu.outof}
                                                    </span>
                                                </h2>
                                                <div className="bg-white-500 text-white px-6 py-1">
                                                    <h2 className="text-l text-gray-700">
                                                        <span className={"bg-gray-500 mx-4 text-white px-2 py-2 rounded"}>{edu.beginDate} - {edu.endDate}</span>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
