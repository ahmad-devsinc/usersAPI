import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducer";
export default configureStore({
  reducer: {
    data: counterSlice
  }
});
