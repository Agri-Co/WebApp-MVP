import { createSlice } from "@reduxjs/toolkit";

export const wateringSlice = createSlice({
    name: 'wateringdata',
    initialState: {
        watering: 0
    },
    reducers: {
        setwatering: (state, action) => {
            state.watering = action.payload
        },
    }
})

export const {setwatering} = wateringSlice.actions

export default wateringSlice.reducer