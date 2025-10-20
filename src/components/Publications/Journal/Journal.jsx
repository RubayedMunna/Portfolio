import React, { useState, useMemo } from 'react';

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
      bibtex: `@article{Nipo2025Adaptive,
  title={Adaptive Beamforming of Linear Array Antenna System Using Particle Swarm Optimization and Genetic Algorithm},
  author={Nipo, Akila and Islam, Rubayed All and Islam, Md. Imdadul},
  journal={International Journal of Wireless and Microwave Technologies (IJWMT)},
  volume={15},
  number={5},
  pages={1--20},
  year={2025},
  doi={10.5815/ijwmt.2025.05.01}
}`,
    },
  ]);

  const statuses = ['Status', 'Published', 'Accepted', 'Under Review', 'Submitted'];
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedBibTex, setSelectedBibTex] = useState('');

  const uniqueYears = useMemo(() => {
    const years = [...new Set(cards.map(card => card.publishedYear))].sort((a, b) => b - a);
    return ['Year', ...years];
  }, [cards]);

  const filteredCards = cards.filter(
    (card) =>
      (selectedYear === '' || selectedYear === 'Year' || card.publishedYear === selectedYear) &&
      (selectedStatus === '' || selectedStatus === 'Status' || card.status === selectedStatus)
  );

  // 🟢 Status color mapping
  const getStatusClasses = (status) => {
    switch (status) {
      case 'Published':
        return 'bg-emerald-600 border-emerald-700 text-white';
      case 'Accepted':
        return 'bg-blue-600 border-blue-700 text-white';
      case 'Under Review':
        return 'bg-amber-600 border-amber-700 text-white';
      case 'Submitted':
        return 'bg-gray-600 border-gray-700 text-white';
      default:
        return 'bg-gray-400 border-gray-500 text-white';
    }
  };

  return (
    <div>
      {/* Filters */}
      <div className="md:grid md:grid-cols-12 md:gap-4 mb-4">
        <div className="md:col-span-6 md:col-start-7">
          <div className="md:flex md:space-x-4">
            <div className="md:w-1/2 sm:w-full mb-2 md:mb-0">
              <select
                className="form-select block w-full p-2 border border-amber-300 rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {uniqueYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:w-1/2 sm:w-full">
              <select
                className="form-select block w-full p-2 border border-amber-300 rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
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

      {/* Cards */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {filteredCards.length === 0 ? (
          <p className="text-center text-gray-600 mt-8 text-lg font-semibold">No Publication Found</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filteredCards.map((card) => (
              <div
                key={card.id}
                className="max-w-full mx-auto bg-white shadow-xl overflow-hidden rounded-xl border-2 border-amber-600 mt-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-amber-700"
              >
                <div className="bg-gradient-to-r from-amber-50 to-white px-2 py-3">
                  <h2 className="text-lg md:text-xl font-bold break-words">
                    <span className="bg-white text-amber-700 px-2 md:px-4 py-2 md:py-3 rounded-lg shadow-sm border border-amber-200 block">
                      {card.title}
                    </span>
                  </h2>
                </div>

                <div className="px-4 md:px-6 py-4 bg-white text-sm md:text-base break-words">
                  <p className="text-gray-700">
                    {card.authors}. {card.journalName}, {card.publishedYear}.
                    {card.status === 'Published' && (
                      <>
                        {card.volume && card.issue && card.pages && (
                          <>
                            {' '} {card.volume}, {card.issue}, pp. {card.pages}.
                          </>
                        )}
                        {card.doi && (
                          <>
                            {' '}DOI:{' '}
                            <a
                              href={`https://doi.org/${card.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-amber-600 underline hover:text-amber-800 transition-colors duration-300 break-words"
                            >
                              {card.doi}
                            </a>
                            .
                          </>
                        )}
                      </>
                    )}
                  </p>
                </div>

                <div className="px-4 md:px-6 py-4 flex flex-wrap gap-2 items-center justify-between bg-gradient-to-r from-white to-amber-50 border-t border-amber-200">
                  {/* 🟣 Dynamic status color */}
                  <span
                    className={`px-3 py-2 rounded-lg shadow-md font-semibold text-sm md:text-base border ${getStatusClasses(card.status)}`}
                  >
                    {card.status}
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {card.pdfLink && card.pdfLink !== '#' && (
                      <a
                        href={card.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent hover:bg-amber-600 text-amber-700 font-semibold hover:text-white py-2 px-4 border-2 border-amber-600 hover:border-amber-700 rounded-lg transition-all duration-300 hover:scale-105 flex items-center text-sm md:text-base"
                      >
                        <i className="bx bxs-file-pdf text-xl mr-1"></i> PDF
                      </a>
                    )}
                    {card.bibtex && (
                      <button
                        onClick={() => {
                          setSelectedBibTex(card.bibtex);
                          setShowModal(true);
                        }}
                        className="bg-transparent hover:bg-amber-600 text-amber-700 font-semibold hover:text-white py-2 px-4 border-2 border-amber-600 hover:border-amber-700 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer flex items-center text-sm md:text-base"
                      >
                        <i className="bx bxs-quote-single-right text-xl mr-1"></i> Citation
                      </button>
                    )}
                    {card.sourceLink && card.sourceLink !== '#' && (
                      <a
                        href={card.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent hover:bg-amber-600 text-amber-700 font-semibold hover:text-white py-2 px-4 border-2 border-amber-600 hover:border-amber-700 rounded-lg transition-all duration-300 hover:scale-105 flex items-center text-sm md:text-base"
                      >
                        <i className="bx bx-link text-xl mr-1"></i> Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BibTeX Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto shadow-2xl border-2 border-amber-600"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-amber-700">BibTeX Citation</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-amber-600 hover:text-amber-800 transition-colors duration-300"
              >
                <i className="bx bx-x text-xl"></i>
              </button>
            </div>
            <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-auto border border-gray-300 whitespace-pre-wrap">
              {selectedBibTex}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default Journal;
