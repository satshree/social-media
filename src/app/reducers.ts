import { Post } from "../types/data";
import { ActionTypes, ModalAction, PostListAction } from "./actions";

const initialModalState = {
  open: false,
  mode: "add",
  postToEdit: 0,
};

const initialPostListState: Post[] = [];

export const modalReducer = (
  state = initialModalState,
  action: ModalAction
) => {
  switch (action.type) {
    case ActionTypes.Modal:
      return {
        ...state,
        open: action.payload,
      };
    case ActionTypes.ModalMode:
      return {
        ...state,
        mode: action.payload,
      };
    case ActionTypes.ModalContent:
      return {
        ...state,
        postToEdit: action.payload,
      };
    default:
      return state;
  }
};

export const postReducer = (
  state = initialPostListState,
  action: PostListAction
) => {
  switch (action.type) {
    case ActionTypes.PostList:
      return action.payload;
    default:
      return state;
  }
};
