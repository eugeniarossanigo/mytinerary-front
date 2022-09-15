import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const itinerariesAPI = createApi({
    reducerPath: "itinerariesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),
    endpoints: (builder) => ({
        getAllItineraries: builder.query({
            query: () => '/itineraries'
        }),
        getItineraryCity: builder.query({
            query: (city) => '/itineraries?city=' + city
        }),
        getItineraryUser: builder.query({
            query: (user) => '/itineraries?user=' + user
        })
    })
})

export default itinerariesAPI;
export const { useGetAllItinerariesQuery, useGetItineraryCityQuery, useGetItineraryUserQuery } = itinerariesAPI