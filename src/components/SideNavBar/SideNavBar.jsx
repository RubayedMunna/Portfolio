import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaGoogle, FaResearchgate, FaOrcid, FaHome, FaBriefcase, FaGraduationCap, FaScroll, FaCode, FaChalkboardTeacher, FaRunning, FaBookReader, FaMedal, FaWhatsapp, FaEnvelope, FaDesktop, FaFolder } from 'react-icons/fa';
import Profile_Rubayed_BG_White from './../../assets/images/Profile_Rubayed_BG_White.png';

function SideNavBar() {
    const location = useLocation(); // Get current route

    const socialLinks = [
        { icon: FaLinkedin, url: "https://www.linkedin.com/in/rubayed-all-islam-1683841b4/" },
        { icon: FaGithub, url: "https://github.com/RubayedMunna" },
        { icon: FaGoogle, url: "https://scholar.google.com/citations?user=Ck_yQoIAAAAJ&hl=en" },
        { icon: FaResearchgate, url: "https://www.researchgate.net/profile/Rubayed-Islam" },
        { icon: FaOrcid, url: "https://orcid.org/my-orcid?orcid=0009-0002-8494-4190" },
    ];

    const navItems = [
        { to: "/home", label: "Home", icon: FaHome },
        { to: "/education", label: "Education", icon: FaGraduationCap },
        { to: "/experience", label: "Experience", icon: FaBriefcase },
        { to: "/publications", label: "Publications", icon: FaScroll },
        { to: "/projects", label: "Projects", icon: FaFolder },
        { to: "/skills", label: "Skills", icon: FaCode },
        { to: "/academic-service", label: "Academic Service", icon: FaChalkboardTeacher },
        { to: "/extracurricular-activities", label: "Extracurricular Activities", icon: FaRunning },
        { to: "/seminar-workshops", label: "Seminars & Workshops", icon: FaBookReader },
        { to: "/accomplishment", label: "Accomplishments", icon: FaMedal },
        { to: "/programming-problems", label: "Programming Problems", icon: FaDesktop },
    ];

    return (
        <div>
            <aside className="bg-gray-800 text-white h-fit w-64 p-4 flex flex-col justify-between shadow-lg">
                <div className='mb-5'>
                    {/* Image and Name */}
                    <div className='flex items-center justify-center'>
                        <img src={Profile_Rubayed_BG_White} alt="Rubayed All Islam" className="w-3/4 rounded-full mb-4 border-4 border-gray-400 transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link to="/home">
                            <h2 className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors duration-300">Rubayed All Islam</h2>
                        </Link>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-2 mt-4 justify-center">
                        {socialLinks.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-amber-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-700 transform-gpu hover:scale-125 hover:shadow-lg"
                            >
                                <item.icon size={22} />
                            </a>
                        ))}
                    </div>

                </div>

                <nav className="mb-4">
                    <ul className="space-y-2">
                        {navItems.map((item, idx) => {
                            const isActive = location.pathname === item.to;
                            return (
                                <li key={idx}>
                                    <Link
                                        to={item.to}
                                        className={`flex items-center px-3 py-2 rounded-lg transition-all duration-300 transform-gpu ${isActive
                                            ? 'bg-amber-500 text-white shadow-lg scale-105'
                                            : 'text-gray-200 hover:text-amber-400 hover:bg-gray-700 hover:scale-105 hover:shadow-lg'
                                            }`}
                                    >
                                        <item.icon className="mr-2 transition-transform duration-300 transform-gpu hover:scale-125" />
                                        <span className="transition-transform duration-300 transform-gpu hover:scale-110">
                                            {item.label}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <footer className="text-sm text-gray-400">
                    <div className="flex items-center mt-2">
                        <FaWhatsapp className="text-green-500 mr-2" />
                        <a
                            href="https://wa.me/8801864852588"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-amber-400 transition-colors duration-300"
                        >
                            +8801864852588
                        </a>
                    </div>

                    <div className="flex items-center mt-2">
                        <FaEnvelope className="text-blue-500 mr-2" />
                        <a
                            href="mailto:jucse29.370@gmail.com"
                            className="hover:text-amber-400 transition-colors duration-300"
                        >
                            jucse29.370@gmail.com
                        </a>
                    </div>

                    <div className='my-5 text-center text-gray-500'>
                        &copy; 2025 | Rubayed All Islam
                    </div>
                </footer>

            </aside>
        </div>
    );
}

export default SideNavBar;
