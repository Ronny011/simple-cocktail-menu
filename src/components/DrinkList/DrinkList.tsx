import { type FC } from 'react';
import { DrinkCard } from '../DrinkCard';
import { Wrapper } from './DrinkList.styles';

export type Cocktail = {
  name: string;
  image: string;
  ingredients: string;
};

const cocktails: Cocktail[] = [
  {
    name: 'New Your Sour',
    image:
      'https://www.liquor.com/thmb/R_VZp5FxTfeWJiJB3Jl_JMkt_Do=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ny-sour-720x720-primary-v2-cfbf5e7a8536466ba059d9e678ba16bc.jpg',
    ingredients: 'Bourbon, Sour and Red wine'
  },
  {
    name: 'Mai Tai',
    image:
      'https://assets.bonappetit.com/photos/6102d7f52dfec3f796d5aafb/1:1/w_2560%2Cc_limit/0821-Mai-Tai-Cocktail.jpg',
    ingredients: 'Rum, Lime and Almond Syrup'
  },
  {
    name: 'Negroni',
    image:
      'https://images.ctfassets.net/hs93c4k6gio0/5URUaNPrWo9DQUe9FhaQd3/e0c2febf6e00baf53c30639a52bbc607/_images_tanqueray-negroni.jpg.jpg',
    ingredients: 'Campari, Gin and Red Vermouth'
  },
  {
    name: 'Paloma',
    image:
      'https://www.southernliving.com/thmb/pn9NrRsTpG-U1xpRyIN90C5wcJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living-Paloma--Step-4-1769-84d74c08ebca4c0fba05cbce1d75c3d3.jpg',
    ingredients: 'Tequila, Lime and Grapefruit Soda'
  },
  {
    name: 'Cosmopolitan',
    image:
      'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-09-Cosmopolitan-Cocktail%2FCosmopolitan_Cocktail',
    ingredients: 'Gin, Cointreau, Lime and Cranberry Juice'
  }
];

interface Props {}

export const DrinkList: FC<Props> = () => {
  return (
    <Wrapper>
      {cocktails.map((cocktail) => (
        <DrinkCard cocktail={cocktail} />
      ))}
    </Wrapper>
  );
};
