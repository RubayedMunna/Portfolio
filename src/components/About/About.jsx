import React, { useState } from 'react';

function About() {
    const [name, setName] = useState('Rubayed All Islam');
    const [cards, setCards] = useState([
    {
        id: 1,
        title: 'Introduction',
        content: 'I am Rubayed All Islam, a Lecturer in Computer Science and Engineering at Daffodil International University, currently pursuing my M.Sc. from Jahangirnagar University. I’m passionate about teaching, research, and lifelong learning.',
        icon: '👋'
    },
    {
        id: 2,
        title: 'Academic & Professional Interests',
        content: 'My interests include Machine Learning, Deep Learning, NLP, IoT, and Software Engineering. I enjoy mentoring students, conducting research, and developing practical software solutions.',
        icon: '🎯'
    },
    {
        id: 3,
        title: 'Personal Approach',
        content: 'I am a self-motivated and detail-oriented educator who values clarity, precision, and engagement. I aim to make complex topics accessible and inspire curiosity in my students.',
        icon: '💡'
    },
    {
        id: 4,
        title: 'Technical Expertise',
        content: 'Skilled in C, C++, Java, Python, JavaScript, Django, MySQL, HTML5, and CSS, I focus on building efficient solutions while constantly improving my technical and research skills.',
        icon: '⚡'
    },
    {
        id: 5,
        title: 'Long-term Vision',
        content: 'I aspire to excel in academia through impactful teaching and research, supporting students in achieving their goals and contributing meaningfully to computer science.',
        icon: '🚀'
    }
]);


    return (
        <div>
            <div className="container mt-5 mx-auto">
                <div className="ms-3 me-4">
                    

                    <div className="infoArea mt-5">
                        <div className="about-timeline relative">
                            {/* Vertical Rope Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-3 z-0">
                                <div className="w-full h-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 rounded-full relative">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 opacity-30"></div>
                                    <div className="absolute top-1/3 left-0 w-full h-1 bg-amber-400 opacity-20"></div>
                                    <div className="absolute top-2/3 left-0 w-full h-1 bg-amber-500 opacity-30"></div>
                                </div>
                            </div>

                            {cards.map((card, index) => (
                                <div key={card.id} className="relative z-10 mb-8">
                                    {/* Card */}
                                    <div className={`w-4/5 mx-auto bg-white shadow-xl rounded-xl border-2 border-amber-700 overflow-hidden transition-all duration-300 hover:scale-105 ${
                                        index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                                    }`}>
                                        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4">
                                            <div className="flex items-center">
                                                <span className="text-2xl mr-3">{card.icon}</span>
                                                <h3 className="text-xl font-bold">{card.title}</h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-gray-700 text-justify leading-relaxed">
                                                {card.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;