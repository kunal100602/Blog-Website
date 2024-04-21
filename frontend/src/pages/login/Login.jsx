import "./login.css";
import { useState,useEffect } from "react";

export default function Login(props) {
  const [data, setData] = useState({});
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("http://localhost:5000/show", {
        method: "GET",
      });
      const result = await response.json();
      setUser(result);
    };
    getUser();
  }, []);

  const handler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =  (e) => {
      e.preventDefault();
        let flag = false;
        user.map((val, key) => {
          if ((data.email == val.email) && (data.password == val.password)) {
            flag = true;
            props.setName(val.username);
          }
        });
       if (flag) {
          window.location.pathname = "/posts";
        } else window.alert("Password or Email invalid");
    } 
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." name="email" onChange={handler} />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." name="password" onChange={handler} />
        <button className="loginButton" type="submit">Login</button>
      </form>
      <button className="loginRegisterButton" onClick={() => {
        window.location.pathname = '/register';
        }}>Register</button>
    </div>
  );
}
