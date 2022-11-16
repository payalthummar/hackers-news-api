import "./Navbar.css";
import icon from "../H.TEAL.png";
import { useEffect, useState } from "react";

export default function Navbar({ posts, setPosts }) {
  const [input, setInput] = useState("");

  const searchIUrl = `http://hn.algolia.com/api/v1/search?query=${input}`;

  function searchFunction() {
    fetch(searchIUrl)
      .then((res) => res.json())
      .then((data) => console.log("data", data.hits))
      .catch((e) => console.error(e));
  }
  useEffect(() => {
    searchFunction();
  }, [input]);
  function submitHandler(e) {
    e.preventDefault();
  }
  function changeHandler(e) {
    setInput(e.target.value);
  }

  return (
    <div className="navbar">
      <a href="top" className="ahrefIcon">
        <img src={icon} alt="H Icon" className="icon" />
      </a>
      <h4>
        <a href="top" className="ahrefHN">
          Hacker News
        </a>
      </h4>
      <form className="search" onSubmit={submitHandler}>
        <input
          className="search-input"
          type="text"
          size="18"
          placeholder="Search"
          onChange={changeHandler}
          value={input}
        />
        <button type="submit">Search</button>
      </form>
      <ul className="navbar-list">
        <li className="liElement">new</li>
        <p>|</p>
        <li>past</li>
        <p>|</p>
        <li>comments</li>
        <p>|</p>
        <li>ask</li>
        <p>|</p>
        <li>show</li>
        <p>|</p>
        <li>jobs</li>
      </ul>
      <div>{input}</div>
    </div>
  );
}
