import { useDispatch, useSelector } from "react-redux";
import { GlobalState, Post as PostData } from "../../types/data";

import Post from "../../components/Post";
import Modal from "../../components/Modal";

import create from "../../assets/create.svg";
import style from "./home.module.css";
import { ActionTypes } from "../../app/actions";
import PostForm from "../../components/PostForm";

function Home() {
  const dispatch = useDispatch();
  const { posts, modal } = useSelector((state: GlobalState) => state);

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
      {posts.length === 0 ? (
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
          {posts.map((post) => (
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
