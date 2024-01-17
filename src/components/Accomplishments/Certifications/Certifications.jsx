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
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {certifications.map((certification, index) => (
          <div key={index}>

            <div className="bg-gray-0 flex items-center justify-center ">
              <div className="max-w-full bg-white p-8 rounded-lg shadow-lg border-r-2 border-t-8 border-t-blue-700">
                {/* Certification Title */}
                <a href={certification.certificateLink} target='_blank'><h2 className="text-xl font-bold mb-4">{certification.title}</h2></a>
                
                {/* Certification Image */}
                <div className="my-4 w-full">
                  <img src={certification.image} alt="Certification Image" className="w-full h-full object-cover" />
                </div>
                {/* Certification Information */}
                <div>
                  <p className="text-gray-600">Issued by: {certification.issuedBy}</p>
                  <p className="text-gray-600">Date of Issuance: {certification.issuanceDate}</p>
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
