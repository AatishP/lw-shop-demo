import {fakeDelay} from 'utils/miscHelpers';

// Mocked responses and data types from a Products API
export type Product = {
  productId: string;
  productName: string;
  thumbnail?: ThumbnailName;
};

export type ProductDetail = {
  productId: string;
  productName: string;
  variants: ProductVariant[];
  description: string;
};

export type ProductVariant = {
  variantId: string;
  variantName: string;
  variantDescription?: string;
  price: number;
  images?: FullImageName[];
};

// Since the product images aren't actually coming from an external source, we have to fudge things a little bit to make them load from our static assets at runtime
export enum ThumbnailName {
  UltraBike = 'UltraBike',
  SoftDrink = 'SoftDrink',
  Sweater = 'Sweater',
}

export enum FullImageName {
  UltraBikeA1 = 'UltraBikeA1',
  UltraBikeA2 = 'UltraBikeA2',
  UltraBikeB1 = 'UltraBikeB1',
  UltraBikeB2 = 'UltraBikeB2',
  UltraBikeC1 = 'UltraBikeC1',
  UltraBikeC2 = 'UltraBikeC2',
  SoftDrinkA1 = 'SoftDrinkA1',
  SoftDrinkA2 = 'SoftDrinkA2',
  SoftDrinkB1 = 'SoftDrinkB1',
  SoftDrinkB2 = 'SoftDrinkB2',
  SweaterA1 = 'SweaterA1',
  SweaterA2 = 'SweaterA2',
  SweaterB1 = 'SweaterB1',
  SweaterB2 = 'SweaterB2',
}

export const PRODUCT_IMAGES = {
  thumbnails: {
    [ThumbnailName.UltraBike]: require('assets/products/bike_thumbnail.png'),
    [ThumbnailName.SoftDrink]: require('assets/products/soft_drink_thumbnail.png'),
    [ThumbnailName.Sweater]: require('assets/products/sweater_thumbnail.png'),
  },
  fullImages: {
    [FullImageName.SoftDrinkA1]: require('assets/products/soft_drink_A1.png'),
    [FullImageName.SoftDrinkA2]: require('assets/products/soft_drink_A2.png'),
    [FullImageName.SoftDrinkB1]: require('assets/products/soft_drink_B1.png'),
    [FullImageName.SoftDrinkB2]: require('assets/products/soft_drink_B2.png'),
    [FullImageName.UltraBikeA1]: require('assets/products/bike_A1.png'),
    [FullImageName.UltraBikeA2]: require('assets/products/bike_A2.png'),
    [FullImageName.UltraBikeB1]: require('assets/products/bike_B1.png'),
    [FullImageName.UltraBikeB2]: require('assets/products/bike_B2.png'),
    [FullImageName.UltraBikeC1]: require('assets/products/bike_C1.png'),
    [FullImageName.UltraBikeC2]: require('assets/products/bike_C2.png'),
    [FullImageName.SweaterA1]: require('assets/products/sweater_A1.png'),
    [FullImageName.SweaterA2]: require('assets/products/sweater_A2.png'),
    [FullImageName.SweaterB1]: require('assets/products/sweater_B1.png'),
    [FullImageName.SweaterB2]: require('assets/products/sweater_B2.png'),
  },
};

const MOCK_PRODUCTS: Product[] = [
  {
    productId: '00000001',
    productName: 'Ultra Bike 2000',
    thumbnail: ThumbnailName.UltraBike,
  },
  {
    productId: '00000002',
    productName: 'Soft Drink',
    thumbnail: ThumbnailName.SoftDrink,
  },
  {
    productId: '00000003',
    productName: 'VeryWarm\u2122 Sweater',
    thumbnail: ThumbnailName.Sweater,
  },
];

const MOCK_PRODUCT_DETAILS: ProductDetail[] = [
  {
    productId: '00000001',
    productName: 'Ultra Bike 2000',
    variants: [
      {
        variantId: 'A',
        variantName: '5 Speed',
        variantDescription:
          "Don't let its low gear count fool you - this bike will make you the envy of the office. Water bottle holder sold separately.",
        price: 1999.99,
        images: [FullImageName.UltraBikeA1, FullImageName.UltraBikeA2],
      },
      {
        variantId: 'B',
        variantName: '8 Speed',
        variantDescription:
          "Looking to make the leap from amateur to semi-pro? The 8 Speed Ultra Bike 2000 will take you there quicker than you can say 'Peloton'.",
        price: 3499.99,
        images: [FullImageName.UltraBikeB1, FullImageName.UltraBikeB2],
      },
      {
        variantId: 'C',
        variantName: '12 Speed',
        variantDescription:
          "Ultra-light carbon fiber construction and precision Swiss engineering means you'll win the Tour de France - or your money back.",
        price: 24999.99,
        images: [FullImageName.UltraBikeC1, FullImageName.UltraBikeC2],
      },
    ],
    description:
      'The latest innovation from the team that brought you the Super Bike 1999.',
  },
  {
    productId: '00000002',
    productName: 'Soft Drink',
    variants: [
      {
        variantId: 'A',
        variantName: '375mL',
        price: 1.5,
        variantDescription:
          "Have it on the couch or on the go - it's the perfect size for the perfect day. Any resemblance to existing soft drink brands is purely coincidental.",
        images: [FullImageName.SoftDrinkA1, FullImageName.SoftDrinkA2],
      },
      {
        variantId: 'B',
        variantName: '1.25L',
        price: 4,
        variantDescription:
          "Guaranteed to make you the life of the party. Our new 'Flavour+' recipe contains over two weeks' worth of your recommended sugar intake, so share it with some mates.",
        images: [FullImageName.SoftDrinkB1, FullImageName.SoftDrinkB2],
      },
    ],
    description:
      'Quench your thirst with a delicious (and generic) Soft Drink.',
  },
  {
    productId: '00000003',
    productName: 'VeryWarm\u2122 Sweater',
    variants: [
      {
        variantId: 'A',
        variantName: '100% Cotton',
        price: 179.99,
        variantDescription:
          "Our basic and most popular version. What sets us apart from sweaters made from the same materials for half the price? We don't know!",
        images: [FullImageName.SweaterA1, FullImageName.SweaterA2],
      },
      {
        variantId: 'B',
        variantName: 'Grade A Fine Cashmere',
        price: 999.99,
        variantDescription:
          'For those that need the most luxurious comfort for their short journey from the penthouse suite to the helipad.',
        images: [FullImageName.SweaterB1, FullImageName.SweaterB2],
      },
    ],
    description: 'Brave the cold with this chic and comfortable sweater!',
  },
];

export const getProducts = async () => {
  await fakeDelay();

  return MOCK_PRODUCTS;
};

export const getProductDetails = async (productId: string) => {
  await fakeDelay();

  const selectedProduct = MOCK_PRODUCT_DETAILS.find(
    product => product.productId === productId,
  );

  return selectedProduct ?? null;
};

export const getMockProductDetailsByIds = (productIds: string[]) => {
  const detailsToReturn: ProductDetail[] = [];

  productIds.forEach(id => {
    const productDetails = MOCK_PRODUCT_DETAILS.find(
      product => product.productId === id,
    );
    if (productDetails) {
      detailsToReturn.push(productDetails);
    }
  });

  return detailsToReturn;
};
