import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage(props) {
  const location = useLocation();
  console.log(location);
  const data = JSON.parse(localStorage.getItem('username'));
  console.log(data);
  return (
    <>
      <Header name={ props.name} />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
