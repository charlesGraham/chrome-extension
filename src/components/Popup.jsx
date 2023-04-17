import React from 'react';

function Popup() {
  return (
    <div>
      <h1>Article Summary</h1>
      <p>Selected text: <span id="selectedText"></span></p>
      <button id="summaryButton">Get summary</button>
    </div>
  );
}

export default Popup;
