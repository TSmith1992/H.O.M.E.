import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import "../Styling/MyCSS.css";

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
    <div
      className="authForm"
      style={{
        color: 'black',
        backgroundImage: `url(${"https://www.bu.edu/files/2019/09/resized-iStock-1158476263.jpg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        fontWeight: "bold",
        textShadow:
          "0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow",
      }}
    >
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
          <Button
            type="submit"
            className="login"
            variant="contained"
            color="primary"
          >
            Enter Profile<p></p>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
              alt="American Flag"
              width="25px"
              height="15px"
            />
          </Button>
        </p>
        <p>-- or --</p>
        <Button variant="contained" color="secondary" className="TestLink">
          <Link to="/login" class="Links" style={{ color: "white" }}>
            Log In <p></p>
            <img
              src="https://www.pngfind.com/pngs/m/15-158073_apply-open-a-personal-account-icon-blue-member.png"
              alt="login"
              width="10px"
              height="10px"
            />
          </Link>
        </Button>
      </form>
    </div>
  );
}

export default Signup;
