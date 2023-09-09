import React from 'react';

const WordsList = ({ words, deleteWord }) => {
  return (
    <ul>
      {words.map(word => (
        <li key={word.id}>
          <span>{word.ukWord}</span>:<span>{word.enWord}</span>
          <button onClick={() => deleteWord(word.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default WordsList;
