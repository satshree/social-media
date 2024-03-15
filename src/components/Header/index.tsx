import { useDispatch } from "react-redux";

import { toggleModal, setModalMode, setModalPostID } from "../../app/actions";

import Button from "../Button";

import style from "./header.module.css";

function Header() {
  const dispatch = useDispatch();

  const handleCreatePost = () => {
    dispatch(setModalPostID(0));
    dispatch(setModalMode("add"));
    dispatch(toggleModal(true));
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
