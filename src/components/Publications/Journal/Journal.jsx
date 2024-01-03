import React, { useState } from 'react';

function Journal() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Publication Title 1',
      authors: 'Author1, My name, Author3, Author4',
      journalName: 'Journal Name 1',
      publishedYear: '2023',
      journalRank: 'Q4',
      impactFactor: '1.38',
      status: 'Published',
      pdfLink: '#',
      citationLink: '#',
      sourceLink: '#',
    },

    {
      id: 2,
      title: 'Publication Title 2',
      authors: 'Author1, My name, Author3, Author4',
      journalName: 'Journal Name 2',
      publishedYear: '2022',
      journalRank: 'Q4',
      impactFactor: '1.38',
      status: 'Accepted',
      pdfLink: '#',
      citationLink: '#',
      sourceLink: '#',
    },

    // Add more card objects as needed
  ]);

  const years = ['Year', '2023', '2022', '2021'];
  const statuses = ['Status', 'Published', 'Accepted', 'Under Review', 'Submitted'];

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  // Filter cards based on selected year and status
  const filteredCards = cards.filter(
    (card) =>
      (selectedYear === '' || selectedYear === 'Year' || card.publishedYear === selectedYear) &&
      (selectedStatus === '' || selectedStatus === 'Status' || card.status === selectedStatus)
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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
          <div>
            {filteredCards.map((card) => (
              <div key={card.id} className="max-w-full mx-auto bg-white shadow-md overflow-hidden rounded-md border-l-4 border-blue-700 mt-4 ">
                <div className="bg-white-500 text-white px-2 py-2">
                  <h2 className="text-xl font-bold">
                    <span className="bg-white text-blue-500 px-4 py-2 rounded">{card.title}</span>
                  </h2>
                </div>
                <div className="px-6 py-4">
                  <p className="text-gray-700">
                    {card.authors}. {card.journalName}({card.publishedYear}).{' '}
                    <span className="font-bold text-blue-700">Journal Rank: {card.journalRank}.</span>{' '}
                    <span className="font-bold text-orange-900">
                      Impact Factor: {card.impactFactor} ({card.publishedYear})
                    </span>
                  </p>
                </div>

                <div className="px-6 py-4 flex items-center justify-between">
                  <p className="text-gray-700">
                    <span className={`bg-blue-500 text-white px-2 py-1 rounded`}>{card.status}</span>
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
      </div>
    </div>
  );
}

export default Journal;
