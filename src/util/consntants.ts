import { Cocktail } from '../components/DrinkList';
import { Language } from '../store/usePersistentLanguage';

type CockTailsPerLanguage = { [key in Language]: Cocktail[] };

export const cocktailImages = {
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

export const ingredientImages = {
  bourbon: 'https://www.woodfordreserve.com/wp-content/uploads/2019/12/Holiday-Bottle.png',
  gingerBeer: 'https://fevertree.s3.eu-west-2.amazonaws.com/thumbs/500x1200e/66c18c4efbcb0a8c56a26776d0c3d0e3.png',
  gin: 'https://ik.imagekit.io/cvygf2xse/beefeatergin/wp-content/uploads/2022/10/Beefeater-London-Dry-Gin-front-view-aspect-ratio-189-599-1.png?tr=q-80,w-340',
  rum: 'https://planterayrum.com/wp-content/uploads/2024/01/planteray-xaymaca-750ml-usa-mockup.png',
  campari:
    'https://cityhive-production-cdn.cityhive.net/product_details/660b064862a5ce2abc1a8462/primary_image/large.png?sig=5c391bdd9b127f376634c056f5a9fbf5317a616bd0b124650d4f7385d8b2a42c',
  midori: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Midori_Suntory.png',
  tequila:
    'https://i0.wp.com/www.1800tequila.com/wp-content/uploads/2021/06/bottle-repo%402x.webp?fit=447%2C1079&ssl=1',
  cointreau:
    'https://www.cointreau.com/int/en/sites/int/files/styles/product_image_300/public/product-images/Cointreau-new-bottle-front%20%282%29.png.webp?itok=K2lETmHH',
  wine: 'https://wine.md/assets/images/products/1893/saperavi-de-purcari.png',
  tonic: 'https://fevertree.s3.eu-west-2.amazonaws.com/thumbs/500x1200e/f4d31fd2467d7fc37337ac906521af1f.png',
  orgeat: 'https://www.bennettopie.com/cdn/shop/products/Almond-70cl-HD.png?v=1673364180',
  chartreuse: 'https://d3f6h8s0w402y5.cloudfront.net/shared/product/400/Z39967102924.png',
  grapefruitSoda: 'https://fevertree.s3.eu-west-2.amazonaws.com/thumbs/500x1200e/74754a202d90deba3c3b25ab99b954f8.png'
};

export const cocktailsPerLanguage: CockTailsPerLanguage = {
  en: [
    {
      name: 'New Your Sour',
      imageUrl: cocktailImages.newYorkSour,
      ingredients: 'Bourbon, Sour and Red wine',
      ingredientUrls: [ingredientImages.bourbon, ingredientImages.wine],
      tags: ['sour', 'strong']
    },
    {
      name: 'London Mule',
      imageUrl: cocktailImages.londonMule,
      ingredients: 'Gin, Lime and Ginger Beer',
      ingredientUrls: [ingredientImages.gin, ingredientImages.gingerBeer],
      tags: ['refreshing', 'spicy']
    },
    {
      name: 'Gin & Tonic',
      imageUrl: cocktailImages.ginTonic,
      ingredients: 'See title',
      ingredientUrls: [ingredientImages.gin, ingredientImages.tonic],
      tags: ['refreshing', 'classic']
    },
    {
      name: 'Mai Tai',
      imageUrl: cocktailImages.maiTai,
      ingredients: 'Rum, Lime and Almond Syrup',
      ingredientUrls: [ingredientImages.rum, ingredientImages.orgeat],
      tags: ['sweet', 'tropical']
    },
    {
      name: 'Negroni',
      imageUrl: cocktailImages.negroni,
      ingredients: 'Campari, Gin and Red Vermouth',
      ingredientUrls: [ingredientImages.campari, ingredientImages.gin],
      tags: ['bitter', 'classic']
    },
    {
      name: 'Midori Shower',
      imageUrl: cocktailImages.midoriShower,
      ingredients: 'Midori, Chartreuse and Sour',
      ingredientUrls: [ingredientImages.midori, ingredientImages.chartreuse],
      tags: ['sour', 'fruity']
    },
    {
      name: 'Paloma',
      imageUrl: cocktailImages.paloma,
      ingredients: 'Tequila, Lime and Grapefruit Soda',
      ingredientUrls: [ingredientImages.tequila, ingredientImages.grapefruitSoda],
      tags: ['refreshing', 'fruity']
    },
    {
      name: "Bee's Knees",
      imageUrl: cocktailImages.beesKnees,
      ingredients: 'Gin, Honey, Lemon and Cointreau',
      ingredientUrls: [ingredientImages.gin, ingredientImages.cointreau],
      tags: ['sweet', 'classic']
    },
    {
      name: 'Red, White & Night',
      imageUrl: cocktailImages.redWhiteNight,
      ingredients: 'Red Wine, Gin and Sour',
      ingredientUrls: [ingredientImages.wine, ingredientImages.gin],
      tags: ['sour', 'wine-based']
    }
  ],
  he: [
    {
      name: 'ניו יורק סאוור',
      imageUrl: cocktailImages.newYorkSour,
      ingredients: 'בורבון, סאוור ויין אדום',
      ingredientUrls: [ingredientImages.bourbon, ingredientImages.wine],
      tags: ['חמוץ', 'חזק']
    },
    {
      name: 'לונדון מיול',
      imageUrl: cocktailImages.londonMule,
      ingredients: "ג'ין, ליים ובירת ג'ינג'ר",
      ingredientUrls: [ingredientImages.gin, ingredientImages.gingerBeer],
      tags: ['מרענן', 'חריף']
    },
    {
      name: "ג'ין טוניק",
      imageUrl: cocktailImages.ginTonic,
      ingredients: 'ראה כותרת',
      ingredientUrls: [ingredientImages.gin, ingredientImages.tonic],
      tags: ['מרענן', 'קלאסי']
    },
    {
      name: 'מאי טאי',
      imageUrl: cocktailImages.maiTai,
      ingredients: 'רום, ליים וסירופ שקדים',
      ingredientUrls: [ingredientImages.rum, ingredientImages.orgeat],
      tags: ['מתוק', 'טרופי']
    },
    {
      name: 'נגרוני',
      imageUrl: cocktailImages.negroni,
      ingredients: "קמפרי, ג'ין ורמוט אדום",
      ingredientUrls: [ingredientImages.campari, ingredientImages.gin],
      tags: ['מר', 'קלאסי']
    },
    {
      name: 'מידורי שאוור',
      imageUrl: cocktailImages.midoriShower,
      ingredients: 'מידורי, שארטרז וסאוור',
      ingredientUrls: [ingredientImages.midori, ingredientImages.chartreuse],
      tags: ['חמוץ', 'פירותי']
    },
    {
      name: 'פלומה',
      imageUrl: cocktailImages.paloma,
      ingredients: 'טקילה, ליים וסודה אשכוליות',
      ingredientUrls: [ingredientImages.tequila, ingredientImages.grapefruitSoda],
      tags: ['מרענן', 'פירותי']
    },
    {
      name: 'ברכי הדבורה',
      imageUrl: cocktailImages.beesKnees,
      ingredients: "ג'ין, דבש, לימון וקואנטרו",
      ingredientUrls: [ingredientImages.gin, ingredientImages.cointreau],
      tags: ['מתוק', 'קלאסי']
    },
    {
      name: 'לילה אדום-לבן',
      imageUrl: cocktailImages.redWhiteNight,
      ingredients: "יין אדום, ג'ין וסאוור",
      ingredientUrls: [ingredientImages.wine, ingredientImages.gin],
      tags: ['חמוץ', 'על בסיס יין']
    }
  ],
  ru: [
    {
      name: 'Нью-Йорк Сауэр',
      imageUrl: cocktailImages.newYorkSour,
      ingredients: 'Бурбон, кислый микс и красное вино',
      ingredientUrls: [ingredientImages.bourbon, ingredientImages.wine],
      tags: ['кислый', 'крепкий']
    },
    {
      name: 'Лондон Мюл',
      imageUrl: cocktailImages.londonMule,
      ingredients: 'Джин, лайм и имбирное пиво',
      ingredientUrls: [ingredientImages.gin, ingredientImages.gingerBeer],
      tags: ['освежающий', 'острый']
    },
    {
      name: 'Джин-тоник',
      imageUrl: cocktailImages.ginTonic,
      ingredients: 'См. название',
      ingredientUrls: [ingredientImages.gin, ingredientImages.tonic],
      tags: ['освежающий', 'классический']
    },
    {
      name: 'Май Тай',
      imageUrl: cocktailImages.maiTai,
      ingredients: 'Ром, лайм и миндальный сироп',
      ingredientUrls: [ingredientImages.rum, ingredientImages.orgeat],
      tags: ['сладкий', 'тропический']
    },
    {
      name: 'Негрони',
      imageUrl: cocktailImages.negroni,
      ingredients: 'Кампари, джин и красный вермут',
      ingredientUrls: [ingredientImages.campari, ingredientImages.gin],
      tags: ['горький', 'классический']
    },
    {
      name: 'Мидори Шауэр',
      imageUrl: cocktailImages.midoriShower,
      ingredients: 'Мидори, Шартрез и кислый микс',
      ingredientUrls: [ingredientImages.midori, ingredientImages.chartreuse],
      tags: ['кислый', 'фруктовый']
    },
    {
      name: 'Палома',
      imageUrl: cocktailImages.paloma,
      ingredients: 'Текила, лайм и грейпфрутовая газировка',
      ingredientUrls: [ingredientImages.tequila, ingredientImages.grapefruitSoda],
      tags: ['освежающий', 'фруктовый']
    },
    {
      name: 'Пчелиные коленки',
      imageUrl: cocktailImages.beesKnees,
      ingredients: 'Джин, мед, лимон и Куантро',
      ingredientUrls: [ingredientImages.gin, ingredientImages.cointreau],
      tags: ['сладкий', 'классический']
    },
    {
      name: 'Красный, белый и ночь',
      imageUrl: cocktailImages.redWhiteNight,
      ingredients: 'Красное вино, джин и кислый микс',
      ingredientUrls: [ingredientImages.wine, ingredientImages.gin],
      tags: ['кислый', 'на основе вина']
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

export const tags = {
  en: [
    'sour',
    'strong',
    'refreshing',
    'spicy',
    'classic',
    'sweet',
    'tropical',
    'bitter',
    'fruity',
    'wine-based',
    'all'
  ],
  he: ['חמוץ', 'חזק', 'מרענן', 'חריף', 'קלאסי', 'מתוק', 'טרופי', 'מר', 'פירותי', 'על בסיס יין', 'הכל'],
  ru: [
    'кислый',
    'крепкий',
    'освежающий',
    'острый',
    'классический',
    'сладкий',
    'тропический',
    'горький',
    'фруктовый',
    'на основе вина',
    'все'
  ],
  '': []
};

export const filterByTagTitle = {
  en: 'Filter by tag 🏷️',
  he: 'סינון לפי תג 🏷️',
  ru: 'Фильтр по тегу 🏷️',
  '': []
};
