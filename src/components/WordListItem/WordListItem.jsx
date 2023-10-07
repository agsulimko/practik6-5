import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWord, editWord } from 'redux/wordsSlice';

export default function WordListItem({ word }) {
  const dispatch = useDispatch();

  const [isEditMode, setIsEditMode] = useState(false);
  const [ukWord, setUkWord] = useState(word.ukWord);
  const [enWord, setEnWord] = useState(word.enWord);

  const handlEdit = () => {
    setIsEditMode(prev => !prev);
  };

  useEffect(() => {
    if (!isEditMode && (ukWord !== word.ukWord || enWord !== word.enWord)) {
      // handlEditWord({
      // id: word.id,
      // ukWord,
      // enWord,
      // });
      dispatch(editWord({ id: word.id, ukWord, enWord }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditMode]);

  const handlChange = ({ target }) => {
    if (target.name === 'editUkWord') {
      setUkWord(target.value);
      return;
    }
    setEnWord(target.value);
  };

  return (
    <li>
      {!isEditMode ? (
        <>
          <span>{word.ukWord}</span>:<span>{word.enWord}</span>
        </>
      ) : (
        <>
          <input
            onChange={handlChange}
            type="text"
            name="editUkWord"
            value={ukWord}
          />
          <input
            onChange={handlChange}
            type="text"
            name="editEnWord"
            value={enWord}
          />
        </>
      )}
      <button onClick={handlEdit}>{isEditMode ? 'Save' : 'Edit'}</button>
      <button onClick={() => dispatch(deleteWord(word.id))}>Delete</button>
    </li>
  );
}
