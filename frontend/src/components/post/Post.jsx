import { Link } from "react-router-dom";
import "./post.css";

export default function Post(props) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={props.img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
        </div>
        <span className="postTitle">
          {props.title}
        </span>
        <hr />
      </div>
      <p className="postDesc">
        {props.about}
      </p>
    </div>
  );
}
