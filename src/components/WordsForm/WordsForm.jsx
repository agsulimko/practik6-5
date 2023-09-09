import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import css from './WordsForm.module.css';
import { nanoid } from 'nanoid';

export default class WordsForm extends Component {
  state = {
    ukWord: '',
    enWord: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, id: nanoid(5) });
    this.setState({
      ukWord: '',
      enWord: '',
    });
  };

  render() {
    return (
      <div className={css.wordsFormWrapper}>
        <form className={css.wordsForm} onSubmit={this.handleSubmit}>
          <TextField
            onChange={this.handleChange}
            id="outlined-basic"
            label="Ukrainian"
            variant="outlined"
            value={this.state.ukWord}
            name="ukWord"
          />
          <TextField
            onChange={this.handleChange}
            id="outlined-basic"
            label="English"
            variant="outlined"
            value={this.state.enWord}
            name="enWord"
          />
          <Button variant="contained" type="submit">
            Add
          </Button>
        </form>
      </div>
    );
  }
}
