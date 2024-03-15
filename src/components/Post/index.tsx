import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FiEdit, FiTrash } from "react-icons/fi";

import Button from "../Button";

import { PostProp } from "./types";
import { Post as PostData } from "../../types/data";

import { setModalMode, setModalPostID, toggleModal } from "../../app/actions";
import { parseTime } from "../../utils";

import style from "./post.module.css";

function Post(props: PostProp) {
  const post: PostData = props.post;

  const dispatch = useDispatch();

  const [title, updateTitle] = useState("");
  const [content, updateContent] = useState("");
  const [updated, updateUpdatedDate] = useState<Date>(new Date());

  useEffect(() => {
    updateTitle(post.title);
    updateContent(post.content);
    updateUpdatedDate(post.updated);
  }, [props.post]);

  const handleEdit = () => {
    dispatch(setModalMode("edit"));
    dispatch(setModalPostID(post.id));
    dispatch(toggleModal(true));
  };

  const handleDelete = () => {};

  return (
    <div className={style.post}>
      <div className={style.header}>
        <div className={style.title}>
          {title}
          <div className={style.meta}>You posted at {parseTime(updated)}</div>
        </div>
        <div className={style["btn-group"]}>
          <Button ghost={true} onClick={handleEdit}>
            <FiEdit />
          </Button>
          <Button variant="danger" ghost={true} onClick={handleDelete}>
            <FiTrash />
          </Button>
        </div>
      </div>
      <div className={style.content}>{content}</div>
    </div>
  );
}

export default Post;
