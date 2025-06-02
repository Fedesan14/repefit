import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignupRequest } from "../types/request/SignupRequest";

export const authService = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.BACKEND_URL}/auth` }),
    endpoints: (build) => ({
        Signup: build.mutation<void, SignupRequest>({
            query: (request) => ({
                url: '/signup',
                method: 'POST',
                body: request,
                timeout: 20
            })
        })
    })
})

export const { useSignupMutation } = authService