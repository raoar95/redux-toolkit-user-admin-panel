import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../action";

const getTodoLocalStorageData = () => {
  let myUserData = localStorage.getItem("myUserData");

  if (!myUserData) {
    return [];
  } else {
    return JSON.parse(myUserData);
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: getTodoLocalStorageData(),
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      state.splice(action.payload, 1);
    },
    // clearAllUsers(state, action) {
    //     return [];
    // },
  },
  extraReducers(builders) {
    builders.addCase(clearAllUsers, () => {
      return [];
    });
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions;
