import { createSlice } from "@reduxjs/toolkit";

export const humiditySlice = createSlice({
    name: 'humiditydata',
    initialState:{
        humidity: 0
    },
    reducers: {
        sethumidity: (state, action) => {
            state.humidity = action.payload
        },
    }
})

export const {sethumidity} = humiditySlice.actions

export default humiditySlice.reducer