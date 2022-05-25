import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cars: [],
};

const carsListSlice = createSlice({
  name: "cars-list",
  initialState,
  reducers: {
    fetchCars() {},

    updateAppData(state, action) {
      const { payload } = action;
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },

    clearAllData(state) {
      Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key];
      });
    },
  },
});

// internal actions without saga and triggered by saga

export const { fetchCars, updateAppData, clearAllData } = carsListSlice.actions;

export default carsListSlice.reducer;
