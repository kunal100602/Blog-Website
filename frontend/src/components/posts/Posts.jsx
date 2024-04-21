import Post from "../post/Post";
import "./posts.css";
import { useState,useEffect } from "react";

export default function Posts() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("http://localhost:5000/blogs", {
        method: "GET",
      });
      const result = await response.json();
      setUser(result);
    };
    getUser();
  }, []);

  return (
    <div className="posts">
      {
        user.map((val, key) => {
          return (
            <Post key={key} title={val.title} about={val.about} img={val.img} />
          )
        })
      }
    </div>
  );
}
