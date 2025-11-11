import React from 'react';

const MistBackground: React.FC = () => {
  return (
    <div className="mist-container">
      {/* Red mist particles */}
      <div className="mist-particle red-mist-1 small"></div>
      <div className="mist-particle red-mist-2 medium"></div>
      <div className="mist-particle red-mist-3 large"></div>

      {/* Orange mist particles */}
      <div className="mist-particle orange-mist-1 medium"></div>
      <div className="mist-particle orange-mist-2 large"></div>

      {/* Yellow mist particles */}
      <div className="mist-particle yellow-mist-1 small"></div>
      <div className="mist-particle yellow-mist-2 medium"></div>
      <div className="mist-particle yellow-mist-3 large"></div>
      
      {/* Green mist particles */}
      <div className="mist-particle green-mist-1 small"></div>
      <div className="mist-particle green-mist-2 medium"></div>
      <div className="mist-particle green-mist-3 large"></div>

      {/* Blue mist particles */}
      <div className="mist-particle blue-mist-1 small"></div>
      <div className="mist-particle blue-mist-2 medium"></div>
      <div className="mist-particle blue-mist-3 large"></div>
      
      {/* Indigo mist particles */}
      <div className="mist-particle indigo-mist-1 small"></div>
      <div className="mist-particle indigo-mist-2 medium"></div>

      {/* Violet mist particles */}
      <div className="mist-particle violet-mist-1 medium"></div>
      <div className="mist-particle violet-mist-2 large"></div>
    </div>
  );
};

export default MistBackground;