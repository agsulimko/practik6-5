import { Container } from '@mui/material';
import WordsForm from './WordsForm/WordsForm';

import React, { Component } from 'react';
import WordsList from './WordsList/WordsList';
import FilterWords from './FilterWords';

export default class App extends Component {
  state = {
    words: [],
    filter: '',
  };

  formSubmit = newWord => {
    this.setState(prevState => ({
      words: [...prevState.words, newWord],
    }));
  };

  hendleDelete = id => {
    this.setState(prevState => ({
      words: prevState.words.filter(word => word.id !== id),
    }));
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  getFilteredWords = () => {
    const normalizedValue = this.state.filter.toLowerCase().trim();
    return this.state.words.filter(word => {
      return word.enWord
        .concat(word.ukWord)
        .toLowerCase()
        .includes(normalizedValue);
    });
  };

  render() {
    return (
      <Container maxWidth="xl">
        <WordsForm onSubmit={this.formSubmit} />
        <FilterWords onChange={this.handleChange} />
        <WordsList
          words={this.getFilteredWords()}
          deleteWord={this.hendleDelete}
        />
      </Container>
    );
  }
}
