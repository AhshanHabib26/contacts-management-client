import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contacts-management-server-azure.vercel.app/api/v1",
  }),

  endpoints: () => ({}),
  tagTypes: ["Contacts"],
});
