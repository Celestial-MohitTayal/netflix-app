import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    mostPopularVideos: null,
  },
  reducers: {
    addVideos: (state, action) => {
      state.mostPopularVideos = action.payload;
    },
    removeVideos: (state, action) => {
      return null;
    },
  },
});

export const { addVideos } = movieSlice.actions;
export default movieSlice.reducer;
