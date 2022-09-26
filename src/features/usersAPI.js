import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../api';

export const usersAPI = createApi({
    reducerPath: "usersAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => '/auth'
        }),
        getUserMail: builder.query({
            query: (mail) => '/auth?mail='+mail
        }),
        getUserId: builder.query({
            query: (id) => '/auth/'+id
        }),
        getNewUser: builder.mutation({
            query: (user) => ({
                url: '/auth/signup',
                method: 'POST',
                body: user
            })
        }),
        getUserLogin: builder.mutation({
            query: (user) => ({
                url: '/auth/signin',
                method: 'POST',
                body: user
            })
        }),
        getUserLoginToken: builder.mutation({
            query: () => ({
                url: '/auth/token',
                method: 'GET',
                headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
            })
        }),
        getUserLogout: builder.mutation({
            query: (user) => ({
                url: '/auth/signout',
                method: 'POST',
                body: user
            })
        })
    })
})

export default usersAPI;
export const { useGetAllUsersQuery, useGetUserMailQuery, useGetUserIdQuery, useGetNewUserMutation, useGetUserLoginTokenMutation, useGetUserLoginMutation, useGetUserLogoutMutation } = usersAPI