import React, { useState } from 'react';

function Cloud() {
    const [skillCards, setSkillCards] = useState([
        { skillName: 'Azure VM', skillPercentage: 0 },
        { skillName: 'Azure container registry', skillPercentage: 0 },
        { skillName: 'Azure SQL Database', skillPercentage: 0 },
        { skillName: 'Azure files', skillPercentage: 0 },
        { skillName: 'Azure cognitive services', skillPercentage: 0 },
        { skillName: 'Azure cosmos DB', skillPercentage: 0 },
        { skillName: 'Azure functions (serverless code)', skillPercentage: 0 },
        { skillName: 'Azure Bot services', skillPercentage: 0 },
        { skillName: 'Amazon S3', skillPercentage: 0 },
        { skillName: 'Azure app service', skillPercentage: 0 },
        // Add more cards as needed
    ]);

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                {skillCards.map((card, index) => (
                    <div key={index} className="w-full bg-white shadow-md overflow-hidden rounded-md my-5">
                        {/* Blue line at the top covering the entire width */}
                        <div className="bg-blue-500 h-2"></div>

                        <div className="px-6 py-4 flex items-center justify-between">
                            {/* Skill Name */}
                            <div className="font-bold text-xl">{card.skillName}</div>

                            {/* Skill Percentage as a smaller button-like element */}
                            <div className="text-gray-700">
                                <span className="inline-block bg-gray-500 text-white px-3 py-1 rounded-full text-sm">
                                    {`${card.skillPercentage}%`}
                                </span>
                            </div>
                        </div>

                        {/* Blue line based on skill percentage with increased thickness and margin-bottom */}
                        <div className="bg-gray-500 h-4 my-2 mx-2 rounded-md" style={{ width: `${card.skillPercentage}%` }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cloud;
