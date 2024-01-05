import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaGoogle, FaResearchgate, FaOrcid, FaFacebook, FaHome, FaBriefcase, FaGraduationCap, FaScroll, FaCode, FaChalkboardTeacher, FaRunning, FaBookReader, FaMedal, FaWhatsapp, FaEnvelope, FaBug, FaDesktop } from 'react-icons/fa';
import Rubayed_Cropped from './../../assets/images/Rubayed_Cropped.jpg';
import { Link, useNavigate } from 'react-router-dom';

function SideNavBar() {
    

    return (
        <div>
            <aside className="bg-gray-800 text-white h-screen w-64 p-4 flex flex-col justify-between ">
                <div className='mb-5'>
                    {/* Image and Name */}
                    <div className='flex items-center justify-center'>
                    <img src={Rubayed_Cropped} alt="Rubayed All Islam" className="w-3/4 rounded-full mb-4 border-4 border-gray-400" />
                    </div>
                    {/* <img src={Rubayed_Cropped} alt="Rubayed All Islam" className="w-full rounded-full mb-4" /> */}
                    <div className='flex items-center justify-center'>
                        <Link to="/home">
                            <h2 className="text-2xl font-bold">Rubayed All Islam</h2>
                        </Link>
                    </div>



                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-4">
                        <a href="https://twitter.com/AllRubayed" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
                        <a href="https://www.linkedin.com/in/rubayed-all-islam-1683841b4/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
                        <a href="https://github.com/RubayedMunna" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaGoogle size={24} /></a>
                        <a href="https://www.researchgate.net/profile/Rubayed-Islam" target="_blank" rel="noopener noreferrer"><FaResearchgate size={24} /></a>
                        <a href="https://orcid.org/my-orcid?orcid=0009-0002-8494-4190" target="_blank" rel="noopener noreferrer"><FaOrcid size={24} /></a>
                        <a href="https://www.facebook.com/rubayed.munna/" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
                    </div>
                </div>

                <nav className="mb-4">
                    {/* Navigation Links with Icons */}
                    <ul className="space-y-2">
                        <li>
                            <Link to="/home" className="flex items-center">
                                <FaHome className="inline-block mr-2" />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/experience" className="flex items-center my-4">
                                <FaBriefcase className="inline-block mr-2" />
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="/education" className="flex items-center my-4">
                                <FaGraduationCap className="inline-block mr-2" />
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link to="/publications" className="flex items-center my-4">
                                <FaScroll className="inline-block mr-2" />
                                Publications
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills" className="flex items-center my-4">
                                <FaCode className="inline-block mr-2" />
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="/academic-service" className="flex items-center my-4">
                                <FaChalkboardTeacher className="inline-block mr-2" />
                                Academic Service
                            </Link>
                        </li>
                        <li>
                            <Link to="/extracurricular-activities" className="flex items-center my-4">
                                <FaRunning className="inline-block mr-2" />
                                Extracurricular Activities
                            </Link>
                        </li>
                        <li>
                            <Link to="/seminar-workshops" className="flex items-center my-4">
                                <FaBookReader className="inline-block mr-2" />
                                Seminars & Workshops
                            </Link>
                        </li>
                        <li>
                            <Link to="/accomplishment" className="flex items-center my-4">
                                <FaMedal className="inline-block mr-2" />
                                Accomplishments
                            </Link>
                        </li>

                        <li>
                            <Link to="/programming-problems" className="flex items-center my-4">
                                <FaDesktop className="inline-block mr-2" />
                                Programming Problems
                            </Link>
                        </li>
                    </ul>
                </nav>


                <footer className="text-sm text-gray-500">
                    <div className="flex items-center mt-2">
                        <FaWhatsapp className="text-green-500 mr-2" />
                        <span>+8801864852588</span>
                    </div>
                    
                    <div className="flex items-center mt-2">
                        <FaEnvelope className="text-blue-500 mr-2" />
                        <span>jucse29.370@gmail.com</span>
                    </div>
                    <div className="flex items-center mt-2">
                        <FaEnvelope className="text-blue-500 mr-2" />
                        <span>rubayedcse29@gmail.com</span>
                    </div>
                    <div className="flex items-center mt-2">
                        <FaEnvelope className="text-blue-500 mr-2" />
                        <span>rubayed.stu2019@juniv.edu</span>
                    </div>
                    <div className='my-5'>
                        &copy; 2023 | Rubayed All Islam
                    </div>
                    <div>

                    </div>
                </footer>
            </aside>
        </div>
    );
}

export default SideNavBar;
