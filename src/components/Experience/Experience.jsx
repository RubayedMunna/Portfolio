import React, { useState } from 'react'
function Experience() {
    const [cards, setCards] = useState([
        {
            id: 1,
            jobTitle: 'Job Title',
            jobType: 'Full Time/Short Time',
            jobInstitution: 'Company',
            institutionAddress: 'Address',
            from: 'Joining Date',
            to: 'Ending Date',
            duration: 'Duration',
            responsiblilities: [
                'Responsibilities 1',
                'Responsibilities 2',
                'Responsibilities 3',
                
            ],
        },
        // Add more card objects as needed
        
    ]);
    return (
        <div>
            <div className="container mt-5 mx-auto">
                <div className="ms-3 me-4">
                    <header className="bg-gray-500 text-white py-4 rounded-lg">
                        <div className="container mx-auto ml-4">
                            <h1 className="text-3xl font-bold">ProfessionalExperiences</h1>
                        </div>
                    </header>
                    <div className="container mx-auto mt-5">
                        <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
                            <div>
                                {cards.map((card) => (
                                    <div key={card.id} className="w-4/5 mx-auto bg-white shadow-md overflow-hidden rounded-md border-l-8 border-blue-700 my-10 ">
                                        <div className="bg-white-500 text-white px-2 py-1">
                                            <h2 className="text-2xl font-bold">
                                                <span className="bg-white text-gray-900 px-4 py-2 rounded">{card.jobTitle}</span>
                                            </h2>
                                        </div>
                                        <div className="bg-white-500 text-white px-2 py-1">
                                            <h2 className="text-l">
                                                <span className="bg-white text-gray-900 px-4 py-2 rounded">{card.jobType}</span>
                                            </h2>
                                        </div>
                                        <div className="bg-white-500 text-white px-2 py-1">
                                            <h2 className="text-xl">
                                                <span className="bg-white font-bold text-gray-900 px-4 py-2 rounded">{card.jobInstitution}, {card.institutionAddress}</span>
                                            </h2>
                                        </div>

                                        <div className="bg-white-500 text-white px-2 py-1">
                                            <h2 className="text-l text-gray-700">
                                                <span className={"bg-gray-500 mx-4 text-white px-2 py-2 rounded"}>{card.from} - {card.to} : {card.duration}</span>
                                            </h2>
                                        </div>

                                        <div className='my-4 mx-10'>
                                            <ul className="list-disc">
                                                {card.responsiblilities.map((responsibility, index) => (
                                                    <li key={index}>{responsibility}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Experience;
