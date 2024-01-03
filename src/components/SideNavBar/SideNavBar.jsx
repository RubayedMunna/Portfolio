import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaGoogle, FaResearchgate, FaOrcid, FaFacebook, FaHome, FaBriefcase, FaGraduationCap, FaScroll, FaCode, FaChalkboardTeacher, FaRunning, FaBookReader, FaMedal, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Rubayed_Cropped from './../../assets/images/Rubayed_Cropped.jpg';
import { Link, useNavigate } from 'react-router-dom';

function SideNavBar() {
    const navigate = useNavigate();

    const gotoHome = () => {
        navigate('/home');
    };

    const gotoExperience = () => {
        navigate('/experience');
    };

    const gotoEducation = () => {
        navigate('/education');
    };

    const gotoPublications = () => {
        navigate('/publications');
    };

    const gotoSkills = () => {
        navigate('/skills');
    };

    const gotoAcademicService = () => {
        navigate('/academic-service');
    };

    const gotoExtracurricularActivities = () => {
        navigate('/extracurricular-activities');
    };

    const gotoSeminarWorkshops = () => {
        navigate('/seminar-workshops');
    };

    const gotoAccomplishments = () => {
        navigate('/accomplishment');
    };

    return (
        <div>
            <aside className="bg-gray-800 text-white h-screen w-64 p-4 flex flex-col justify-between ">
                <div className='mb-5'>
                    {/* Image and Name */}
                    <img src={Rubayed_Cropped} alt="Rubayed All Islam" className="w-full rounded-full mb-4" />
                    <h2 className="text-xl font-bold">Rubayed All Islam</h2>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
                        <a href="https://www.linkedin.com/in/rubayed-all-islam-1683841b4/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
                        <a href="https://github.com/RubayedMunna" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaGoogle size={24} /></a>
                        <a href="https://www.researchgate.net/profile/Rubayed-Islam" target="_blank" rel="noopener noreferrer"><FaResearchgate size={24} /></a>
                        <a href="https://orcid.org/my-orcid?orcid=0009-0002-8494-4190" target="_blank" rel="noopener noreferrer"><FaOrcid size={24} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
                    </div>
                </div>

                <nav className="mb-4">
                    {/* Navigation Links with Icons */}
                    <ul className="space-y-2">
                        <li>
                            <Link to="/home" className="flex items-center" onClick={gotoHome}>
                                <FaHome className="inline-block mr-2" />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/experience" className="flex items-center my-4" onClick={gotoExperience}>
                                <FaBriefcase className="inline-block mr-2" />
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="/education" className="flex items-center my-4" onClick={gotoEducation}>
                                <FaGraduationCap className="inline-block mr-2" />
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link to="/publications" className="flex items-center my-4" onClick={gotoPublications}>
                                <FaScroll className="inline-block mr-2" />
                                Publications
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills" className="flex items-center my-4" onClick={gotoSkills}>
                                <FaCode className="inline-block mr-2" />
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="/academic-service" className="flex items-center my-4" onClick={gotoAcademicService}>
                                <FaChalkboardTeacher className="inline-block mr-2" />
                                Academic Service
                            </Link>
                        </li>
                        <li>
                            <Link to="/extracurricular-activities" className="flex items-center my-4" onClick={gotoExtracurricularActivities}>
                                <FaRunning className="inline-block mr-2" />
                                Extracurricular Activities
                            </Link>
                        </li>
                        <li>
                            <Link to="/seminar-workshops" className="flex items-center my-4" onClick={gotoSeminarWorkshops}>
                                <FaBookReader className="inline-block mr-2" />
                                Seminars & Workshops
                            </Link>
                        </li>
                        <li>
                            <Link to="/accomplishment" className="flex items-center my-4" onClick={gotoAccomplishments}>
                                <FaMedal className="inline-block mr-2" />
                                Accomplishments
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
                        <span>jucse29.370@gmail.com, rubayedcse29@gmail.com, rubayed.stu2019@juniv.edu</span>
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
