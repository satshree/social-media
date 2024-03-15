import { Post } from "../types/data";

export enum ActionTypes {
  ModalMode = "MODAL_MODE",
  ModalContent = "MODAL_CONTENT",
  PostList = "POST_LIST",
}

export interface ModalModeAction {
  type: ActionTypes.ModalMode;
  payload: {
    open: true | false;
    mode: "add" | "edit";
  };
}

export interface ModalContentAction {
  type: ActionTypes.ModalContent;
  payload: Post;
}

export interface PostListAction {
  type: ActionTypes.PostList;
  payload: Post[];
}

export const setModalMode = (mode: {
  open: true | false;
  mode: "add" | "edit";
}): ModalModeAction => ({
  type: ActionTypes.ModalMode,
  payload: mode,
});

export const setModalContent = (post: Post): ModalContentAction => ({
  type: ActionTypes.ModalContent,
  payload: post,
});

export const setPostList = (posts: Post[]): PostListAction => ({
  type: ActionTypes.PostList,
  payload: posts,
});
