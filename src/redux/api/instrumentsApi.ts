import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const instrumentsAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllInstruments: build.query({
      query: () => ({
        url: "/instrument/instruments",
        method: "GET",
      }),
      providesTags: [tagTypes.instruments],
    }),
    createInstrument: build.mutation({
      query: (data) => ({
        url: "/instrument/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.instruments],
    }),
    updateInstrument: build.mutation({
      query: ({ id, data }) => ({
        url: `/instrument/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: [tagTypes.instruments],
    }),
    deleteInstrument: build.mutation({
      query: (id) => ({
        url: `/instrument/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.instruments],
    }),
  }),
});

export const {
  useGetAllInstrumentsQuery,
  useCreateInstrumentMutation,
  useUpdateInstrumentMutation,
  useDeleteInstrumentMutation,
} = instrumentsAPi;
