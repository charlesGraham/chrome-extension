import React, { useState } from 'react';

function Popup() {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
    // Call a function here to enable or disable the extension
  };
  
  return (
    <div>
      <h1>Article Summary</h1>
      <p>Selected text: <span id="selectedText"></span></p>
      <button id="summaryButton">Get summary</button>
      <button onClick={handleToggle}>{isEnabled ? 'Disable' : 'Enable'}</button>
    </div>
  );
}

export default Popup;
