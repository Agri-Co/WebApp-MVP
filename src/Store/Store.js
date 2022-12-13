import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/counterSlice'
import profilReducer from '../Features/profilSlice'

export default configureStore({
    reducer: {
        profil : profilReducer,
    },
})