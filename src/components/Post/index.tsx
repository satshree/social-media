import { useEffect, useState } from "react";

import Button from "../Button";

import { PostProp } from "./types";
import { parseTime } from "../../utils";

import style from "./post.module.css";

function Post(props: PostProp) {
  const [title, updateTitle] = useState("");
  const [content, updateContent] = useState("");
  const [updated, updateUpdatedDate] = useState<Date>(new Date());

  useEffect(() => {
    const { post } = props;

    updateTitle(post.title);
    updateContent(post.content);
    updateUpdatedDate(post.updated);
  }, [props.post]);

  return (
    <div className={style.post}>
      <div className={style.header}>
        <div className={style.title}>
          {title}
          <div className={style.meta}>You posted at {parseTime(updated)}</div>
        </div>
        <div className={style["btn-group"]}>
          <Button style={{ marginRight: "0.5rem" }}>Edit</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </div>
      <div className={style.content}>{content}</div>
    </div>
  );
}

export default Post;
