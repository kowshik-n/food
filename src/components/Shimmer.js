import React from "react";
import "./shimmer.css"; // Import the custom CSS for shimmer effect

const Shimmer = () => {
  return (
    <>
      {/* Shimmer Effect for Header Banner */}
      <div className="shimmer-header-banner">
        <div className="shimmer-header-text"></div>
        <div className="shimmer-header-input">
          <div className="shimmer-input"></div>
          <div className="shimmer-button"></div>
        </div>
      </div>

      {/* Shimmer Effect for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-image"></div>
            <div className="shimmer-text">
              <div className="shimmer-line shimmer-line-title"></div>
              <div className="shimmer-line shimmer-line-subtitle"></div>
              <div className="shimmer-line shimmer-line-small"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
