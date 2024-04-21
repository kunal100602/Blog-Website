import { useState,useEffect } from "react";
import "./write.css";

export default function Write() {

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      'title': '',
      'about': '',
      'img':''
    })
  }, []);

  const reset = () => {
    setData({
      'title': '',
      'about': '',
      'img':''
    })
  }

  const handler = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value
      });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/blogs", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
    });
    reset();
    const result = await response.json();
  }

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            className="img"
            type="text"
            name="img"
            onChange={handler}
            placeholder="img url"
            autoFocus={true}
            value={data.img}
            required
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            name="title"
            onChange={handler}
            value={data.title}
            required
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            name="about"
            onChange={handler}
            value={data.about}
            required
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
