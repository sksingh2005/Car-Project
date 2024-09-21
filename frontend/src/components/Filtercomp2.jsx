import React from 'react';

const FilterComponent = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      <div>
        <div className="flex items-center bg-cyan-100 rounded-lg p-3 shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <polygon points="3 4 21 4 14 12 14 19 10 19 10 12 3 4"></polygon>
          </svg>
          <span className="text-black text-lg">Cars Company </span>
        </div>
      </div>
      <div>
        <div className="flex items-center bg-cyan-100 rounded-lg p-3 shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <polygon points="3 4 21 4 14 12 14 19 10 19 10 12 3 4"></polygon>
          </svg>
          <span className="text-black text-lg">Cars Model </span>
        </div>
      </div>
      <div>
        <div className="flex items-center bg-cyan-100 rounded-lg p-3 shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <polygon points="3 4 21 4 14 12 14 19 10 19 10 12 3 4"></polygon>
          </svg>
          <span className="text-black text-lg">Price filter </span>
        </div>
      </div>
      <div>
        <div className="flex items-center bg-cyan-100 rounded-lg p-3 shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <polygon points="3 4 21 4 14 12 14 19 10 19 10 12 3 4"></polygon>
          </svg>
          <span className="text-black text-lg">Color Filter </span>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
