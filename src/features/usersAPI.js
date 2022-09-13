import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersAPI = createApi({
    reducerPath: "usersAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),
    
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => '/auth'
        }),
        getUserId: builder.query({
            query: (id) => '/auth/'+id
        }),
        getNewUser: builder.mutation({
            query: (user) => ({
                url: 'auth/signup',
                method: 'POST',
                body: user
            })
        })
    })
})

export default usersAPI;
export const { useGetAllUsersQuery, useGetUserIdQuery, useGetNewUserMutation } = usersAPI