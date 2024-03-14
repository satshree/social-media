import { FormEvent, useState } from "react";

import Button from "../Button";
import Input from "../Input";
import Textarea from "../Textarea";

import { CreatePostProps } from "./types";
import { Post } from "../../types/data";

import style from "./create.module.css";

function CreatePost(props: CreatePostProps) {
  const [title, updateTitle] = useState("");
  const [content, updateContent] = useState("");

  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const handleTitleChange = (v: string) => {
    if (titleError) setTitleError("");
    updateTitle(v);
  };
  const handleContentChange = (v: string) => {
    if (contentError) setContentError("");
    updateContent(v);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let proceed = true;

    if (title === "") {
      setTitleError("Title is required!");
      proceed = false;
    }

    if (content === "") {
      setContentError("Content is required!");
      proceed = false;
    }

    if (proceed && props.onSubmit) {
      const post: Post = {
        title,
        content,
      };

      props.onSubmit(post);

      updateTitle("");
      updateContent("");
    }
  };

  return (
    <form className={style.box} onSubmit={handleSubmit}>
      <Input
        label="Title"
        placeholder="Post Title ..."
        value={title}
        onChange={handleTitleChange}
        error={titleError !== ""}
        errorText={titleError}
      />
      <Textarea
        label="Content"
        placeholder="Post Content ..."
        value={content}
        onChange={handleContentChange}
        error={contentError !== ""}
        errorText={contentError}
      />
      <div className={style["btn-box"]}>
        <Button type="submit">Post</Button>
      </div>
    </form>
  );
}

export default CreatePost;
