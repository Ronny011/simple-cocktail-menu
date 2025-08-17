import { useState, type FC } from 'react';
import type { Cocktail } from '../DrinkList/DrinkList';
import { BaseSpirit, DrinkPhoto, Frame, Title, Wrapper } from './DrinkCard.styles';

interface Props {
  alignToRight: boolean;
  cocktail: Cocktail;
}

export const DrinkCard: FC<Props> = ({ cocktail, alignToRight }) => {
  const { name, imageUrl, ingredients, ingredientUrls } = cocktail || {};

  const [areIngredientsExpanded, setAreIngredientsExpanded] = useState(false);

  const toggleExpansion = () => setAreIngredientsExpanded((prev) => !prev);

  return (
    <Wrapper $alignToRight={alignToRight}>
      <Title>{name}</Title>

      {areIngredientsExpanded && (
        <Frame onClick={toggleExpansion}>
          {ingredientUrls.map((url, index) => (
            <BaseSpirit
              key={index}
              src={url}
            />
          ))}
        </Frame>
      )}
      <DrinkPhoto
        onClick={toggleExpansion}
        src={imageUrl}
      />

      {ingredients}
    </Wrapper>
  );
};
