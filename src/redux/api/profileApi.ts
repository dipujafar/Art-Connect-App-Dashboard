import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const profileAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfileData: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      providesTags: [tagTypes.profile],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/user/my-profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.profile],
    }),
  }),
});

export const { useGetProfileDataQuery, useUpdateProfileMutation } = profileAPi;
