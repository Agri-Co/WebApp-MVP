import { createSlice } from "@reduxjs/toolkit";

export const profilSlice = createSlice({
    name: 'profil',
    initialState:{
        email: 'null',
        password: 'null',
    },
    reducers: {
        setemail: (state, action) => {
            state.email = action.payload
        },
        setpassword: (state, action) => {
            state.password = action.payload
        },
    }
})

export const {setemail, setpassword} = profilSlice.actions

export default profilSlice.reducer