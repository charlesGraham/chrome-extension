import React from 'react';
import PropTypes from 'prop-types';
import './ToolTip.css';

function HighlightTooltip({ text, summary, tags }) {
  return (
    <div className="highlight-tooltip">
      <div className="highlight-tooltip-text">{text}</div>
      <div className="highlight-tooltip-summary">{summary}</div>
      <div className="highlight-tooltip-tags">
        {tags.map((tag, index) => (
          <span key={index} className="highlight-tooltip-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

HighlightTooltip.propTypes = {
  text: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HighlightTooltip;
