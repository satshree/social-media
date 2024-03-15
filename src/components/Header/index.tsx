import Button from "../Button";
import style from "./header.module.css";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.title}>Social Media App</div>
      <div>
        <Button>Create Post</Button>
      </div>
    </div>
  );
}

export default Header;
