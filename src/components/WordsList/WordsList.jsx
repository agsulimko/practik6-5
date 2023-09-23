import WordListItem from 'components/WordListItem/WordListItem';
import React from 'react';

const WordsList = ({ words, deleteWord, handlEditWord }) => {
  return (
    <ul>
      {words.map(word => (
        <WordListItem
          key={word.id}
          word={word}
          deleteWord={deleteWord}
          handlEditWord={handlEditWord}
        />
      ))}
    </ul>
  );
};

export default WordsList;
