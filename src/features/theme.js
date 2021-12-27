import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";


// Create a slice of the state that we can use to keep track of our user
export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValue },
    reducers: {
        darkMode: (state, action) => {
            state.value = action.payload;
        },

      
    },
});

export const { darkMode } = themeSlice.actions;

export default themeSlice.reducer;