import { Container } from '@mui/material';
import WordsForm from './WordsForm/WordsForm';

import React, { Component } from 'react';
import WordsList from './WordsList/WordsList';

export default class App extends Component {
  state = {
    words: [],
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
  render() {
    return (
      <Container maxWidth="xl">
        <WordsForm onSubmit={this.formSubmit} />
        <WordsList words={this.state.words} deleteWord={this.hendleDelete} />
      </Container>
    );
  }
}
