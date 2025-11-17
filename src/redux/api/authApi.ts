import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
   
    login: build.mutation({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.auth],
    }),
    forgetPassword: build.mutation({
      query: (data) => ({
        url: "/auth/forget-password",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.auth],
    }),
    verifyOtp: build.mutation({
      query: (data) => ({
        url: "/auth/verify-account",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.auth],
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.auth],
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.auth],
    })
  }),
});

export const {
  useLoginMutation,
  useForgetPasswordMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useChangePasswordMutation
} = authApi;
