import { Wrapper } from './App.styles';
import { DrinkList } from './components/DrinkList';

export const App = () => {
  return (
    <Wrapper>
      <h2>Choose your cocktail</h2>
      <DrinkList />
    </Wrapper>
  );
};
