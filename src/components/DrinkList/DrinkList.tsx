import { DrinkCard } from '../DrinkCard';
import { Separator, Wrapper } from './DrinkList.styles';
import { cocktailsPerLanguage, titlePerLanguage } from '../../util/constants';
import { usePersistentLanguage } from '../../store/usePersistentLanguage';
import { Fragment } from 'react/jsx-runtime';

export type Cocktail = {
  name: string;
  imageUrl: string;
  ingredients: string;
  ingredientUrls: string[];
  tags?: string[];
};

export const DrinkList = ({ filter }: { filter: string }) => {
  const { language } = usePersistentLanguage();
  const cocktails = cocktailsPerLanguage[language];

  return (
    <>
      <h2>{titlePerLanguage[language]}</h2>
      <Wrapper>
        {cocktails
          .filter((cocktail) => !filter || cocktail.tags?.includes(filter))
          .map((cocktail, index) => {
            const isLastCard = index === cocktails.length - 1;
            return (
              <Fragment key={index}>
                <DrinkCard
                  cocktail={cocktail}
                  alignToRight={Boolean(index % 2)}
                />
                {!isLastCard && <Separator />}
              </Fragment>
            );
          })}
      </Wrapper>
    </>
  );
};
