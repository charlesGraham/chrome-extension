import React, { useState } from 'react';

function Article() {
  const [selectedText, setSelectedText] = useState('');

  const handleSelection = () => {
    const selection = window.getSelection().toString();
    setSelectedText(selection);
  };

  return (
    <div>
      <h1>Article Title</h1>
      <p onMouseUp={handleSelection}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae libero auctor, fermentum quam sed, aliquet metus. Phasellus eu metus turpis. Morbi ornare leo eget erat bibendum, non eleifend augue luctus. Quisque fringilla faucibus quam, quis mollis eros interdum id. Sed vel enim eget metus luctus sodales at id lacus. Vivamus vel tincidunt felis. Sed vitae nisl eu ipsum gravida molestie sit amet sit amet velit.
      </p>
      <p>Selected text: {selectedText}</p>
    </div>
  );
}

export default Article;
