import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const metaData  = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getStatData: builder.query({
            query: () => ({
                url: "/meta/counts",
                method: "GET",
            }),
            providesTags: [tagTypes.meta],
        }),
        userChartData: builder.query({
            query: (queries) => ({
                url: "/meta/user-chart-data",
                method: "GET",
                params: queries
            }),
            providesTags: [tagTypes.meta],
        })
    }),
});
export const {useGetStatDataQuery, useUserChartDataQuery} = metaData