import { baseApi } from "../../api/baseApi";

const contactsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateContactMutation } = contactsApi;
