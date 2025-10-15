import React, { useState, useEffect } from 'react';
import SideNavBar from '../components/SideNavBar/SideNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Education from '../components/Education/Education';
import './SideNavBar.css';

function EducationPage() {
  const [isSideNavVisible, setIsSideNavVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
      if (window.innerWidth > 1024) {
        setIsSideNavVisible(true);
      } else {
        setIsSideNavVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSideNav = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen bg-gray-800 text-white shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800
          ${isSideNavVisible ? 'translate-x-0' : '-translate-x-full'}
          ${isDesktop ? 'translate-x-0 w-72' : 'w-64'}
        `}
      >
        <SideNavBar />
      </div>

      {/* Overlay for mobile */}
      {!isDesktop && isSideNavVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsSideNavVisible(false)}
        ></div>
      )}

      {/* Main Content */}
      <div
        className={`
          flex-grow transition-all duration-300 ease-in-out
          ${isDesktop ? 'ml-72' : 'ml-0 w-full'}
        `}
      >
        {/* Hamburger Button for Mobile */}
        {!isDesktop && (
          <div className="p-4">
            <button
              onClick={toggleSideNav}
              className="text-gray-800 bg-gray-200 p-2 rounded-lg shadow hover:bg-gray-300 transition-colors"
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
        )}

        {/* Page Content */}
        <div className="p-4">
          <Education />
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
