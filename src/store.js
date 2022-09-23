import { configureStore } from '@reduxjs/toolkit'
import activitiesAPI from './features/activitiesAPI'
import citiesAPI from './features/citiesAPI'
import commentsAPI from './features/commentsAPI'
import itinerariesAPI from './features/itinerariesAPI.js'
import usersAPI from './features/usersAPI'
import userReducer from './features/userSlice'
import reloadSlice from './features/reloadSlice'

export default configureStore ({
    reducer: {
        [citiesAPI.reducerPath] : citiesAPI.reducer,
        [itinerariesAPI.reducerPath] : itinerariesAPI.reducer,
        [activitiesAPI.reducerPath] : activitiesAPI.reducer,
        [usersAPI.reducerPath] : usersAPI.reducer,
        [commentsAPI.reducerPath] : commentsAPI.reducer,
        auth: userReducer,
        reload: reloadSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    })
})