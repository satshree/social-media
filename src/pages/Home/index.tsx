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
  const modal = useSelector((state: GlobalState) => state.modal);
  const posts = useSelector((state: GlobalState) => state.posts);

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

  const handleModalSubmit = (post: PostData) => {
    if (modal.mode === "add") {
      dispatch({
        type: ActionTypes.PostList,
        payload: [...posts, post],
      });
    } else {
      const newPostList = posts.map((p) => {
        if (p.id === post.id) return post;
        return p;
      });

      dispatch({
        type: ActionTypes.PostList,
        payload: newPostList,
      });
    }

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
        <PostForm
          post={modal.content}
          editMode={modal.mode === "edit"}
          onSubmit={handleModalSubmit}
        />
      </Modal>
    </div>
  );
}

export default Home;
