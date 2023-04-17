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
    <div>
      <h1 className="popup_title">Article Summary</h1>
      <p className="selected_text">Selected text: <span id="selectedText"></span></p>
      <button id="summaryButton" onClick={handleGetSummary}>Get summary</button>
      <button onClick={handleToggle}>{isEnabled ? 'Disable' : 'Enable'}</button>
    </div>
  );
}

export default Popup;
