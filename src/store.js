import { configureStore } from '@reduxjs/toolkit'
import activitiesAPI from './features/activitiesAPI'
import citiesAPI from './features/citiesAPI'
import itinerariesAPI from './features/itinerariesAPI.js'
import usersAPI from './features/usersAPI'

export default configureStore ({
    reducer: {
        [citiesAPI.reducerPath] : citiesAPI.reducer,
        [itinerariesAPI.reducerPath] : itinerariesAPI.reducer,
        [activitiesAPI.reducerPath] : activitiesAPI.reducer,
        [usersAPI.reducerPath] : usersAPI.reducer
    }
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     immutableCheck: false,
    //     serializableCheck: false
    // })
})