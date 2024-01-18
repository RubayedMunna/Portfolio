import React from 'react';

const Test1 = () => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 p-4">
        {/* Content for the first inner div */}
        <p className="bg-gray-200 p-2">Inner Div 1kaj;lsd flldf ljldsf lajsdf ljdfa jldfa lsadf jlsdf ljlsdf </p>
      </div>
      <div className="flex-grow p-4">
        {/* Content for the second inner div */}
        <p className="bg-gray-200 p-2">Inner Div 2</p>
      </div>
    </div>
  );
};

export default Test1;
