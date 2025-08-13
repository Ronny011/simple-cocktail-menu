import { Cocktail } from '../components/DrinkList';
import { Language } from '../store/usePersistentLanguage';

type CockTailsPerLanguage = { [key in Language]: Cocktail[] };

const cocktailImages = {
  newYorkSour:
    'https://www.liquor.com/thmb/R_VZp5FxTfeWJiJB3Jl_JMkt_Do=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ny-sour-720x720-primary-v2-cfbf5e7a8536466ba059d9e678ba16bc.jpg',
  londonMule: 'https://bakerbynature.com/wp-content/uploads/2021/03/The-Best-Moscow-Mule-Recipe-3-1-of-1.jpg',
  ginTonic:
    'https://www.liquor.com/thmb/sYX_sTKUpyagRermLA31SMLF3-8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__09__18090535__Gin-and-Tonic-720x720-recipe-c2e32c4cf53c4ed7a4de20af8e862a12.jpg',
  maiTai:
    'https://assets.bonappetit.com/photos/6102d7f52dfec3f796d5aafb/1:1/w_2560%2Cc_limit/0821-Mai-Tai-Cocktail.jpg',
  negroni:
    'https://images.ctfassets.net/hs93c4k6gio0/5URUaNPrWo9DQUe9FhaQd3/e0c2febf6e00baf53c30639a52bbc607/_images_tanqueray-negroni.jpg.jpg',
  midoriShower:
    'https://www.liquor.com/thmb/q_RYLYqrYZkHSCoHu98C-h42kbQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__04__04101555__Midori-Sour-720x720-recipe-8286cb7ef2be40f98ad359f49d7943a3.jpg',
  paloma:
    'https://www.southernliving.com/thmb/pn9NrRsTpG-U1xpRyIN90C5wcJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living-Paloma--Step-4-1769-84d74c08ebca4c0fba05cbce1d75c3d3.jpg',
  beesKnees: 'https://www.girlversusdough.com/wp-content/uploads/2021/04/bees-knees-cocktail-3-600x900.jpg',
  redWhiteNight:
    'https://www.liquor.com/thmb/oDoPTN5eOOLdSE1lpYhfTRos5Vk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/red-white-and-night-720x720-primary-2504e8f315314e6fbfe980dccbc765a7.jpg'
};

const baseBadges = {
  bourbon: 'https://www.woodfordreserve.com/wp-content/uploads/2019/12/Holiday-Bottle.png',
  gingerBeer: 'https://fevertree.s3.eu-west-2.amazonaws.com/thumbs/500x1200e/f4d31fd2467d7fc37337ac906521af1f.png',
  gin: 'https://ik.imagekit.io/cvygf2xse/beefeatergin/wp-content/uploads/2022/10/Beefeater-London-Dry-Gin-front-view-aspect-ratio-189-599-1.png?tr=q-80,w-340',
  rum: 'https://planterayrum.com/wp-content/uploads/2024/01/planteray-xaymaca-750ml-usa-mockup.png',
  campari:
    'https://www.camparigroup.com/sites/default/files/styles/png_optimized_resaved/public/images/brands/products/Campari_Bitter_Bottle.png?itok=0sOxhR2g',
  midori: 'https://www.midori-world.com/modules/custom/bsi_core/src/img/midori-bottle.png',
  tequila:
    'https://i0.wp.com/www.1800tequila.com/wp-content/uploads/2021/06/bottle-repo%402x.webp?fit=447%2C1079&ssl=1',
  cointreau:
    'https://www.cointreau.com/int/en/sites/int/files/styles/product_image_300/public/product-images/Cointreau-new-bottle-front%20%282%29.png.webp?itok=K2lETmHH',
  wine: 'https://wine.md/assets/images/products/1893/saperavi-de-purcari.png'
};

export const cocktailsPerLanguage: CockTailsPerLanguage = {
  en: [
    {
      name: 'New Your Sour',
      imageUrl: cocktailImages.newYorkSour,
      ingredients: 'Bourbon, Sour and Red wine',
      baseBadgeUrl: baseBadges.bourbon
    },
    {
      name: 'London Mule',
      imageUrl: cocktailImages.londonMule,
      ingredients: 'Gin, Lime and Ginger Beer',
      baseBadgeUrl: baseBadges.gingerBeer
    },
    {
      name: 'Gin & Tonic',
      imageUrl: cocktailImages.ginTonic,
      ingredients: 'See title',
      baseBadgeUrl: baseBadges.gin
    },
    {
      name: 'Mai Tai',
      imageUrl: cocktailImages.maiTai,
      ingredients: 'Rum, Lime and Almond Syrup',
      baseBadgeUrl: baseBadges.rum
    },
    {
      name: 'Negroni',
      imageUrl: cocktailImages.negroni,
      ingredients: 'Campari, Gin and Red Vermouth',
      baseBadgeUrl: baseBadges.campari
    },
    {
      name: 'Midori Shower',
      imageUrl: cocktailImages.midoriShower,
      ingredients: 'Midori, Chartreuse and Sour',
      baseBadgeUrl: baseBadges.midori
    },
    {
      name: 'Paloma',
      imageUrl: cocktailImages.paloma,
      ingredients: 'Tequila, Lime and Grapefruit Soda',
      baseBadgeUrl: baseBadges.tequila
    },
    {
      name: "Bee's Knees",
      imageUrl: cocktailImages.beesKnees,
      ingredients: 'Gin, Honey, Lemon and Cointreau',
      baseBadgeUrl: baseBadges.cointreau
    },
    {
      name: 'Red, White & Night',
      imageUrl: cocktailImages.redWhiteNight,
      ingredients: 'Red Wine, Gin and Sour',
      baseBadgeUrl: baseBadges.wine
    }
  ],
  he: [
    {
      name: 'ניו יורק סאוור',
      imageUrl: cocktailImages.newYorkSour,
      ingredients: 'בורבון, סאוור ויין אדום',
      baseBadgeUrl: baseBadges.bourbon
    },
    {
      name: 'לונדון מיול',
      imageUrl: cocktailImages.londonMule,
      ingredients: "ג'ין, ליים ובירת ג'ינג'ר",
      baseBadgeUrl: baseBadges.gingerBeer
    },
    {
      name: "ג'ין טוניק",
      imageUrl: cocktailImages.ginTonic,
      ingredients: 'ראה כותרת',
      baseBadgeUrl: baseBadges.gin
    },
    {
      name: 'מאי טאי',
      imageUrl: cocktailImages.maiTai,
      ingredients: 'רום, ליים וסירופ שקדים',
      baseBadgeUrl: baseBadges.rum
    },
    {
      name: 'נגרוני',
      imageUrl: cocktailImages.negroni,
      ingredients: "קמפרי, ג'ין ורמוט אדום",
      baseBadgeUrl: baseBadges.campari
    },
    {
      name: 'מידורי שאוור',
      imageUrl: cocktailImages.midoriShower,
      ingredients: 'מידורי, שארטרז וסאוור',
      baseBadgeUrl: baseBadges.midori
    },
    {
      name: 'פלומה',
      imageUrl: cocktailImages.paloma,
      ingredients: 'טקילה, ליים וסודה אשכוליות',
      baseBadgeUrl: baseBadges.tequila
    },
    {
      name: 'ברכי הדבורה',
      imageUrl: cocktailImages.beesKnees,
      ingredients: "ג'ין, דבש, לימון וקואנטרו",
      baseBadgeUrl: baseBadges.cointreau
    },
    {
      name: 'לילה אדום-לבן',
      imageUrl: cocktailImages.redWhiteNight,
      ingredients: "יין אדום, ג'ין וסאוור",
      baseBadgeUrl: baseBadges.wine
    }
  ],
  ru: [
    {
      name: 'Нью-Йорк Сауэр',
      imageUrl: cocktailImages.newYorkSour,
      ingredients: 'Бурбон, кислый микс и красное вино',
      baseBadgeUrl: baseBadges.bourbon
    },
    {
      name: 'Лондон Мюл',
      imageUrl: cocktailImages.londonMule,
      ingredients: 'Джин, лайм и имбирное пиво',
      baseBadgeUrl: baseBadges.gingerBeer
    },
    {
      name: 'Джин-тоник',
      imageUrl: cocktailImages.ginTonic,
      ingredients: 'См. название',
      baseBadgeUrl: baseBadges.gin
    },
    {
      name: 'Май Тай',
      imageUrl: cocktailImages.maiTai,
      ingredients: 'Ром, лайм и миндальный сироп',
      baseBadgeUrl: baseBadges.rum
    },
    {
      name: 'Негрони',
      imageUrl: cocktailImages.negroni,
      ingredients: 'Кампари, джин и красный вермут',
      baseBadgeUrl: baseBadges.campari
    },
    {
      name: 'Мидори Шауэр',
      imageUrl: cocktailImages.midoriShower,
      ingredients: 'Мидори, Шартрез и кислый микс',
      baseBadgeUrl: baseBadges.midori
    },
    {
      name: 'Палома',
      imageUrl: cocktailImages.paloma,
      ingredients: 'Текила, лайм и грейпфрутовая газировка',
      baseBadgeUrl: baseBadges.tequila
    },
    {
      name: 'Пчелиные коленки',
      imageUrl: cocktailImages.beesKnees,
      ingredients: 'Джин, мед, лимон и Куантро',
      baseBadgeUrl: baseBadges.cointreau
    },
    {
      name: 'Красный, белый и ночь',
      imageUrl: cocktailImages.redWhiteNight,
      ingredients: 'Красное вино, джин и кислый микс',
      baseBadgeUrl: baseBadges.wine
    }
  ],
  '': []
};

export const titlePerLanguage = {
  en: 'Choose your cocktail 🍸',
  he: 'בחר את הקוקטייל שלך 🍸',
  ru: 'Выберите ваш коктейль 🍸',
  '': []
};
