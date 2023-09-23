import { Container } from '@mui/material';
import WordsForm from './WordsForm/WordsForm';

import React, { useState } from 'react';
import WordsList from './WordsList/WordsList';
import FilterWords from './FilterWords';
import { useLocalStorage } from 'hooks/useLocalStorage';

const App = () => {
  const [words, setWords] = useLocalStorage('words', []);
  const [filter, setFilter] = useState('');

  const formSubmit = newWord => {
    setWords(prevWords => [...prevWords, newWord]);
  };

  const handlEditWord = editedWord => {
    setWords(prev =>
      prev.map(word => (word.id === editedWord.id ? editedWord : word))
    );
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
      <WordsList
        words={getFilteredWords()}
        deleteWord={hendleDelete}
        handlEditWord={handlEditWord}
      />
    </Container>
  );
};

export default App;
