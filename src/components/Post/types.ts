import { BasicProps } from "../../types";
import { Post } from "../../types/data";

export type PostProp = BasicProps & {
  post: Post;
  editClick?: (post: Post) => {};
  deleteClick?: (id: number) => {};
};
