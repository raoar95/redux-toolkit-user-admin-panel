import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../action";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        deleteUser(state, action) {
            state.splice(action.payload, 1)
        },
        // clearAllUsers(state, action) {
        //     return [];
        // },
    },
    extraReducers(builders){
        builders.addCase(clearAllUsers, () => {
            return [];
        }); 
    }
});

export default userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions