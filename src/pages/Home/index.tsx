import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState, Post as PostData } from "../../types/data";

import Post from "../../components/Post";
import Modal from "../../components/Modal";
import PostForm from "../../components/PostForm";

import create from "../../assets/create.svg";
import style from "./home.module.css";
import { ActionTypes, toggleModal } from "../../app/actions";
import { sortPostByDate } from "../../utils";

function Home() {
  const [allPosts, updatePost] = useState<PostData[]>([]);

  const dispatch = useDispatch();
  const modal = useSelector((state: GlobalState) => state.modal);
  const posts = useSelector((state: GlobalState) => state.posts);

  useEffect(() => updatePost(posts), [posts]);

  const getAllPosts = () => allPosts.sort(sortPostByDate);

  const getPost = (id: number) => {
    for (let p of allPosts) {
      if (id === p.id) return p;
    }

    return {
      id: 0,
      title: "",
      content: "",
      updated: new Date(),
    };
  };

  const closeModal = () => {
    dispatch(toggleModal(false));
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
          post={getPost(modal.postToEdit)}
          editMode={modal.mode === "edit"}
          onSubmit={handleModalSubmit}
        />
      </Modal>
    </div>
  );
}

export default Home;
