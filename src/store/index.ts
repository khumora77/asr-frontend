import { configureStore } from "@reduxjs/toolkit";
import samsaReducer from "./slice/sliceSamsa";
import authReducer from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    samsas: samsaReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
