import "./register.css"
import { useState,useEffect } from "react";

export default function Register() {
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

  const handleSubmit = async (e) => {
      e.preventDefault();
        let flag = true;
        user.map((val, key) => {
          if ((data.email === val.email) || (data.username === val.username)) flag = false;
        });
        if (flag) {
          const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          });
            const result = await response.json();
            console.log(result);
            window.location.pathname = "/login";
        } else window.alert("Username or Email already registered");
    } 
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." name="username" onChange={handler} />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." name="email" onChange={handler} />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." name="password" onChange={handler}/>
        <button type="submit" className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton" onClick={() => {
          window.location.pathname = '/login';
        }}>Login</button>
    </div>
    )
}
