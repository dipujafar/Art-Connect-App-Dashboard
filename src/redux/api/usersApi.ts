import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (queries) => ({
        url: "/user/users",
        method: "GET",
        params: queries,
      }),
      providesTags: [tagTypes.users],
    }),
    userBlock: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "PATCH",
        body: { isActive: false },
      }),
      invalidatesTags: [tagTypes.users],
    }),
    userUnBlock: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "PATCH",
        body: { isActive: true },
      }),
      invalidatesTags: [tagTypes.users],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useUserBlockMutation,
  useUserUnBlockMutation,
} = userApi;
