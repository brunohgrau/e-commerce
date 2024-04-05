import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({ baseUrl: "/fakeApi" });

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      keepUnusedDataFor: 5,
      providesTags: (result = [], error, arg) => [
        "Product",
        ...result.map(({ id }) => ({ type: "Product", id })),
      ],
    }),

    getProduct: builder.query({
      query: (id) => `/products/${id}`,
      keepUnusedDataFor: 5,
      providesTags: (result, error, arg) => [{ type: "Product", id: arg }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = apiSlice;
