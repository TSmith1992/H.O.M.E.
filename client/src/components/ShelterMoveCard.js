import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function ShelterMoveCard({
  currentUser,
  shelter,
  setChosenMove,
}) {
  const history = useHistory();

  function RequestChange(e) {
    if (currentUser.shelters[0].id === shelter.id) {
      alert(
        "Hmmm...Something isn't right. Make sure you don't already live in that shelter, or that you haven't already requested a move."
      );
      window.location.reload();
    } else {
      e.preventDefault();
      fetch("/migrant_shelters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          migrant_id: currentUser.id,
          shelter_id: shelter.id,
        }),
      }).then((res) => {
        res.json().then((user) => {
          alert(
            `Thanks! We'll let the lead know, and if accepted, you will be moved to ${shelter.name}.`
          );
          history.push("/homepage");
          setChosenMove(true);
        });
      });
    }
  }

  return (
    <div key={shelter.id}>
      <h1>{shelter.name}</h1>
      <h2>
        <strong>Lead:</strong> {shelter.lead.name}
      </h2>
      <img src={shelter.picture} alt="shelter" width="300px" height="300px" />
      <p>Address:</p>
      <h2>
        {shelter.address}, {shelter.state}
      </h2>
      <h2>
        <em>{shelter.description}</em>
      </h2>
      <p>Rating:</p>
      <h2>{shelter.avg_rating_shelter}</h2>
      <p>Occupancy:</p>
      <h2>
        {shelter.current_occupancy}/{shelter.capacity}
      </h2>
      {shelter.current_occupancy > shelter.capacity ? (
        <strong>
          This shelter is currently above capacity. No new migrants may be moved
          here.
        </strong>
      ) : (
        <button onClick={RequestChange}>
          Click here to request this place to move
        </button>
      )}
    </div>
  );
}
