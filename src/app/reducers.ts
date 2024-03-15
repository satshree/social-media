import { Post } from "../types/data";
import {
  ActionTypes,
  ModalContentAction,
  ModalModeAction,
  PostListAction,
} from "./actions";

const initialModalState = {
  open: false,
  mode: "add",
  content: {
    id: 0,
    title: "",
    content: "",
    updated: new Date(),
  },
};
const initialPostListState: Post[] = [];

export const modalReducer = (
  state = { initialModalState },
  action: ModalModeAction | ModalContentAction
) => {
  switch (action.type) {
    case ActionTypes.ModalMode:
      return { ...state, ...action.payload };
    case ActionTypes.ModalContent:
      return { ...state, content: action.payload };
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
