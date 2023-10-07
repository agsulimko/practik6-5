import { useReducer } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import css from './WordsForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addWord } from 'redux/wordsSlice';
const initialState = {
  ukWord: '',
  enWord: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'change':
      return { ...state, [action.payload.name]: action.payload.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};
const WordsForm = () => {
  const dispatchToRedux = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ target: { name, value } }) => {
    // this.setState({ [name]: value });
    dispatch({ type: 'change', payload: { name, value } });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // onSubmit({ ...state, id: nanoid(5) });
    dispatchToRedux(
      addWord({
        ...state,
        id: nanoid(5),
      })
    );
    dispatch({ type: 'reset' });
  };

  return (
    <div className={css.wordsFormWrapper}>
      <form className={css.wordsForm} onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="Ukrainian"
          variant="outlined"
          value={state.ukWord}
          name="ukWord"
        />
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="English"
          variant="outlined"
          value={state.enWord}
          name="enWord"
        />
        <Button variant="contained" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default WordsForm;
