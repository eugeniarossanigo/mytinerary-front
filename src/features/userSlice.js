import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        _id: null,
        photo: null,
        role: null,
        logged: false
    },
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload
            state._id = action.payload.id
            state.role = action.payload.role
            state.photo = action.payload.photo
            state.logged = true
        },
        deleteCredentials: (state, action) => {
            state.user = null
            state._id = null
            state.role = null
            state.photo = null
            state.logged = false
        }
    }
})

export const { setCredentials, deleteCredentials } = userSlice.actions
export default userSlice.reducer