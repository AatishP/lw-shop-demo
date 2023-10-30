import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {CartItem, Order, OrderConfirmation, postOrder} from 'mockApi/orders';
import {
  Product,
  ProductDetail,
  getMockProductDetailsByIds,
  getProductDetails,
  getProducts,
} from 'mockApi/products';
import {RootState} from 'store/store';

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
    // This is used to "select" the details for already-fetched products.
    // Realistically the values this would fetch would already be cached if we were using a real API, but since
    // it's all mocked out, this convenience query is here to pretend it's working that way
    getProductDetailsByIds: builder.query<ProductDetail[] | null, string[]>({
      queryFn: arg => {
        return {
          data: getMockProductDetailsByIds(arg),
        };
      },
    }),
    postOrder: builder.mutation<OrderConfirmation, Order>({
      queryFn: async arg => {
        return {
          data: await postOrder(arg),
        };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsByIdQuery,
  useGetProductDetailsByIdsQuery,
  usePostOrderMutation,
} = simpleShopApi;
