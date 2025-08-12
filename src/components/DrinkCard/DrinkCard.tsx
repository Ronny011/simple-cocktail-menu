import { type FC } from 'react';
import type { Cocktail } from '../DrinkList/DrinkList';
import { DrinkPhoto, Wrapper } from './DrinkCard.styles';

interface Props {
  alignToRight?: boolean;
  cocktail: Cocktail;
}

export const DrinkCard: FC<Props> = ({ cocktail }) => {
  const { name, image, ingredients } = cocktail || {};
  return (
    <Wrapper>
      <h3>{name}</h3>
      <DrinkPhoto src={image} />
      {ingredients}
    </Wrapper>
  );
};
