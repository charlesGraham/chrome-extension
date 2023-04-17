import React from 'react';
import PropTypes from 'prop-types';

function Highlight({ text, onClick }) {
  return (
    <span className="highlight" onClick={onClick}>
      {text}
    </span>
  );
}

Highlight.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Highlight;
