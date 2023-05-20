import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

interface Post {
  id?: number;
  userId: string;
  title: string;
  body: string;
}

export const Layout = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState<Post>({
    id: 10,
    userId: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    //fetch returns promise GET
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
      response.json().then((data) => setPosts(data));
    });
  }, []);

  const onCreateNewPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/10", {
      method: "DELETE",
    }).then((response) =>
      response
        .json()
        .then((data) => console.log("Create new post success ", data))
    );
  };

  return (
    <div>
      <Header />
      <div style={{ padding: "10px" }}>
        {/* <Outlet /> */}
        {posts.length <= 0 ? (
          <p>No user</p>
        ) : (
          <div>
            {posts.slice(0, 2).map((post) => (
              <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <section>
        <label>User ID</label>
        <input
          type="number"
          value={post?.userId}
          onChange={(e) =>
            setPost((prev) => ({ ...prev, userId: e.target.value }))
          }
        />
        <br />
        <label>Post body</label>
        <input
          type="text"
          value={post?.body}
          onChange={(e) =>
            setPost((prev) => ({ ...prev, body: e.target.value }))
          }
        />
        <br />
        <label>Post title</label>
        <input
          type="text"
          value={post?.title}
          onChange={(e) =>
            setPost((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <br />
        <button onClick={onCreateNewPost}>Delete post</button>
      </section>
    </div>
  );
};
