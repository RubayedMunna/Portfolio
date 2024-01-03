import React, { useState } from 'react'
function AcademicServces() {
    // State for Reviewer for Journal
    const [journals, setJournals] = useState([
        { name: 'Journal Name 1', website: 'https://www.journal1website.com' },
        { name: 'Journal Name 2', website: 'https://www.journal2website.com' },
        // Add more journal entries as needed
    ]);

    // State for Reviewer for Conference
    const [conferences, setConferences] = useState([
        { name: 'Conference Name 1', website: 'https://www.conference1website.com' },
        { name: 'Conference Name 2', website: 'https://www.conference2website.com' },
        // Add more conference entries as needed
    ]);

    // State for Program Committee Member
    const [programCommittees, setProgramCommittees] = useState([
        { name: 'Program Committee Name 1', website: 'https://www.programcommittee1website.com' },
        { name: 'Program Committee Name 2', website: 'https://www.programcommittee2website.com' },
        // Add more program committee entries as needed
    ]);
    return (
        <div>
            <div className="container mt-5 mx-auto">
                <div className="ms-3 me-4">
                    <header className="bg-blue-500 text-white py-4 rounded-lg">
                        <div className="container mx-auto ml-4">
                            <h1 className="text-3xl font-bold">Academic Services</h1>
                        </div>
                    </header>
                    <div className="container mx-auto mt-5">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
                            <div>
                                <div className='reviewer-for-journal mb-16'>
                                    <div className='bg-white-500 w-4/5 mx-auto text-gray-900 font-bold text-2xl px-2 py-1'>
                                        Reviewer for Journal
                                    </div>
                                    {journals.map((journal, index) => (
                                        <div key={index} className="w-4/5 mx-auto bg-white shadow-md overflow-hidden rounded-md border-l-4 border-blue-700 my-5 ">
                                            <div className="bg-white-500 text-gray-900 px-2 py-1">
                                                <h2 className="text-xl flex items-center px-10">
                                                    <span className='bg-white text-gray-900 pr-4 py-2 rounded '>
                                                        {journal.name} |
                                                    </span>
                                                    <a href={journal.website}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                            <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                                                        </svg>

                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className='reviewer-for-conference mb-16'>
                                    <div className='bg-white-500 w-4/5 mx-auto text-gray-900 font-bold text-2xl px-2 py-1'>
                                        Reviewer for Conference
                                    </div>
                                    {conferences.map((conference, index) => (
                                        <div key={index} className="w-4/5 mx-auto bg-white shadow-md overflow-hidden rounded-md border-l-4 border-blue-700 my-5 ">
                                            <div className="bg-white-500 text-gray-900 px-2 py-1">
                                                <h2 className="text-xl flex items-center px-10">
                                                    <span className='bg-white text-gray-900 pr-4 py-2 rounded '>
                                                        {conference.name} |
                                                    </span>
                                                    <a href={conference.website}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                            <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                                                        </svg>

                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className='program-committee-member mb-16'>
                                    <div className='bg-white-500 w-4/5 mx-auto text-gray-900 font-bold text-2xl px-2 py-1'>
                                        Program Committee Member
                                    </div>
                                    {programCommittees.map((programCommittee, index) => (
                                        <div key={index} className="w-4/5 mx-auto bg-white shadow-md overflow-hidden rounded-md border-l-4 border-blue-700 my-5 ">
                                            <div className="bg-white-500 text-gray-900 px-2 py-1">
                                                <h2 className="text-xl flex items-center px-10">
                                                    <span className='bg-white text-gray-900 pr-4 py-2 rounded '>
                                                        {programCommittee.name} |
                                                    </span>
                                                    <a href={programCommittee.website}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                            <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                                                        </svg>

                                                    </a>
                                                </h2>
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

export default AcademicServces;
