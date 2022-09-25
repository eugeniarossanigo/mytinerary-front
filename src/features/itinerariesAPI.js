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
        getItineraries: builder.mutation({
            query(id){
                return{
                    url: 'itineraries?city=' +id,
                    method: 'GET',
                }
            }
        }),
        getItineraryCity: builder.query({
            query: (city) => '/itineraries?city=' + city
        }),
        getItineraryUser: builder.mutation({
            query(id){
                return{
                    url: '/itineraries?user=' +id,
                    method: 'GET'
                }
            }
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
                    url: 'itineraries/' + itinerary.id,
                    method: 'PATCH',
                    body: itinerary
                }
            }
        }),
        getDeleteItinerary: builder.mutation({
            query(id){
                return{
                    url: 'itineraries/' + id,
                    method: 'DELETE'
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

export const { useGetItinerariesMutation, useGetDeleteItineraryMutation, useGetAllItinerariesQuery, useGetItineraryCityQuery, useGetItineraryUserMutation, useGetNewItineraryMutation, useGetPatchItineraryMutation, useGetItineraryIdQuery, useLikeDislikeMutation } = itinerariesAPI
