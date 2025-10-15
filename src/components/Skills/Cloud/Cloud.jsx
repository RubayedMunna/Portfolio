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
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {skillCards.map((card, index) => (
                    <div 
                        key={index} 
                        className="w-full bg-white shadow-lg overflow-hidden rounded-xl border-2 border-amber-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-amber-400 hover:bg-amber-50"
                    >
                        <div className='border-2 border-amber-300 rounded-xl overflow-hidden py-2'>
                            <div className="px-6 py-4 flex items-center justify-between">
                                {/* Skill Name */}
                                <div className="font-bold text-xl text-gray-800">{card.skillName}</div>

                                {/* Skill Percentage as a smaller button-like element */}
                                <div className="text-gray-700">
                                    <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                                        {`${card.skillPercentage}%`}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Progress bar background */}
                            <div className="bg-gray-200 h-4 my-2 mx-4 rounded-full shadow-inner">
                                {/* Animated progress bar */}
                                <div 
                                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-4 rounded-full transition-all duration-1000 ease-out shadow-md"
                                    style={{ width: `${card.skillPercentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cloud;