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
        getItineraryId: builder.query({
            query: (id) => '/itineraries/'+id
        }),
        getItineraryCity: builder.query({
            query: (city) => '/itineraries?city=' + city
        }),
        getItineraryUser: builder.query({
            query: (user) => '/itineraries?user=' + user
        }),
        getNewItinerary: builder.mutation({
            query(itinerary){
                return{
                    url: 'itineraries',
                    method: 'POST',
                    body: itinerary
                }
            }
        }),
        getPatchItinerary: builder.mutation({
            query(itinerary){
                return{
                    url:'itineraries',
                    method:'PUT',
                    body:itinerary
                }
            }
        })
    })
})

export default itinerariesAPI;
export const { useGetAllItinerariesQuery, useGetItineraryCityQuery, useGetItineraryUserQuery, useGetNewItineraryMutation, useGetPatchItineraryMutation, useGetItineraryIdQuery } = itinerariesAPI