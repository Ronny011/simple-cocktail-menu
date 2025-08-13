import { DrinkCard } from '../DrinkCard';
import { Separator, Wrapper } from './DrinkList.styles';
import { cocktailsPerLanguage, titlePerLanguage } from '../../util/consntants';
import { usePersistentLanguage } from '../../store/usePersistentLanguage';

export type Cocktail = {
  name: string;
  imageUrl: string;
  ingredients: string;
  baseBadgeUrl?: string;
};

export const DrinkList = () => {
  const { language } = usePersistentLanguage();
  const cocktails = cocktailsPerLanguage[language];

  return (
    <>
      <h1>{titlePerLanguage[language]}</h1>
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
    </>
  );
};
