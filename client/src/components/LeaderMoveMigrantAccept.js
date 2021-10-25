import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";

export default function LeaderMoveMigrantAccept({ location, place }) {
  const history = useHistory();
  const [errors, setErrors] = useState();

  // console.log("the location to move,", location);
  // console.log("the place to leave,", place);

  function MoveMigrant(e) {
    e.preventDefault();
    fetch(`/migrant_shelters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        migrant_id: place.migrant.id,
        shelter_id: location.id,
        active: true,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          fetch(`/migrant_shelters/${place.id}`, {
            method: "DELETE",
          });
          window.location.reload();
          history.push("/homepage");
        });
        alert(`Success! You have moved the migrant to a new shelter!`);
      } else {
        res.json().then((errors) => {
          // console.log(errors);
          setErrors(errors);
        });
      }
    });
  }
  return (
    <div>
      <Button variant="contained" color="primary" onClick={MoveMigrant}>
        Move Migrant to this location ✅
      </Button>
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
    </div>
  );
}
