import React, { useState } from 'react';

function Extracurricular() {
    const [extracurricularActivities, setExtracurricularActivities] = useState([
        {
            role: 'Executive Member',
            institution: 'Jahangirnagar University Robotics Club',
            website: 'https://www.facebook.com/profile.php?id=100093557881807&mibextid=ZbWKwL',
            beginDate: '17 January 2024',
            endDate: 'Present',
        },
        // Add more extracurricular activity entries as needed
    ]);

    const [competitions, setCompetitions] = useState([
        {
            name: 'Jahangirnagar University Science Club National Science Festival',
            status: 'Hosted',
            organizer: 'Jahangirnagar University Robotics Club (JURC) - Co-host',
            organizerWebsite: 'https://jurc.org/',
            location: 'Social Science Building, Jahangirnagar University, Bangladesh',
            disciplines: ['Line Follower Robot(LFR)', 'Robo Soccer'], // Updated to include multiple disciplines
            eventDate: 'September 21, 2024 (DELAYED)', // Added event date
            eventLink: 'https://facebook.com/events/s/6th-jusc-national-science-fest/2656085411239202/'
        },
        // Add more competition entries as needed
    ]);


    return (
        <div className="container mt-5 mx-auto">
            <div className="ms-3 me-4">
                <header className="bg-gray-500 text-white py-4 rounded-lg">
                    <div className="container mx-auto ml-4">
                        <h1 className="text-3xl font-bold">Extracurricular Activities</h1>
                    </div>
                </header>

                {/* Organizations Section */}
                <div className="container mx-auto mt-5">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Organizations</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {extracurricularActivities.map((activity, index) => (
                            <div key={index} className="w-4/5 mx-auto bg-white shadow-md overflow-hidden rounded-md border-l-8 border-blue-700 my-5 pb-3">
                                <div className="bg-white-500 text-gray-900 px-2 py-1">
                                    <h2 className="text-xl font-bold flex items-center px-10">
                                        <span className='bg-white text-gray-900 pr-4 py-2 rounded '>
                                            {activity.role}
                                        </span>
                                    </h2>
                                    <h2 className="text-xl font-bold flex items-center px-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                        </svg>
                                        <span className='bg-white text-gray-900 pr-4 py-2 rounded '>
                                            {activity.institution} |
                                        </span>
                                        <a href={activity.website} target='_blank' rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-2">
                                                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                                            </svg>
                                        </a>
                                    </h2>
                                    <div className="bg-white-500 text-white px-6 py-1">
                                        <h2 className="text-l text-gray-700">
                                            <span className={"bg-gray-500 mx-4 text-white px-2 py-2 rounded"}>{activity.beginDate} - {activity.endDate}</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Competitions Section */}
                <div className="container mx-auto mt-10">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Competitions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {competitions.map((competition, index) => (
                            <div key={index} className="max-w-full rounded overflow-hidden shadow-lg bg-white">
                                {/* Top Border Color Indicator */}
                                <div className="bg-blue-700 h-2 w-full"></div>

                                {/* Competition Details */}
                                <div className="px-6 py-4">
                                    {/* Competition Name */}
                                    <div className="font-bold text-xl mb-2">{competition.name}</div>

                                    {/* Event Date */}
                                    <div className="flex items-center mt-2 text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                                            <path fillRule="evenodd" d="M6 2.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v.75h.75A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25A2.25 2.25 0 0 1 5.25 3h.75v-.75Zm1.5 1.5v.75h10.5v-.75H7.5Z" clipRule="evenodd" />
                                        </svg>
                                        <span>{competition.eventDate}</span>
                                    </div>

                                    {/* Status */}
                                    <div className="flex items-center mt-2">
                                        <span className="bg-green-500 text-gray-100 font-semibold py-1 px-2 rounded-lg mr-4">{competition.status}</span>
                                    </div>

                                    {/* Organizer */}
                                    <div className="flex items-center mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                        </svg>
                                        {/* <span>{competition.organizer}</span> */}
                                        <span><a href={competition.organizerWebsite} className="text-blue-600 ml-2 hover:underline" target='_blank' rel="noopener noreferrer">{competition.organizer}</a></span>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 text-gray-600">
                                            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.487 0-4.705-3.98-8.6-8.68-8.6-4.7 0-8.68 3.895-8.68 8.6 0 3.507 2.02 6.497 3.963 8.487a19.58 19.58 0 0 0 2.684 2.282c.382.247.764.494 1.143.742ZM8.75 9.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z" clipRule="evenodd" />
                                        </svg>
                                        <span>{competition.location}</span>
                                    </div>

                                    {/* Event Link */}
                                    <div className="flex items-center mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 text-gray-600">
                                            <path fillRule="evenodd" d="M9.158 4.158a3.75 3.75 0 0 1 5.304 0L16.5 6.195a3.75 3.75 0 0 1 0 5.304l-2.25 2.25a.75.75 0 1 1-1.06-1.06l2.25-2.25a2.25 2.25 0 0 0 0-3.182L13.152 5.21a2.25 2.25 0 0 0-3.182 0L7.72 7.458a2.25 2.25 0 0 0 0 3.182.75.75 0 1 1-1.06 1.06 3.75 3.75 0 0 1 0-5.304l2.497-2.497ZM7.78 13.751a.75.75 0 0 1 0 1.06l-2.25 2.25a3.75 3.75 0 0 0 5.304 5.304l2.25-2.25a.75.75 0 1 1 1.06 1.06l-2.25 2.25a5.25 5.25 0 0 1-7.424-7.424l2.25-2.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M10.222 15.268a.75.75 0 0 1 1.06 0 4.1 4.1 0 0 0 5.79 0l2.498-2.497a4.1 4.1 0 0 0 0-5.79.75.75 0 0 1 1.06-1.06 5.6 5.6 0 0 1 0 7.91l-2.497 2.497a5.6 5.6 0 0 1-7.91 0 .75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                        </svg>
                                        <a href={competition.eventLink} className="text-blue-600 hover:underline" target='_blank' rel="noopener noreferrer">Event Link</a>
                                    </div>

                                    {/* Disciplines */}
                                    <div className="flex flex-wrap mt-4">
                                        {competition.disciplines.map((discipline, index) => (
                                            <span key={index} className="bg-indigo-200 text-indigo-700 font-semibold py-1 px-2 rounded-lg mr-2 mb-2">{discipline}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Extracurricular;
