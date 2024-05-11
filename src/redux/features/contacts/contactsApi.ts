import { baseApi } from "../../api/baseApi";

const contactsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Contacts"],
    }),
    getAllContact: builder.query({
      query: () => "/contact",
      providesTags: ["Contacts"],
    }),
    updateContact: builder.mutation({
      query: ({ id, data }) => ({
        url: `/contact/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Contacts"],
    }),
    getSingleContact: builder.query({
      query: (id) => `/contact/${id}`,
      providesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useCreateContactMutation,
  useGetAllContactQuery,
  useUpdateContactMutation,
  useGetSingleContactQuery,
  useDeleteContactMutation,
} = contactsApi;
