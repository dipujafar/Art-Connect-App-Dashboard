import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const gigApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllGigs: build.query({
      query: (queries) => ({
        url: "/gig/gigs",
        method: "GET",
        params: queries,
      }),
      providesTags: [tagTypes.gigs],
    }),
  }),
});

export const { useGetAllGigsQuery } = gigApi;
