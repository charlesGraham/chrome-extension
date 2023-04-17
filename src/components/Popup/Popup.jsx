import React, { useState } from 'react';
import './Popup.css';

function Popup() {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
    // Call a function here to enable or disable the extension
  };

  const handleGetSummary = () => {
    //TODO: Call to OpenAI to get summary
    console.log("Getting summary...");
  }

  return (
    <div className="content_container">
      <h1 className="popup_title">Article Summary</h1>
      <p className="selected_text">Selected text: <span id="selectedText"></span></p>
      <div className="buttons_container">
        <button id="summaryButton" onClick={handleGetSummary}>Get summary</button>
        <button onClick={handleToggle}>{isEnabled ? 'Disable' : 'Enable'}</button>
      </div>

    </div>
  );
}

export default Popup;
