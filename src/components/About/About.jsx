import React, { useState } from 'react';

function About() {
    const [name, setName] = useState('Rubayed All Islam');
    const [paragraphs, setParagraphs] = useState([
        'Currently I am studying B.Sc. in Computer Science and Engineering from Jahangirnagar University. I enjoy problem-solving and coding. Always strive to bring 100% to the work I do. I have worked on technologies like C, C++, Java, Python, JavaScript, Django, MySQL, HTML5, CSS.',
        'I am enthusiastic about exploring cutting-edge technology, and my interest in research is fueled by a passion for areas such as machine learning and deep learning. I am particularly intrigued by the applications of these technologies in computer vision and natural language processing. While I currently do not have any formal research work, my keen interest and curiosity drive me to actively seek opportunities to contribute to these evolving fields.',
        'I have a broad range of research interests that span captivating areas within the field of technology. These include Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision & Pattern Recognition, Natural Language Processing, and Data Mining in Social Networks.',
        'I am defined by my self-motivation and unwavering dedication to every task I embark upon, irrespective of its complexity or scale. When disseminating knowledge, I prioritize delivering information with clarity and precision. My insatiable thirst for learning drives me to eagerly embrace new technologies and ideas. When faced with something truly captivating, my dedication soars to new heights. In my areas of expertise, I demonstrate a steadfast ability to offer valuable suggestions, recommendations, strategic planning, execution methods, and more.',
        'As I enter this new phase in my academic journey, pursuing my undergraduate studies, I eagerly anticipate delving into unexplored territories within the realm of computer science. My goal is to push boundaries, embrace challenges, and make meaningful contributions to the ever-evolving field of technology.',
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
