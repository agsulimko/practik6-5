import { TextField } from '@mui/material';
import React from 'react';

export default function FilterWords({ onChange }) {
  return (
    <div>
      <TextField
        onChange={onChange}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        name="ukWord"
      />
    </div>
  );
}
