import { BasicProps } from "../../types";
import { Post } from "../../types/data";

export type PostFormProps = BasicProps & {
  post?: Post;
  onSubmit?: (post: Post) => void;
};
