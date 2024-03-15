import { FormEvent, useEffect, useState } from "react";

import Button from "../Button";
import Input from "../Input";
import Textarea from "../Textarea";

import { PostFormProps } from "./types";
import { Post } from "../../types/data";

import style from "./form.module.css";

function PostForm(props: PostFormProps) {
  const [title, updateTitle] = useState("");
  const [content, updateContent] = useState("");

  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  useEffect(() => {
    if (props.post) {
      updateTitle(props.post.title || "");
      updateContent(props.post.content || "");
    }
  }, [props.post]); // mount data for editing

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
        id: props.post.id || Math.floor(Math.random() * 1000),
        title,
        content,
        updated: new Date(),
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
        <Button variant="success" type="submit">
          {props.editMode ? "Save Changes" : "Post"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
