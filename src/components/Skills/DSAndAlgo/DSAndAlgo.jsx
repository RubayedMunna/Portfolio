import React, { useState } from 'react';

function DSAndAlgo() {
    const [skillCards, setSkillCards] = useState([
        { skillName: 'Data Structures', skillPercentage: 'Strong' },
        { skillName: 'Dynamic Programming', skillPercentage: 'Strong' },
        { skillName: 'Greedy Problems', skillPercentage: 'Strong' },
        { skillName: 'Graph Theory', skillPercentage: 'Expert' },
        { skillName: 'String', skillPercentage: 'Good' },
        { skillName: 'Computational Geometry', skillPercentage: 'Good' },
        { skillName: 'Math', skillPercentage: 'Strong' },
        { skillName: 'Game Theory', skillPercentage: 'Good' },
        // Add more cards as needed
    ]);

    const getSkillColor = (level) => {
        switch(level.toLowerCase()) {
            case 'expert': return 'bg-green-600';
            case 'strong': return 'bg-amber-600';
            case 'good': return 'bg-blue-600';
            default: return 'bg-amber-600';
        }
    };

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

                                {/* Skill Level as a smaller button-like element */}
                                <div className="text-gray-700">
                                    <span className={`inline-block ${getSkillColor(card.skillPercentage)} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md`}>
                                        {card.skillPercentage}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DSAndAlgo;