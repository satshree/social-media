import { BasicProps } from "../../types";
import { Post } from "../../types/data";

export type CreatePostProps = BasicProps & {
  onSubmit?: (post: Post) => void;
};
