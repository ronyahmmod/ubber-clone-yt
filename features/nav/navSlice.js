import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    nav: "",
  },
  reducers: {
    setNav: (state, action) => {
      state.nav = "";
    },
  },
});

export default navSlice.reducer;
