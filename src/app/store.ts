import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { modalReducer, postReducer } from "./reducers";

const rootReducer = combineReducers({
  modal: modalReducer,
  post: postReducer,
});

export default configureStore({
  reducer: rootReducer,
});
