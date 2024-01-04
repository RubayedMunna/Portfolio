import React, { useState } from 'react';

function MachineLearning() {
    const [skillCards, setSkillCards] = useState([
        { skillName: 'ML Algorithms', skillPercentage: 10 },
        { skillName: 'Evaluation Metrices', skillPercentage: 20 },
        { skillName: 'SVN', skillPercentage: 0 },
        { skillName: 'Neural network architectures', skillPercentage: 0 },
        { skillName: 'Google colab', skillPercentage: 0 },
        { skillName: 'Jupyter notebook', skillPercentage: 0 },
        { skillName: 'Azure ML studio', skillPercentage: 0 },
        { skillName: 'Keras', skillPercentage: 0 },
        { skillName: 'Matplotlib', skillPercentage: 0 },
        { skillName: 'Neural network on NLP', skillPercentage: 0 },
        { skillName: 'Data augmentation', skillPercentage: 0 },
        { skillName: 'Sea born', skillPercentage: 0 },
        // Add more cards as needed
    ]);

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                {skillCards.map((card, index) => (
                    <div key={index} className="w-full bg-white shadow-md overflow-hidden rounded-md my-1 ">
                        <div className='border-r-2 border-l-8 border-l-blue-700 border-y-2 border-gray-700 overflow-hidden py-2 rounded-md'>
                            {/* Blue line at the top covering the entire width */}
                            {/* <div className="bg-blue-500 h-2"></div> */}

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
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MachineLearning;
