import React from 'react';

const PyramidLogo: React.FC = () => {
  return (
    <div className="pyramid-loader">
      <div className="pyramid-wrapper ">
      {/* <div className="pyramid-wrapper"> */}
        <div className="pyramid-side pyramid-side1"></div>
        <div className="pyramid-side pyramid-side2"></div>
        <div className="pyramid-side pyramid-side3"></div>
        <div className="pyramid-side pyramid-side4"></div>
        <div className="pyramid-shadow"></div>
      </div>
    </div>
  );
};

export default PyramidLogo;