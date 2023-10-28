import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  Product,
  ProductDetail,
  getProductDetails,
  getProducts,
} from 'mockApi/products';

export const simpleShopApi = createApi({
  reducerPath: 'simpleShopApi',
  // Ordinarily this would be fetching from a real API, but for the sake of this demo each query just uses mocked responses
  baseQuery: fetchBaseQuery({baseUrl: 'localhost:3000/api/v1'}),
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      queryFn: async () => {
        return {
          data: await getProducts(),
        };
      },
    }),
    getProductDetailsById: builder.query<ProductDetail | null, string>({
      queryFn: async arg => {
        const response = await getProductDetails(arg);

        if (response) {
          return {
            data: response,
          };
        } else {
          return {
            error: {
              status: 404,
              data: 'Product not found',
            },
          };
        }
      },
    }),
  }),
});

export const {useGetProductsQuery, useGetProductDetailsByIdQuery} =
  simpleShopApi;
