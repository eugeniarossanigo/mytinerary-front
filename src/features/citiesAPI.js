import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../api';

export const citiesAPI = createApi({
    reducerPath: "citiesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: () => '/cities'
        }),
        getCityId: builder.query({
            query: (id) => '/cities/'+id
        }),
        getCityName: builder.query({
            query: (city) => '/cities?city='+city
        }),
        getNewCity: builder.mutation({
            query(city){
                return{
                    url: 'cities',
                    method: 'POST',
                    body: city
                }
            }
        }),
    })
})

export default citiesAPI;
export const { useGetAllCitiesQuery, useGetCityNameQuery, useGetCityIdQuery, useGetNewCityMutation } = citiesAPI