// AccomplishmentPage.js
import React, { useState, useEffect } from 'react';
import SideNavBar from '../components/SideNavBar/SideNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SeminarWorkshop from '../components/SeminarWorkshop/SeminarWorkshop'
import './SideNavBar.css'


function AccomplishmentPage() {
  const [isSideNavBarVisible, setIsSideNavBarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSideNavBarVisible(window.innerWidth > 1200); // Adjust the breakpoint as needed
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSideNavBar = () => {
    setIsSideNavBarVisible(!isSideNavBarVisible);
  };

  return (
    <div className="flex">
      {isSideNavBarVisible && (
        <div className={`overflow-y-scroll scrollbar fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ease-in-out ${isSideNavBarVisible ? 'w-72' : 'w-0'}`}>
          <SideNavBar />
        </div>
      )}
      <div className={`flex-grow p-4 transition-all duration-300 ease-in-out ${isSideNavBarVisible ? 'ml-80' : 'ml-10'}`}>
        <div className="mb-4">
          <button onClick={toggleSideNavBar} className="text-blue-500">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
        <SeminarWorkshop />
      </div>
    </div>
  );
}

export default AccomplishmentPage;
