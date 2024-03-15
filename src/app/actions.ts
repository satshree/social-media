import { Post } from "../types/data";

export enum ActionTypes {
  Modal = "MODAL",
  ModalMode = "MODAL_MODE",
  ModalContent = "MODAL_CONTENT",
  PostList = "POST_LIST",
}

export type ModalState = {
  open: true | false;
  mode: "add" | "edit";
  postToEdit: number;
};

export interface ModalAction {
  type: ActionTypes.Modal | ActionTypes.ModalMode | ActionTypes.ModalContent;
  payload: ModalState;
}

export interface PostListAction {
  type: ActionTypes.PostList;
  payload: Post[];
}

export const setModalMode = (mode: "add" | "edit") => ({
  type: ActionTypes.ModalMode,
  payload: mode,
});

export const toggleModal = (open: false | true) => ({
  type: ActionTypes.Modal,
  payload: open,
});

export const setModalPostID = (id: number) => ({
  type: ActionTypes.ModalContent,
  payload: id,
});

// export const setPostList = (posts: Post[]): PostListAction => ({
//   type: ActionTypes.PostList,
//   payload: posts,
// });
