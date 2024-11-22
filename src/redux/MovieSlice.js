import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: null,
  reducers: {
    addVideos: (state, action) => {
      return action.payload;
    },
    removeVideos: (state, action) => {
      return null
    },
  },
});

export const { addVideos, removeVideos } = movieSlice.actions;
export default movieSlice.reducer;
