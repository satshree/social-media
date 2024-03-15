export interface Post {
  id: number;
  title: string;
  content: string;
  updated: Date;
}

export interface GlobalState {
  modal: {
    open: true | false;
    mode: "add" | "edit";
    postToEdit: number;
  };
  posts: Post[];
}
