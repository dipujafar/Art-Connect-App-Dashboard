import { baseApi } from "./baseApi";

const promotionAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPromotion: builder.mutation({
      query: (data) => ({
        url: "/promotion",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreatePromotionMutation } = promotionAPi;
