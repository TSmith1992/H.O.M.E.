import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";

export default function MProfileEdit({ currentUser, setCurrentUser }) {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");

  function keepCurrent(e) {
    alert(`I'll keep my ${e.target.name}!`);
    if (e.target.name === "password") {
      alert("For security reasons, please type in your password.");
      setPassword(currentUser.password);
    } else if (e.target.name === "password_confirmation") {
      alert("For security reasons, please type in your password.");
      setPasswordConfirmation(currentUser.password);
    } else if (e.target.name === "picture") {
      setPicture(currentUser.picture);
    } else if (e.target.name === "description") {
      setDescription(currentUser.description);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/migrants/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        password_confirmation: passwordConfirmation,
        picture: picture,
        description,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          history.push("/homepage");
        });
        alert("You have successfully updated your profile! ✅");
      } else {
        res.json().then((errors) => {
          // console.log(errors);
          setErrors(errors);
        });
      }
    });
  }
  return (
    <div className="authForm" style={{ color: "white" }}>
      <form onSubmit={handleSubmit}>
        <h1>
          Click the circle next to the editing space to keep your old data
        </h1>
        <br></br>
        <p>
          <label htmlFor="password">Change your Password here:</label>
          <br></br>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="radio"
            name="password"
            value="password"
            onChange={keepCurrent}
          ></input>
        </p>
        <p>
          <label htmlFor="password_confirmation">
            Confrim your changed password here:
          </label>
          <br></br>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <input
            type="radio"
            name="password confirmation"
            value="password_confirmation"
            onChange={keepCurrent}
          ></input>
        </p>
        <p>
          <label htmlFor="picture">Change Your Profile Picture here:</label>
          <br></br>
          <input
            type="picture"
            name="picture"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
          <input
            type="radio"
            name="picture"
            value="currentUser.picture"
            onChange={keepCurrent}
          ></input>
        </p>
        <p>
          <label htmlFor="description">
            What would you like others to know about you?
          </label>
          <br></br>
          <textarea
            type="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="radio"
            name="description"
            value="currentUser.description"
            onChange={keepCurrent}
          ></input>
        </p>
        <p>
          {errors ? (
            <>
              {errors.errors.map((error) => (
                <strong key={error}>
                  <li>{error}</li>
                </strong>
              ))}
            </>
          ) : (
            <></>
          )}
        </p>
        <p>
        <Button
            variant="contained"
            className="login"
            type="submit"
            color="secondary"
          >Confirm Changes 💾</Button>
        </p>
      </form>
    </div>
  );
}
