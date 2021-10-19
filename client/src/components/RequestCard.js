import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

export default function RequestCard({ currentUser, request }) {
  const history = useHistory();

  function AcceptedMove(e) {
    e.preventDefault();
    fetch(`/migrant_shelters/${request.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        active: true,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          history.push("/homepage");
        });
        alert("Success!");
      } else {
        res.json().then((errors) => {
          console.log(errors);
        });
      }
    });
  }
  console.log("request information,", request);
  return (
    <div key={request.id}>
      <strong>Name of Migrant:</strong> {request.migrant.name}
      <br></br>
      <img
        src={request.migrant.picture}
        alt="Profile"
        width="300px"
        height="300px"
      />
      <br></br>
      <strong>Description:</strong> {request.migrant.description}
      <br></br>
      <strong>Requested Location:</strong> {request.shelter.name}
      <br></br>
      <img
        src={request.shelter.picture}
        alt="shelter"
        width="300px"
        height="300px"
      />
      <br></br>
      <strong>Description:</strong> {request.shelter.description}
      <br></br>
      <strong>Review Score of Place:</strong> {request.shelter.review_score}
      <br></br>
      <strong>Capacity:</strong> {request.shelter.capacity}
      <br></br>
      <button onClick={AcceptedMove}>Accept Move Request</button>
      <button>Reject Move Request</button>
    </div>
  );
}
