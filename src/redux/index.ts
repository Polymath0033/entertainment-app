import { createSlice, configureStore } from "@reduxjs/toolkit";
import { data } from "../helpers/data";
const userSlice = createSlice({
  name: "user",
  initialState: { user: { email: "", image: "", name: "" } },
  reducers: {
    createUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const dataSlice = createSlice({
  name: "data",
  initialState: { data: data },
  reducers: {
    createData(state, action) {
      state.data = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export const store = configureStore({
  reducer: { user: userSlice.reducer, data: dataSlice.reducer },
});
