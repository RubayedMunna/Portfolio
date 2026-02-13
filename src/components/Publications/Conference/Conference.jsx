import React, { useState, useMemo } from 'react';

function Conference() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title:
        'IoT-Enabled Smart Warehouse Monitoring and Safety System for Real Time Hazard Detection and Automated Mitigation',
      authors:
        'Akila Nipo, Rubayed All Islam, Nuzhat Nairy Afrin, Samsun Nahar Khandakar, Md. Ezharul Islam',
      conferenceName:
        '2025 IEEE 7th International Conference on Sustainable Technologies For Industry 5.0 (STI)',
      publishedYear: '2025',
      status: 'Published',
      pdfLink: 'https://ieeexplore.ieee.org/document/11367508',
      citationLink: 'https://ieeexplore.ieee.org/document/11367508',
      sourceLink: 'https://ieeexplore.ieee.org/document/11367508',
      volume: '',
      issue: '',
      pages: '1–6',
      doi: '10.1109/STI69347.2025.11367508',
      bibtex: `@INPROCEEDINGS{11367508,
  author={Nipo, Akila and Islam, Rubayed All and Afrin, Nuzhat Nairy and Khandakar, Samsun Nahar and Islam, Md. Ezharul},
  booktitle={2025 IEEE 7th International Conference on Sustainable Technologies For Industry 5.0 (STI)}, 
  title={IoT-Enabled Smart Warehouse Monitoring and Safety System for Real Time Hazard Detection and Automated Mitigation}, 
  year={2025},
  volume={},
  number={},
  pages={1-6},
  doi={10.1109/STI69347.2025.11367508}
}`,
    },
  ]);

  const statuses = ['Status', 'Published', 'Accepted', 'Under Review', 'Submitted'];
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedBibTex, setSelectedBibTex] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('BibTeX');
  const [copied, setCopied] = useState(false);

  const uniqueYears = useMemo(() => {
    const years = [...new Set(cards.map((card) => card.publishedYear))].sort((a, b) => b - a);
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

  // 🧠 Format citation based on selected style
  const formatCitation = (card, style) => {
    if (!card) return '';

    const authors = card.authors.replace(/, ([^,]*)$/, ' and $1');

    switch (style) {
      case 'IEEE':
        return `${authors}, "${card.title}," in *${card.conferenceName}*, ${card.publishedYear}, pp. ${card.pages}. doi:${card.doi}`;
      case 'APA':
        return `${authors} (${card.publishedYear}). ${card.title}. In *${card.conferenceName}* (pp. ${card.pages}). IEEE. https://doi.org/${card.doi}`;
      case 'ACM':
        return `${authors}. ${card.publishedYear}. ${card.title}. In *${card.conferenceName}*. ${card.pages}. DOI:https://doi.org/${card.doi}`;
      case 'Harvard':
        return `${authors}, ${card.publishedYear}. ${card.title}. In: *${card.conferenceName}*, pp.${card.pages}.`;
      default:
        return card.bibtex;
    }
  };

  // 📋 Copy citation text
  const handleCopy = () => {
    const card = cards.find((c) => c.bibtex === selectedBibTex);
    const textToCopy = formatCitation(card, selectedStyle);

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedCard = cards.find((c) => c.bibtex === selectedBibTex);
  const citationText = formatCitation(selectedCard, selectedStyle);

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
          <p className="text-center text-gray-600 mt-6 text-lg font-medium">
            No publication found.
          </p>
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

                {/* ✅ Updated Info Section (same styling) */}
                <div className="px-4 md:px-6 py-4 bg-white text-sm md:text-base break-words">
                  <p className="text-gray-700">
                    {card.authors}. {card.conferenceName} ({card.publishedYear}).
                    {card.status === 'Published' && (
                      <>
                        {card.pages && (
                          <>
                            {' '}
                            pp. {card.pages}.
                          </>
                        )}

                        {card.volume && (
                          <>
                            {' '}
                            Vol. {card.volume}.
                          </>
                        )}

                        {card.issue && (
                          <>
                            {' '}
                            Issue {card.issue}.
                          </>
                        )}

                        {card.doi && (
                          <>
                            {' '}
                            DOI:{' '}
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
                    className={`px-3 py-2 rounded-lg shadow-md font-semibold text-sm md:text-base border ${getStatusClasses(
                      card.status
                    )}`}
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
                          setSelectedStyle('BibTeX');
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

      {/* 🟤 Citation Modal */}
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
              <h3 className="text-xl font-bold text-amber-700">Conference Citation</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-amber-600 hover:text-amber-800 transition-colors duration-300"
              >
                <i className="bx bx-x text-xl"></i>
              </button>
            </div>

            {/* Citation Style Selector + Copy Button */}
            <div className="flex justify-between items-center mb-3">
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="border border-amber-400 rounded-lg p-2 focus:ring-amber-300 focus:outline-none"
              >
                <option>BibTeX</option>
                <option>IEEE</option>
                <option>APA</option>
                <option>ACM</option>
                <option>Harvard</option>
              </select>

              <button
                onClick={handleCopy}
                className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-700 transition-all duration-300"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <pre className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-auto border border-gray-300 whitespace-pre-wrap">
              {citationText}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default Conference;
