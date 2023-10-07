import { Container } from '@mui/material';
import WordsForm from './WordsForm/WordsForm';

import WordsList from './WordsList/WordsList';
import FilterWords from './FilterWords';

const App = () => {
  return (
    <Container maxWidth="xl">
      <WordsForm />
      <FilterWords />
      <WordsList />
    </Container>
  );
};

export default App;
