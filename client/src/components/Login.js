import React, { useState } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import "../Styling/MyCSS.css";

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
    <div
      className="authFormLogin"
      style={{
        textShadow:
          "0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow",
      }}
    >
      <Redirect to="/" />
      <form onSubmit={handleSubmit}>
        <h1>
          Welcome{" "}
          <div>
          <strong>
            <em style={{ fontSize: '100px', color:'white',         textShadow:
          "0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black" }}>H.O.M.E.</em>
          </strong></div>
          <p>
            <em>House of Migrants and Expats</em>
            <p></p>
            <p style={{ "font-size": "15px", color: "#14132a" }}>
              <em>
                ...We hold these truths to be self-evident, that all men are
                created equal...
              </em>
            </p>
          </p>
          Login
        </h1>
        <p>
          <label htmlFor="name" style={{ "font-size": "25px", color: "black" }}>
            🔠 Name:
          </label>
          <br></br>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label
            htmlFor="password"
            style={{ "font-size": "25px", color: "black" }}
          >
            🔒 Password:
          </label>
          <br></br>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <Button
            variant="contained"
            className="login"
            type="submit"
            color="primary"
          >
            <p></p>
            <img
              src="https://www.pngfind.com/pngs/m/15-158073_apply-open-a-personal-account-icon-blue-member.png"
              alt="login"
              width="20px"
              height="20px"
            />{" "}
            Log In
          </Button>
        </p>
        <p>-- or --</p>
        <Button variant="contained" color="secondary" className="TestLink">
          <Link to="/signup" style={{ color: "white" }}>
            Initiate Processing
          </Link>
        </Button>
      </form>
    </div>
  );
}

export default Login;
