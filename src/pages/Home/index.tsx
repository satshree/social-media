import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState, Post as PostData } from "../../types/data";

import Post from "../../components/Post";
import Modal from "../../components/Modal";

import create from "../../assets/create.svg";
import style from "./home.module.css";
import { ActionTypes } from "../../app/actions";
import PostForm from "../../components/PostForm";
import { sortPostByDate } from "../../utils";

function Home() {
  const [allPosts, updatePost] = useState<PostData[]>([]);

  const dispatch = useDispatch();
  const { posts, modal } = useSelector((state: GlobalState) => state);

  useEffect(() => updatePost(posts), [posts]);

  const getAllPosts = () => allPosts.sort(sortPostByDate);

  const closeModal = () => {
    dispatch({
      type: ActionTypes.ModalMode,
      payload: {
        mode: "add",
        open: false,
      },
    });

    dispatch({
      type: ActionTypes.ModalContent,
      payload: {
        id: 0,
        title: "",
        content: "",
        updated: new Date(),
      },
    }); // clear out
  };

  const addNewPost = (post: PostData) => {
    dispatch({
      type: ActionTypes.PostList,
      payload: [...posts, post],
    });

    closeModal();
  };

  return (
    <div className={style["home-page"]}>
      {allPosts.length === 0 ? (
        <div className={style.empty}>
          <img
            className={style["create-img"]}
            src={create}
            alt="create new post"
          />
          <br />
          <br />
          Add a new post
        </div>
      ) : (
        <>
          {getAllPosts().map((post) => (
            <Post key={post.id} post={post} />
          ))}
          <br />
          <div className="center">
            <small>End of thread</small>
          </div>
        </>
      )}

      <Modal isOpen={modal.open} onClose={closeModal}>
        <PostForm post={modal.content} onSubmit={addNewPost} />
      </Modal>
    </div>
  );
}

export default Home;
