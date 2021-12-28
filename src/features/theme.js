import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the state that we can use to keep track of our user
export const themeSlice = createSlice({
    name: "theme",
    initialState: { darkMode: false, fontColor: "black" },
    reducers: {
        darkMode: (state, action) => {
            return {
                ...state,
                darkMode: action.payload,
            };
        },
        fontColor: (state, action) => {
            return {
                ...state,
                fontColor: action.payload,
            };
        },
    },
});

export const { darkMode, fontColor } = themeSlice.actions;

export default themeSlice.reducer;