import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const activitiesAPI = createApi({
    reducerPath: "activitiesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),
    
    endpoints: (builder) => ({
        getAllActivities: builder.query({
            query: () => '/activities'
        }),
        getActivityItinerary: builder.query({
            query: (itinerary) => '/activities?itinerary='+itinerary
        })
    })
})

export default activitiesAPI;
export const { useGetAllActivitiesQuery, useGetActivityItineraryQuery } = activitiesAPI