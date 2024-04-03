import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({ baseUrl: "/fakeApi" });

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/product",
      providesTags: (result = [], error, arg) => [
        "Product",
        ...result.map(({ id }) => ({ type: "Product", id })),
      ],
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
