import WordListItem from 'components/WordListItem/WordListItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredWords } from 'redux/selectors';

const WordsList = () => {
  const words = useSelector(selectFilteredWords);
  return (
    <ul>
      {words.map(word => (
        <WordListItem key={word.id} word={word} />
      ))}
    </ul>
  );
};

export default WordsList;
