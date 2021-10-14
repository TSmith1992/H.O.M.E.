import React, { useState } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";

function Login({ setCurrentUser }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          history.push("/homepage");
        });
      } else {
        res.json().then((errors) => {
          alert(`${errors.error}`);
        });
      }
    });
  };
  return (
    <div className="authForm">
      <Redirect to="/" />
      <form onSubmit={handleSubmit}>
        <h1>
          Welcome{' '} 
          <strong>
            <em>H.O.M.E.</em>
          </strong>
          <p>
            <em>House of Migrants and Expats</em>
          </p>
          Log In
        </h1>
        <p>
          <label htmlFor="name">🕴️Name:🕴️</label>
          <br></br>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">🤫Password:🤫</label>
          <br></br>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <button className="login" type="submit">
            Log In
          </button>
        </p>
        <p>-- or --</p>
        <button className="login">
          <Link to="/signup" class="Links">
            Sign Up
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Login;
