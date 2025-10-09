import React, { useState } from 'react';

function Journal() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title:
        'Adaptive Beamforming of Linear Array Antenna System Using Particle Swarm Optimization and Genetic Algorithm',
      authors: 'Akila Nipo, Rubayed All Islam, Md. Imdadul Islam',
      journalName:
        'International Journal of Wireless and Microwave Technologies (IJWMT), MECS Press',
      publishedYear: '2025',
      journalRank: 'N/A',
      impactFactor: 'N/A',
      status: 'Published',
      pdfLink:
        'https://www.researchgate.net/profile/Akila-Nipo/publication/396176652_Adaptive_Beamforming_of_Linear_Array_Antenna_System_Using_Particle_Swarm_Optimization_and_Genetic_Algorithm/links/68e03aeaf3032e2b4be67d72/Adaptive-Beamforming-of-Linear-Array-Antenna-System-Using-Particle-Swarm-Optimization-and-Genetic-Algorithm.pdf',
      citationLink:
        'https://www.mecs-press.org/ijwmt/ijwmt-v15-n5/v15n5-1.html',
      sourceLink:
        'https://www.mecs-press.org/ijwmt/ijwmt-v15-n5/v15n5-1.html',
      volume: 'Vol.15',
      issue: 'No.5',
      pages: '1–20',
      doi: '10.5815/ijwmt.2025.05.01',
    },
  ]);

  const years = ['Year', '2026', '2025', '2024', '2023', '2022', '2021'];
  const statuses = ['Status', 'Published', 'Accepted', 'Under Review', 'Submitted'];

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  // Filter cards based on selected year and status
  const filteredCards = cards.filter(
    (card) =>
      (selectedYear === '' ||
        selectedYear === 'Year' ||
        card.publishedYear === selectedYear) &&
      (selectedStatus === '' ||
        selectedStatus === 'Status' ||
        card.status === selectedStatus)
  );

  return (
    <div>
      <div className="md:grid md:grid-cols-12 md:gap-4">
        <div className="md:col-span-6 md:col-start-7">
          <div className="md:flex md:space-x-4">
            <div className="md:w-1/2 sm:w-full">
              <select
                className="form-select block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:w-1/2 sm:w-full">
              <select
                className="form-select block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {filteredCards.length === 0 ? (
          <p className="text-center text-gray-600 mt-8 text-lg font-semibold">
            No Publication Found
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
            <div>
              {filteredCards.map((card) => (
                <div
                  key={card.id}
                  className="max-w-full mx-auto bg-white shadow-md overflow-hidden rounded-md border-l-8 border-blue-700 mt-4"
                >
                  <div className="bg-white-500 text-white px-2 py-2">
                    <h2 className="text-xl font-bold">
                      <span className="bg-white text-blue-500 px-4 py-2 rounded">
                        {card.title}
                      </span>
                    </h2>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-gray-700">
                      {card.authors}. {card.journalName}, {card.volume}, {card.issue}, pp. {card.pages}, {card.publishedYear}. DOI:{' '}
                      <a
                        href={`https://doi.org/${card.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {card.doi}
                      </a>
                      .{' '}
                      <span className="font-bold text-blue-700">
                        Journal Rank: {card.journalRank}.
                      </span>{' '}
                      <span className="font-bold text-orange-900">
                        Impact Factor: {card.impactFactor} ({card.publishedYear})
                      </span>
                    </p>
                  </div>

                  <div className="px-6 py-4 flex items-center justify-between">
                    <p className="text-gray-700">
                      <span className={`bg-blue-500 text-white px-2 py-1 rounded`}>
                        {card.status}
                      </span>
                    </p>
                    <div className="flex space-x-2">
                      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        <a href={card.pdfLink} target="_blank" rel="noopener noreferrer">
                          <i className="bx bxs-file-pdf text-xl"></i> PDF
                        </a>
                      </button>
                      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        <a href={card.citationLink} target="_blank" rel="noopener noreferrer">
                          <i className="bx bxs-quote-single-right text-xl"></i> Citation
                        </a>
                      </button>
                      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        <a href={card.sourceLink} target="_blank" rel="noopener noreferrer">
                          <i className="bx bx-link text-xl"></i> Source
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Journal;
