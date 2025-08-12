import { type FC } from 'react';
import type { Cocktail } from '../DrinkList/DrinkList';
import { DrinkPhoto, Title, Wrapper } from './DrinkCard.styles';

interface Props {
  alignToRight?: boolean;
  cocktail: Cocktail;
}

export const DrinkCard: FC<Props> = ({ cocktail, alignToRight }) => {
  const { name, image, ingredients } = cocktail || {};
  return (
    <Wrapper $alignToRight={alignToRight}>
      <Title>{name}</Title>
      <DrinkPhoto src={image} />
      {ingredients}
    </Wrapper>
  );
};
