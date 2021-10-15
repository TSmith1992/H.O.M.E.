import React, { useState } from "react";
import {useHistory} from "react-router-dom"

export default function ShelterEdit({shelter}) {
    const history = useHistory();
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState("");

    console.log('shelter, ', shelter)
    
    function keepCurrent(e) {
      alert(`This shelter will keep its ${e.target.name}!`);
      if (e.target.name === "name"){
          setName(shelter.name)
      }else if (e.target.name === "picture"){
          setPicture(shelter.picture)
      }else if (e.target.name === "description"){
          setDescription(shelter.description)
      }
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch(`/shelters/${shelter.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          picture: picture,
          description,
        }),
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
              history.push('/homepage')
            });
            alert("Your shelter has been updated with new information!")
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
            <br></br>
            <img
            src={shelter.picture}
            alt="Profile"
            width="300px"
            height="300px"
          />
          <p>
            <label htmlFor="name">Change Your Shelter Name here:</label><br></br>
            <input
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="checkbox"
              name="name"
              value="currentUser.name"
              onChange={keepCurrent}
            ></input>
          </p>
          <p>
            <label htmlFor="picture">Change Your Shelter Picture here:</label><br></br>
            <input
              type="picture"
              name="picture"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
            />
            <input
              type="checkbox"
              name="picture"
              value="picture"
              onChange={keepCurrent}
            ></input>
          </p>
          <p>
            <label htmlFor="description">
              What would you like others to know about this shelter?
            </label><br></br>
            <p></p>
            <textarea
              type="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="checkbox"
              name="description"
              value="description"
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
            <button type="submit">Confirm Changes</button>
          </p>
        </form>
        </div>
        )
}
