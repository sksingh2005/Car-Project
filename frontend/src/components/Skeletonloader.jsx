import React from 'react';

export default function SkeletonLoader() {
  return (
    <div className="p-4">
      <div className="animate-pulse">
        {/* Skeleton for Navbar */}
        <div className="h-8 bg-gray-300 rounded mb-4"></div>
        
        {/* Skeleton for main content */}
        <div className="h-48 bg-gray-300 rounded mb-4"></div>
        <div className="h-48 bg-gray-300 rounded mb-4"></div>
        <div className="h-48 bg-gray-300 rounded mb-4"></div>

        {/* Skeleton for Footer */}
        <div className="h-16 bg-gray-300 rounded mt-8"></div>
      </div>
    </div>
  );
}
