import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({ baseUrl: "/fakeApi" });

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: (result = [], error, arg) => [
        "Post",
        ...result.map(({ id }) => ({ type: "Post", id })),
      ],
    }),
    getProducts: builder.query({
      query: () => "/products",
      providesTags: (result = [], error, arg) => [
        "Product",
        ...result.map(({ id }) => ({ type: "Product", id })),
      ],
    }),
  }),
});

export const { useGetPostsQuery, useGetProductsQuery } = apiSlice;
