import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import css from './WordsForm.module.css'
export default class WordsForm extends Component {
  render() {
      
    return (
      <div className={css.wordsFormWrapper} >
        <form className={css.wordsForm}>
           <TextField id="outlined-basic" label="Outlined" variant="outlined" />
           <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Add</Button>
        </form>
      </div>
    )
  }
}
