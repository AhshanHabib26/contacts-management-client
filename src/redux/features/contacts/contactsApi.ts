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
    getAllContact: builder.query({
      query: () => "/contact",
    }),
    updateContact: builder.mutation({
      query: ({ id, data }) => ({
        url: `/contact/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    getSingleContact: builder.query({
      query: (id) => `/contact/${id}`,
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateContactMutation,
  useGetAllContactQuery,
  useUpdateContactMutation,
  useGetSingleContactQuery,
  useDeleteContactMutation
} = contactsApi;
