import React from 'react';

function About() {
    return (
        <div>
            <div className="container mt-5 mx-auto">
                <div className="ms-3 me-4">
                    <div className="HeaderArea ">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <header className="bg-blue-500 text-white py-4 rounded-lg">
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
                                        Hello, I am <b>Rubayed All Islam.</b>
                                    </p>
                                    <p className='mt-6'>
                                        I am currently embarking on an exciting journey as a Ph.D. student in the Department of Computer Science at Boise State University, where I also serve as a Graduate Teaching Assistant. Previously, I gained valuable industry experience as a Senior Software Engineer at Brain Station 23, Ltd.
                                    </p>
                                    <p className='mt-6'>
                                        My academic background includes earning both an M.Sc. and a B.Sc. in Computer Science and Engineering from Jahangirnagar University. Over the years, my passion for cutting-edge technology has driven me to delve into research in the fields of machine learning and deep learning, particularly in the domains of computer vision and natural language processing.
                                    </p >
                                    <p className='mt-6'>
                                        My Research Interests encompass a wide array of fascinating areas: Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision &amp; Pattern Recognition, Natural Language Processing, and Data Mining in Social Networks.
                                    </p>
                                    <p className='mt-6'>
                                        I am characterized by my self-motivation and dedication to each task I undertake, regardless of its complexity or scale. When sharing knowledge, I am committed to delivering it with clarity and precision. My thirst for learning is unquenchable, and I eagerly embrace new technologies and ideas. When I encounter something truly captivating, my dedication soars to new heights. In my expertise domains, I possess the steadfast ability to provide valuable suggestions, recommendations, planning strategies, execution methods, and more.
                                    </p>
                                    <p className='mt-6'>
                                        As I embark on this new chapter in my academic and professional journey, I look forward to exploring uncharted territories in the world of computer science, pushing boundaries, and contributing to the ever-evolving field of technology.
                                    </p>
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
