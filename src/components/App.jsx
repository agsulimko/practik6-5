import { Container } from '@mui/material';
import WordsForm from './WordsForm/WordsForm';

import React, { useState, useEffect } from 'react';
import WordsList from './WordsList/WordsList';
import FilterWords from './FilterWords';

const App = () => {
  const [words, setWords] = useState(() => {
    const isData = JSON.parse(localStorage.getItem('words'));
    return isData ? isData : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('words', JSON.stringify(words));
  }, [words]);

  const formSubmit = newWord => {
    setWords(prevWords => [...prevWords, newWord]);
  };

  const hendleDelete = id => {
    setWords(prevWords => prevWords.filter(word => word.id !== id));
  };

  const handleChange = ({ target: { value } }) => {
    setFilter(value);
  };

  const getFilteredWords = () => {
    const normalizedValue = filter.toLowerCase().trim();
    return words.filter(word => {
      return word.enWord
        .concat(word.ukWord)
        .toLowerCase()
        .includes(normalizedValue);
    });
  };

  return (
    <Container maxWidth="xl">
      <WordsForm onSubmit={formSubmit} />
      <FilterWords onChange={handleChange} />
      <WordsList words={getFilteredWords()} deleteWord={hendleDelete} />
    </Container>
  );
};

export default App;
