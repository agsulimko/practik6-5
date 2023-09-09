import { Container } from '@mui/material';
import WordsForm from './WordsForm/WordsForm';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    words: [],
  };

  formSubmit = newWord => {
    this.setState(prevState => ({
      words: [...prevState.words, newWord],
    }));
  };
  render() {
    return (
      <Container maxWidth="xl">
        <WordsForm onSubmit={this.formSubmit} />
      </Container>
    );
  }
}
