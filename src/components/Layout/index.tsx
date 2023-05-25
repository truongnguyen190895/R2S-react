import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { httpRequest } from "../../service";
import { useNavigate } from 'react-router-dom'

//generic typing

interface Post {
  id?: number;
  userId: string;
  title: string;
  body: string;
}

export const Layout = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true);
    httpRequest
      .get<Post[]>("posts", {
      })
      .then((response: any) => {
        setMessage(response.myCustomMessage)
        setPosts(response.data);
      })
      .catch((err) => {
        const errorCode = err.response.status
        console.log('errorCode: ', errorCode)
        if (errorCode === 404) {
          //redirect to not-found page
          navigate('/not-found')
        }
        // render toastify with message "server is down"
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onCreateNewPost = () => {
    const payload = {
      title: "foo",
      body: "bar",
      userId: 1,
    };
    setIsLoading(true);
    httpRequest
      .post("posts", payload, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      {isLoading ? (
        <div
          className="spinner-border m-5"
          role="status"
          style={{
            position: "fixed",
            top: "45%",
            left: "45%",
            opacity: "0.45",
          }}
        >
          <span className="sr-only">Loading...</span>
        </div>
      ) : null}
      <Header />
      <div style={{ padding: "10px" }}>
        <Outlet />
        {/* <h1>{message}</h1>
        {posts.length <= 0 ? (
          <p>No user</p>
        ) : (
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )} */}
      </div>
      {/* <section> */}
        {/* <label>User ID</label>
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
        <br /> */}
        {/* <button onClick={onCreateNewPost}>Create post</button> */}
      {/* </section> */}
    </div>
  );
};
