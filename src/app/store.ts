import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { modalReducer, postReducer } from "./reducers";

const rootReducer = combineReducers({
  modal: modalReducer,
  posts: postReducer,
});

export default configureStore({
  reducer: rootReducer,
});
