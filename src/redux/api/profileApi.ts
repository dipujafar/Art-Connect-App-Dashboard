import { baseApi } from "./baseApi";

const profileAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfileData: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProfileDataQuery } = profileAPi;
