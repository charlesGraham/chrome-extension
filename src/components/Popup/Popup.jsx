import React, { useState, useEffect } from 'react';
import Article from './Article';
import HighlightsList from '../HighlightsList/HightlightsList';
import HighlightTooltip from '../HighlightTooltip/HighlightTooltip';

function Popup() {
  const [highlights, setHighlights] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipTags, setTooltipTags] = useState([]);

  const handleSelection = () => {
    const selection = window.getSelection().toString();
    if (selection) {
      setHighlights([...highlights, selection]);
    }
  };

  const handleHighlightClick = (highlight, tags) => {
    setTooltipText(highlight);
    setTooltipTags(tags);
    setShowTooltip(true);
  };

  const handleTooltipClose = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection().toString();
      if (selection) {
        handleHighlightClick(selection, []);
      }
    };
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div>
      <h1>Article Summary</h1>
      <Article handleSelection={handleSelection} onHighlightClick={handleHighlightClick} />
      <HighlightsList highlights={highlights} onHighlightClick={handleHighlightClick} />
      {showTooltip && <HighlightTooltip text={tooltipText} tags={tooltipTags} onClose={handleTooltipClose} />}
    </div>
  );
}

export default Popup;
