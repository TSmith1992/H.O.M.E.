import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

function Signup({ setCurrentUser, currentUser }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [picture, setPicture] = useState("");
  const [gender, setGender] = useState("male");
  const [birthdate, setBirthDate] = useState();
  const [description, setDescription] = useState("");
  const [originCountry, setOriginCountry] = useState("Afghanistan");
  const [errors, setErrors] = useState("");
  countries.registerLocale(enLocale);
  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !password ||
      !passwordConfirmation ||
      password !== passwordConfirmation
    ) {
      alert(
        "Please enter a password and make sure it is the same as your password confirmation"
      );
    } else {
      fetch("/migrants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
          password_confirmation: passwordConfirmation,
          gender: gender,
          picture: picture,
          description,
          birthdate: birthdate,
          origin_country: originCountry,
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
  }

  return (
    <div className="authForm">
      <form onSubmit={handleSubmit}>
        <h1>Migrant Account Creation Page</h1>
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
          <label htmlFor="picture">Profile Picture:</label>
          <br></br>
          <input
            type="picture"
            name="picture"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </p>
        <p></p>
        Please Choose a Gender Identity:
        <p></p>
        <select
          onChange={(e) => setGender(e.target.value)}
          required
          placeholder="Male"
          className="form-control"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-Binary">Non-Binary</option>
        </select>
        <p>
          <label htmlFor="birthdate">When were you born?</label>
          <br></br>
          <input
            type="date"
            name="birthdate"
            value={birthdate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </p>
        <label htmlFor="origin_country">Where were you born?</label>
        <br></br>
        <select
          style={{ width: "150px" }}
          value={originCountry}
          onChange={(e) => setOriginCountry(e.target.value)}
        >
          {!!countryArr?.length &&
            countryArr.map(({ label, value }) => (
              <option>{label}</option>
              // <key={value} value={value}>

              //   {label}
              // </>
            ))}
        </select>
        <p>
          <label htmlFor="description">
            What would you like for us to know about you?
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
                  <li style={{ color: "red" }}>{error}</li>
                </strong>
              ))}
            </>
          ) : (
            <></>
          )}
        </p>
        <p>
          <button type="submit" className="login">
            Sign Up
          </button>
        </p>
        <p>-- or --</p>
        <button className="login">
          <Link to="/login" class="Links">
            Log In
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Signup;
