import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const musicTypeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMusicType: builder.query({
      query: () => ({
        url: "/music-type",
        method: "GET",
      }),
      providesTags: [tagTypes.musicType],
    }),
    createMusicType: builder.mutation({
      query: (data) => ({
        url: "/music-type/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.musicType],
    }),
    updateMusicType: builder.mutation({
      query: ({ id, data }) => ({
        url: `/music-type/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.musicType],
    }),
    deleteMusicType: builder.mutation({
      query: (id) => ({
        url: `/music-type/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.musicType],
    }),
  }),
});

export const { useGetMusicTypeQuery, useCreateMusicTypeMutation, useUpdateMusicTypeMutation, useDeleteMusicTypeMutation } =
  musicTypeApi;
