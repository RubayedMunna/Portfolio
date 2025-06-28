import React, { useState } from 'react';

function About() {
    const [name, setName] = useState('Rubayed All Islam');
    const [paragraphs, setParagraphs] = useState([
        'Currently I am a Lecturer in the Department of Computer Science and Engineering at Daffodil International University. I have recently completed my B.Sc. and am currently pursuing an M.Sc. in Computer Science and Engineering from Jahangirnagar University. With a deep-rooted passion for learning and innovation, I am dedicated to the pursuit of academic excellence, both as an educator and a lifelong learner.',
        
        'My academic and professional interests lie at the intersection of teaching, research, and practical software development. I take great joy in guiding students, engaging in meaningful research, and building impactful technological solutions. I am particularly drawn to fields such as Machine Learning, Deep Learning, Natural Language Processing (NLP), Data Mining, the Internet of Things (IoT), and Software Engineering.',
        
        'As a self-motivated and detail-oriented individual, I approach every task with a strong sense of purpose and dedication. My enthusiasm for technology and discovery drives me to explore cutting-edge domains and stay updated with emerging innovations. I believe in delivering knowledge with clarity and precision, and I strive to inspire students by making complex topics accessible and engaging.',
        
        'Throughout my journey, I have worked with various technologies including C, C++, Java, Python, JavaScript, Django, MySQL, HTML5, and CSS. My experiences have not only strengthened my technical abilities but also reinforced my desire to contribute to the growth and advancement of computer science.',
        
        'My long-term vision is to thrive in a university environment where I can continue teaching, conduct impactful research, and support students in realizing their academic and professional goals. I am committed to making meaningful contributions to academia, driven by curiosity, creativity, and a strong sense of responsibility.'
    ]);


    return (
        <div>
            <div className="container mt-5 mx-auto">
                <div className="ms-3 me-4">
                    <div className="HeaderArea ">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <header className="bg-gray-500 text-white py-4 rounded-lg">
                                        <div className="container mx-auto ml-4">
                                            <h1 className="text-3xl font-bold">About</h1>
                                        </div>
                                    </header>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="infoArea shadow-lg rounded-lg ">
                        <div class="bg-blue-500 h-2 w-full mt-20 rounded-lg"></div>
                        <div className="md:grid md:grid-cols-12 md:gap-4 ">
                            <div className="md:col-span-12 m-3.5">
                                <div className="prose text-justify whitespace-pre-wrap">
                                    <p className='mb-5'>
                                        Hello, I am <b>{name}</b>.
                                    </p>
                                    {paragraphs.map((paragraph, index) => (
                                        <p key={index} className="mt-6">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
