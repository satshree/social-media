import { BasicProps } from "../../types";
import { Post } from "../../types/data";

export type PostFormProps = BasicProps & {
  post: Post;
  editMode?: true | false;
  onSubmit?: (post: Post) => void;
};
