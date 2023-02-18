import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice ({
    name: "user",
    initialState: {
        name : "",
        password: "",
        image: "",
    },
    reducers: {
        userAccount(state,action) {
            state.name = action.payload.name;
            state.password = action.payload.password;
            state.image = action.payload.image;
        }
    }
})
export const { userAccount } = userSlice.actions;
export default userSlice.reducer;