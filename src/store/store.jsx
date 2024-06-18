import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice"

const Store = configureStore({
    reducer: {
        users: userSlice,
    }
})

export default Store;