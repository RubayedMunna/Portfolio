import React, { useState } from 'react';
import CertificateBongoDev from './../../../assets/images/Certificate_BongoDev.png';
import CerticicateJavascript from './../../../assets/images/Certificate_JavascriptAlgorithmsAndDataStructures.png'
import CertificateResponsiveWeb from './../../../assets/images/Certificate_ResponsiveWebDesign.png'
import CertificatePython from './../../../assets/images/Certificate_Python_Kaggle.png'
import CertificateICPCPreli2022 from './../../../assets/images/ICPCPreli2022.png'
import CertificateICPCPreli2021 from './../../../assets/images/ICPCPreli2021.png'

function Certifications() {
  const [certifications, setCertifications] = useState([
    {
      title: 'Python',
      image: CertificatePython,
      issuedBy: 'Kaggle',
      issuanceDate: 'July 10, 2023',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      image: CerticicateJavascript,
      issuedBy: 'FreeCodeCamp',
      issuanceDate: 'July 30, 2023',
    },
    {
      title: 'Responsive Web Design',
      image: CertificateResponsiveWeb,
      issuedBy: 'FreeCodeCamp',
      issuanceDate: 'July 3, 2023',
    },
    {
      title: 'Web Development Bootcamp',
      image: CertificateBongoDev,
      issuedBy: 'BongoDev',
      issuanceDate: 'January 3, 2024',
    },
    
    {
      title: 'ICPC Dhaka Regional Preliminary Contest 2022',
      image: CertificateICPCPreli2022,
      issuedBy: 'International Collegiate Programming Contest (ICPC)',
      issuanceDate: 'Septermber 3, 2022',
    },
    {
      title: 'ICPC Dhaka Regional Preliminary Contest 2021',
      image: CertificateICPCPreli2021,
      issuedBy: 'International Collegiate Programming Contest (ICPC)',
      issuanceDate: 'April 7, 2021',
    },
    //hello
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
                <h2 className="text-2xl font-bold mb-4">{certification.title}</h2>
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
