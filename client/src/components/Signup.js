import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function Signup({ setCurrentUser }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [hairStylePic, setHairStylePic] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        password_confirmation: passwordConfirmation,
        hairstyle_pic: hairStylePic,
        profile_pic: profilePic,
        description,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          history.push("/homepage");
        });
      } else {
        res.json().then((errors) => {
          console.log(errors);
          setErrors(errors);
        });
      }
    });
  }

  return (
    <div className="authForm">
      <form onSubmit={handleSubmit}>
        <h1>Client Sign Up Page</h1>
        <p>
          <label htmlFor="name">Name:</label>
          <br></br>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">Password:</label>
          <br></br>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <br></br>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="profile_pic">Profile Picture:</label>
          <br></br>
          <input
            type="profile_pic"
            name="profile_pic"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="hairstyle_pic">Preferred Hairstyle:</label>
          <br></br>
          <input
            type="hairstyle_pic"
            name="hairstyle_pic"
            value={hairStylePic}
            onChange={(e) => setHairStylePic(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="description">
            What would you like for your Stylist to know about you?
          </label>
          <br></br>
          <textarea
            type="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <p>
          {errors ? (
            <>
              {errors.errors.map((error) => (
                <strong key={error}>
                  <li style={{color: "red"}}>{error}</li>
                </strong>
              ))}
            </>
          ) : (
            <></>
          )}
        </p>
        <p>
          <button type="submit" className="login">Sign Up</button>
        </p>
        <p>-- or --</p>
        <button className="login">
          <Link to="/" class='Links'>Log In</Link>
          </button>
      </form>
    </div>
  );
}

export default Signup;
