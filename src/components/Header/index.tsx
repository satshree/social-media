import { useDispatch } from "react-redux";

import { ActionTypes } from "../../app/actions";

import Button from "../Button";

import style from "./header.module.css";

function Header() {
  const dispatch = useDispatch();

  const handleCreatePost = () => {
    dispatch({
      type: ActionTypes.ModalContent,
      payload: {
        id: 0,
        title: "",
        content: "",
        updated: new Date(),
      },
    });

    dispatch({
      type: ActionTypes.ModalMode,
      payload: {
        mode: "add",
        open: true,
      },
    });
  };

  return (
    <div className={style.header}>
      <div className={style.title}>Social Media App</div>
      <div>
        <Button onClick={handleCreatePost}>Create Post</Button>
      </div>
    </div>
  );
}

export default Header;
