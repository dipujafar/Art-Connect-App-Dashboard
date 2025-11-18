import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const settingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSettings: builder.query({
      query: () => ({
        url: "/settings",
        method: "GET",
      }),
      providesTags: [tagTypes.settings],
    }),
    updateSettings: builder.mutation({
      query: (data) => ({
        url: "/settings/update",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.settings],
    })
  }),
});

export const { useGetSettingsQuery, useUpdateSettingsMutation } = settingsApi;