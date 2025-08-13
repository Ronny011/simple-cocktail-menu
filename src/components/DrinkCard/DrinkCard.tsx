import { type FC } from 'react';
import type { Cocktail } from '../DrinkList/DrinkList';
import { BaseSpirit, DrinkPhoto, Images, Title, Wrapper } from './DrinkCard.styles';

interface Props {
  alignToRight: boolean;
  cocktail: Cocktail;
}

export const DrinkCard: FC<Props> = ({ cocktail, alignToRight }) => {
  const { name, imageUrl, ingredients, baseBadgeUrl } = cocktail || {};
  return (
    <Wrapper $alignToRight={alignToRight}>
      <Title>{name}</Title>
      <Images $alignToRight={alignToRight}>
        <DrinkPhoto src={imageUrl} />
        {baseBadgeUrl && <BaseSpirit src={baseBadgeUrl} />}
      </Images>
      {ingredients}
    </Wrapper>
  );
};
