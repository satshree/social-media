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
    content: {
      id: number;
      title: string;
      content: string;
      updated: Date;
    };
  };
  posts: Post[];
}
