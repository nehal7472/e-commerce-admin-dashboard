import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: localStorage.getItem("theme") === "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      const mode = state.darkMode ? "dark" : "light";
      document.documentElement.classList.toggle("dark", state.darkMode);
      localStorage.setItem("theme", mode);
    },
    setTheme: (state, action) => {
      state.darkMode = action.payload === "dark";
      document.documentElement.classList.toggle("dark", state.darkMode);
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
