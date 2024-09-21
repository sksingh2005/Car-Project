import { useState } from "react";
import Navbar from "./Navbar";
import FilterComponent from "./Filtercomp2";

// SVG Icons for each filter
const SortIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 17l-4 4m0 0l-4-4m4 4V3"
    />
  </svg>
);

const PriceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-3-3h3c3.314 0 6 2.686 6 6s-2.686 6-6 6H9m-6-6h18"
    />
  </svg>
);

const CategoryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h18v18H3V3zm6 0v6H3V3h6zm0 0h6v6H9V3zm0 0h6v6H9V3z"
    />
  </svg>
);

// Filters component
const Filters = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  // Example filter options
  const filters = [
    { id: 1, name: "Sort", icon: <SortIcon /> },
    { id: 2, name: "Price", icon: <PriceIcon /> },
    { id: 3, name: "Category", icon: <CategoryIcon /> },
  ];

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <div className="p-4 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="flex space-x-4">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleFilterClick(filter.id)}
            className={`flex items-center p-2 rounded-md ${
              activeFilter === filter.id
                ? "bg-blue-500 text-white"
                : "bg-white text-black border"
            }`}
          >
            {filter.icon}
            <span className="ml-2">{filter.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Buycars component
export const Buycars = () => {
  return (
    <div id="#buy_cars">
      <div className="pt-2">
        <Navbar />
      </div>
      <FilterComponent/>
      
    </div>
  );
};

export default Buycars;
