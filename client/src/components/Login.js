import React, { useState } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import Button from '@material-ui/core/Button'
// import LoginIcon from '@mui/icons-material/Login';
import '../Styling/MyCSS.css'

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
    <div className="authFormLogin">
      <Redirect to="/" />
      <form onSubmit={handleSubmit}>
        <h1>
          Welcome{" "}
          <strong>
            <em>H.O.M.E.</em>
          </strong>
          <p>
            <em>House of Migrants and Expats</em>
            <p></p>
            <p style={{'font-size': "15px", color: '#14132a'}}><em>...We hold these truths to be self-evident, that all men are created equal...</em></p>
          </p>
          Login
        </h1>
        <p>
          <label htmlFor="name">🕴️ Name:</label>
          <br></br>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">🔒 Password:</label>
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
          variant='contained' 
          className="login" 
          type="submit" 
          color="primary"
          // LoginIcon={<LoginIcon/>}
          >
            Log In
          </Button>
        </p>
        <p>-- or --</p>
        <Button 
          variant='contained'
          color="secondary"
          className="TestLink"
          >
          <Link to="/signup" style={{color: 'white'}}>
            Initiate Processing
          </Link>
        </Button>
      </form>
    </div>
  );
}

export default Login;
