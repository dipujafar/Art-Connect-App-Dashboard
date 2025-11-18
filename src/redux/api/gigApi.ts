import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const gigApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllGigs: build.query({
      query: () => ({
        url: "/gig/gigs",
        method: "GET",
      }),
      providesTags: [tagTypes.gigs],
    }),
  }),
});

export const { useGetAllGigsQuery } = gigApi;