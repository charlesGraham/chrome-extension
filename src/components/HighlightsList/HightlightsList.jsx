import React from 'react';
import Highlight from './Highlight';

function HighlightsList({ highlights, onHighlightClick }) {
  return (
    <div>
      <h2>Highlights</h2>
      {highlights.map((highlight, index) => (
        <Highlight key={index} text={highlight} onClick={() => onHighlightClick(highlight, [])} />
      ))}
    </div>
  );
}

export default HighlightsList;
