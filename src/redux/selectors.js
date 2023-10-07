import { createSelector } from '@reduxjs/toolkit';

export const selectWords = state => state.words;

export const selectFilter = state => state.filter;

export const selectFilteredWords = createSelector(
  [selectWords, selectFilter],
  (words, filter) => {
    const normalizedValue = filter.toLowerCase().trim();
    return words.filter(word => {
      return word.enWord
        .concat(word.ukWord)
        .toLowerCase()
        .includes(normalizedValue);
    });
  }
);
