import Post from "../../components/Post";

import { Post as PostData } from "../../types/data";

import create from "../../assets/create.svg";
import style from "./home.module.css";

function Home() {
  const posts: PostData[] = [
    {
      id: 123,
      title: "Test",
      content:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      updated: new Date(),
    },
    {
      id: 1212,
      title: "Test",
      content:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      updated: new Date(),
    },
    {
      id: 4657,
      title: "Test",
      content:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      updated: new Date(),
    },
    {
      id: 23,
      title: "Test",
      content:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      updated: new Date(),
    },
  ];

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
            <Post post={post} />
          ))}
          <br />
          <div className="center">
            <small>End of thread</small>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
