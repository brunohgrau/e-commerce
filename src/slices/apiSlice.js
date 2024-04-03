import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({ baseUrl: "/fakeApi" });

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: (result = [], error, arg) => [
        "Product",
        ...result.map(({ id }) => ({ type: "Product", id })),
      ],
    }),
    getProduct: builder.query({
      query: (productId) => `/products/${productId}`,
      providesTags: (result, error, arg) => [{ type: "Product", id: arg }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = apiSlice;
