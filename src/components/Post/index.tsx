import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit, FiTrash } from "react-icons/fi";

import Button from "../Button";

import { PostProp } from "./types";
import { GlobalState, Post as PostData } from "../../types/data";

import {
  ActionTypes,
  setModalMode,
  setModalPostID,
  toggleModal,
} from "../../app/actions";
import { parseTime } from "../../utils";

import style from "./post.module.css";

function Post(props: PostProp) {
  const post: PostData = props.post;
  const allPosts = useSelector((state: GlobalState) => state.posts);

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

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const newPostList = allPosts.filter((p) => p.id !== post.id);
      dispatch({
        type: ActionTypes.PostList,
        payload: newPostList,
      });
    }
  };

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
