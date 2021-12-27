import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: "" };


// Create a slice of the state that we can use to keep track of our user
export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => {
            state.value = initialStateValue;
        },
    },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;



