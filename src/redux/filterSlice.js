import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterByText: (_, action) => {
      return action.payload;
    },
  },
});

export const { filterByText } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
// const getFilteredWords = () => {
//     const normalizedValue = filter.toLowerCase().trim();
//     return words.filter(word => {
//       return word.enWord
//         .concat(word.ukWord)
//         .toLowerCase()
//         .includes(normalizedValue);
//     });
//   };
