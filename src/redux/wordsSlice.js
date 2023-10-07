import { createSlice } from '@reduxjs/toolkit';

export const wordsSlice = createSlice({
  name: 'words',
  initialState: [],
  reducers: {
    addWord: (state, action) => {
      state.push(action.payload);
    },
    deleteWord: (state, action) => {
      return state.filter(el => el.id !== action.payload);
    },
    editWord: (state, action) => {
      const index = state.findIndex(word => word.id === action.payload.id);
      state.splice(index, 1, action.payload);
    },
  },
});

export const { addWord, deleteWord, editWord } = wordsSlice.actions;

export const wordsReducer = wordsSlice.reducer;
