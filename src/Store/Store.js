import { configureStore } from "@reduxjs/toolkit";
import profilReducer from '../Features/profilSlice'

export default configureStore({
    reducer: {
        profil : profilReducer,
    },
})