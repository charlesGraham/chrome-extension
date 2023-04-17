import React from 'react';
import PropTypes from 'prop-types';
import Highlight from '../Highlight/Highlight';

function Article({ text, highlights, onHighlightClick }) {
  const splitText = text.split(/(\s+)/);

  const renderWord = (word, index) => {
    const highlight = highlights.find(h => h.start === index);

    if (highlight) {
      return (
        <Highlight
          key={index}
          text={word}
          onClick={() => onHighlightClick(highlight)}
        />
      );
    }

    return <span key={index}>{word}</span>;
  };

  return (
    <div>
      {splitText.map((word, index) => renderWord(word, index))}
    </div>
  );
}

Article.propTypes = {
  text: PropTypes.string.isRequired,
  highlights: PropTypes.array.isRequired,
  onHighlightClick: PropTypes.func.isRequired,
};

export default Article;
