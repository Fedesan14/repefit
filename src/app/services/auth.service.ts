import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignupRequest } from "../types/request/SignupRequest";
import { LoginResponse } from '../types/responses/LoginResponse';

export const authService = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth`, timeout: 2000 }),
    endpoints: (build) => ({
        Signup: build.mutation<void, SignupRequest>({
            query: (request) => ({
                url: '/signup',
                method: 'POST',
                body: request,
            })
        }),
        Signin: build.mutation<LoginResponse, string>({
            query: (credentials) => ({
                url: '/sign-in',
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${credentials}`
                }
            })
        })
    })
})

export const { useSignupMutation, useSigninMutation } = authService