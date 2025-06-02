import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignupRequest } from "../types/request/SignupRequest";

console.log(`URL IS ${process.env.EXPO_PUBLIC_BACKEND_URL}/auth`)

export const authService = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth` }),
    endpoints: (build) => ({
        Signup: build.mutation<void, SignupRequest>({
            query: (request) => ({
                url: '/signup',
                method: 'POST',
                body: request,
                timeout: 2000
            })
        })
    })
})

export const { useSignupMutation } = authService