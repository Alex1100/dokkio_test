import React from 'react';
import './styles/TextField.css';

export const TextField = ({ paragraphText, handleTextUpdate }) => {
  return (
    <div className="TextField">
      <textarea
        name="paragraph"
        cols="40"
        rows="5"
        spellcheck="false"
        onChange={handleTextUpdate}
      >
        {paragraphText}
      </textarea>
    </div>
  );
};
