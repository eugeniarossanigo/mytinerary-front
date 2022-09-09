import { configureStore } from '@reduxjs/toolkit'
import activitiesAPI from './features/activitiesAPI'
import citiesAPI from './features/citiesAPI'
import itinerariesAPI from './features/itinerariesAPI.js'

export default configureStore ({
    reducer: {
        [citiesAPI.reducerPath] : citiesAPI.reducer,
        [itinerariesAPI.reducerPath] : itinerariesAPI.reducer,
        [activitiesAPI.reducerPath] : activitiesAPI.reducer
    }
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     immutableCheck: false,
    //     serializableCheck: false
    // })
})