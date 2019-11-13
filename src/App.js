import React, { useState } from 'react';
import './App.css';
import { TextField } from './components';

function App() {
  const [mirrorText, setMirrorText] = useState('');
  const [paragraphText, setParagraphText] = useState('');

  const isPalindrome = (word) => {
    if (word === word.split('').reverse().join('')) {
      return true;
    }

    return false;
  }

  const applyHighlights = (text) => {
    return text
      .replace(/\n$/g, '\n\n')
      .replace(/[A-Za-z].*?\b/g, '<mark>$&</mark>');
  };

  const handleTextUpdate = (e) => {
    const updatedText = e.target.value.split(' ');

    const result = updatedText.reduce((word, next) => {
      if (isPalindrome(next.toLowerCase())) {
        word += ` ${applyHighlights(next)}`;
        return word;
      } else {
        word += ` <span style="color: black">${next}</span>`;
        return word;
      }
    }, '');

    setMirrorText(result)
    setParagraphText(e.target.value);
  };

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <div className="App">
      <h1>Enter text and find out which words are Palindromes!</h1>
      <div class="backdrop">
        <div class="highlights" dangerouslySetInnerHTML={createMarkup(mirrorText)} />
      </div>
      <TextField
        paragraphText={paragraphText}
        handleTextUpdate={handleTextUpdate}
        mirrorText={mirrorText}
      />
    </div>
  );
}

export default App;
