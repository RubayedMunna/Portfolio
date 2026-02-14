import React, { useState } from 'react';
// import './About.css'; // Ensure this doesn't conflict with Tailwind

function About() {
  const [cards] = useState([
    {
      id: 1,
      title: 'Introduction',
      content:
        'I am Rubayed All Islam, a Lecturer of CSE in department of Textile Engineering at Southeast University, currently pursuing my M.Sc. from Jahangirnagar University. I’m passionate about teaching, research, and lifelong learning.',
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
    <div className="container mx-auto px-4 md:px-10 mt-5 mb-20">
      {/* Gradient Heading (Untouched as requested) */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent inline-block drop-shadow-lg animate-fade-in">
          About Me
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-600 mt-4 text-base italic">
          “Exploring technology, inspiring minds, and shaping future innovators.”
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`
                group relative bg-white rounded-2xl border border-amber-100 
                shadow-md hover:shadow-xl hover:border-amber-300
                transition-all duration-300 ease-out 
                flex flex-col p-8
                ${cards.length % 2 !== 0 && index === cards.length - 1
                    ? 'md:col-span-2 md:w-2/3 md:mx-auto' 
                    : ''}
            `}
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-50/50 via-white to-transparent rounded-2xl"></div>

            {/* Card Content Container */}
            <div className="relative z-10">
                
                {/* Icon & Title Row */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-2xl shadow-sm group-hover:bg-amber-100 transition-colors">
                        {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-700 transition-colors">
                        {card.title}
                    </h3>
                </div>

                {/* Text Content */}
                <p className="text-gray-600 leading-relaxed text-base">
                    {card.content}
                </p>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-amber-100 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-500 transition-all duration-500 rounded-b-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;