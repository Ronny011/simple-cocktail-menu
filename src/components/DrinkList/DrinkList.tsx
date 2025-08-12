import { DrinkCard } from '../DrinkCard';
import { Separator, Wrapper } from './DrinkList.styles';
import { cocktails } from '../../util/consntants';

export type Cocktail = {
  name: string;
  image: string;
  ingredients: string;
};

export const DrinkList = () => {
  return (
    <Wrapper>
      {cocktails.map((cocktail, index) => {
        const isLastCard = index === cocktails.length - 1;

        return (
          <>
            <DrinkCard
              key={index}
              cocktail={cocktail}
              alignToRight={Boolean(index % 2)}
            />

            {!isLastCard && <Separator />}
          </>
        );
      })}
    </Wrapper>
  );
};
