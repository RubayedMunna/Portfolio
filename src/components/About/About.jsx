import React, { useState } from 'react';
import './About.css';

function About() {
  const [cards] = useState([
    {
      id: 1,
      title: 'Introduction',
      content:
        'I am Rubayed All Islam, a Lecturer in Computer Science and Engineering at Daffodil International University, currently pursuing my M.Sc. from Jahangirnagar University. I’m passionate about teaching, research, and lifelong learning.',
      icon: '👋',
    },
    {
      id: 2,
      title: 'Academic & Professional Interests',
      content:
        'My interests include Machine Learning, Deep Learning, NLP, IoT, and Software Engineering. I enjoy mentoring students, conducting research, and developing practical software solutions.',
      icon: '🎯',
    },
    {
      id: 3,
      title: 'Personal Approach',
      content:
        'I am a self-motivated and detail-oriented educator who values clarity, precision, and engagement. I aim to make complex topics accessible and inspire curiosity in my students.',
      icon: '💡',
    },
    {
      id: 4,
      title: 'Technical Expertise',
      content:
        'Skilled in C, C++, Java, Python, JavaScript, Django, MySQL, HTML5, and CSS, I focus on building efficient solutions while constantly improving my technical and research skills.',
      icon: '⚡',
    },
    {
      id: 5,
      title: 'Long-term Vision',
      content:
        'I aspire to excel in academia through impactful teaching and research, supporting students in achieving their goals and contributing meaningfully to computer science.',
      icon: '🚀',
    },
  ]);

  return (
    <div className="container mx-auto px-4 md:px-10 mt-12 mb-20">
      {/* Gradient Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent inline-block drop-shadow-lg animate-fade-in">
          About Me
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-600 mt-4 text-base italic">
          “Exploring technology, inspiring minds, and shaping future innovators.”
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 justify-center">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`relative bg-white rounded-2xl border border-amber-700 overflow-hidden shadow-lg transition-all duration-500 ease-out transform hover:scale-[1.04] hover:-translate-y-2 hover:shadow-2xl hover:border-amber-500 hover:rotate-[0.3deg] hover:brightness-105 group w-full md:w-[90%] ${
              cards.length % 2 !== 0 && index === cards.length - 1
                ? 'md:col-span-2 md:mx-auto md:w-[50%]'
                : ''
            }`}
          >
            {/* Glowing Accent Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-500/10 via-orange-400/10 to-amber-600/10 blur-lg"></div>

            {/* Header */}
            <div className="relative bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-4 flex items-center">
              <h3 className="text-lg md:text-xl font-semibold flex items-center">
                <span className="text-2xl mr-3 hidden md:inline">{card.icon}</span>
                {card.title}
              </h3>
            </div>

            {/* Body */}
            <div className="relative px-6 py-6">
              <p className="text-gray-700 text-justify text-[15.5px] md:text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {card.content}
              </p>
            </div>

            {/* Shimmer Accent Line */}
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
