import { createSlice } from "@reduxjs/toolkit";

export const profilSlice = createSlice({
    name: 'profil',
    initialState:{
        email: 'null',
        password: 'null',
        emplacement: 'Paris'
    },
    reducers: {
        setemail: (state, action) => {
            state.email = action.payload
        },
        setpassword: (state, action) => {
            state.password = action.payload
        },
        setemplacement: (state, action) => {
            state.emplacement = action.payload
        }
    }
})

export const {setemail, setpassword, setemplacement} = profilSlice.actions

export default profilSlice.reducer