import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByText } from 'redux/filterSlice';

export default function FilterWords() {
  const dispatch = useDispatch();
  return (
    <div>
      <TextField
        onChange={e => {
          dispatch(filterByText(e.target.value));
        }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        name="ukWord"
      />
    </div>
  );
}
