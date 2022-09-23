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
        getItineraries: builder.mutation({
            query(){
                return{
                    url: 'itineraries',
                    method: 'GET',
                }
            }
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
        likeDislike: builder.mutation({
            query: (id) => ({
                url: '/itineraries/likes/' + id,
                method: 'PATCH',
                headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
            })
        })
    })
})

export default itinerariesAPI;
export const { useGetItinerariesMutation, useGetAllItinerariesQuery, useGetItineraryCityQuery, useGetItineraryUserQuery, useGetNewItineraryMutation, useLikeDislikeMutation } = itinerariesAPI