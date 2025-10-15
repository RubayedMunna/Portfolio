import React, { useState } from 'react';
import CertificateBongoDev from './../../../assets/images/Certificate_BongoDev.png';
import CerticicateJavascript from './../../../assets/images/Certificate_JavascriptAlgorithmsAndDataStructures.png'
import CertificateResponsiveWeb from './../../../assets/images/Certificate_ResponsiveWebDesign.png'
import CertificatePython from './../../../assets/images/Certificate_Python_Kaggle.png'
import CertificateICPCPreli2022 from './../../../assets/images/ICPCPreli2022.png'
import CertificateICPCPreli2021 from './../../../assets/images/ICPCPreli2021.png'
import CertificateMachineLearning from './../../../assets/images/Certificate_MachineLerning.png'
import CertificateLLM from './../../../assets/images/Certificate_LLM.png'

function Certifications() {
  const [certifications, setCertifications] = useState([
    {
      title: 'Introduction to Large Language Models',
      image: CertificateLLM,
      issuedBy: 'Simplilearn Skillup',
      issuanceDate: 'January 17, 2024',
      certificateLink: 'https://simpli-web.app.link/e/VgHsvOSIqGb',
    },
    {
      title: 'Machine Learning',
      image: CertificateMachineLearning,
      issuedBy: 'Simplilearn Skillup',
      issuanceDate: 'January 9, 2024',
      certificateLink: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI2ODciLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC90aHVtYl80NzcyNzA2XzE3MDQ3OTYxNTAucG5nIiwidXNlcm5hbWUiOiJSdWJheWVkIEFsbCBJc2xhbSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F2789%2FMachine-Learning%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1273215162285138965&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVT872rcryMS5NcU8CAK4EJbclAAAA',
    },
    {
      title: 'Python',
      image: CertificatePython,
      issuedBy: 'Kaggle',
      issuanceDate: 'July 10, 2023',
      certificateLink: 'https://www.kaggle.com/learn/certification/rubayedallislam/python',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      image: CerticicateJavascript,
      issuedBy: 'FreeCodeCamp',
      issuanceDate: 'July 30, 2023',
      certificateLink: 'https://www.freecodecamp.org/certification/RubayedMunna/javascript-algorithms-and-data-structures',
    },
    {
      title: 'Responsive Web Design',
      image: CertificateResponsiveWeb,
      issuedBy: 'FreeCodeCamp',
      issuanceDate: 'July 3, 2023',
      certificateLink: 'https://www.freecodecamp.org/certification/RubayedMunna/responsive-web-design',
    },
    {
      title: 'Web Development Bootcamp',
      image: CertificateBongoDev,
      issuedBy: 'BongoDev',
      issuanceDate: 'January 3, 2024',
      certificateLink: 'https://bongodev.com/',
    },
    
    {
      title: 'ICPC Dhaka Regional Preliminary Contest 2022',
      image: CertificateICPCPreli2022,
      issuedBy: 'International Collegiate Programming Contest (ICPC)',
      issuanceDate: 'Septermber 3, 2022',
      certificateLink: 'https://icpc.global/',
    },
    {
      title: 'ICPC Dhaka Regional Preliminary Contest 2021',
      image: CertificateICPCPreli2021,
      issuedBy: 'International Collegiate Programming Contest (ICPC)',
      issuanceDate: 'April 7, 2021',
      certificateLink: 'https://icpc.global/',
    },
   
    // Add more certifications as needed
  ]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {certifications.map((certification, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg border-2 border-amber-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-amber-400 hover:bg-amber-50 relative"
          >
            {/* Top border - positioned absolutely to ensure perfect alignment */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 h-2 w-full rounded-t-xl absolute top-0 left-0 right-0"></div>
            
            <div className="flex items-center justify-center p-6 pt-8"> {/* Added pt-8 to account for the top border */}
              <div className="max-w-full w-full">
                {/* Certification Title */}
                <a 
                  href={certification.certificateLink} 
                  target='_blank' 
                  rel="noopener noreferrer"
                  className="block mb-4 group"
                >
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-amber-700 transition-colors duration-300">
                    {certification.title}
                  </h2>
                </a>
                
                {/* Certification Image */}
                <div className="my-4 w-full rounded-lg overflow-hidden border-2 border-amber-100">
                  <img 
                    src={certification.image} 
                    alt="Certification Image" 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                
                {/* Certification Information */}
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-800">Issued by:</span> {certification.issuedBy}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-800">Date of Issuance:</span> {certification.issuanceDate}
                  </p>
                </div>
                
                {/* View Certificate Link */}
                <div className="mt-4 pt-4 border-t border-amber-100">
                  <a 
                    href={certification.certificateLink} 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-300"
                  >
                    <span>View Certificate</span>
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;