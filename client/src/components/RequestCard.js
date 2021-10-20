import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

export default function RequestCard({ currentUser, request }) {
  const history = useHistory();
  const [rejectRequest, setRejectRequest] = useState(false)

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
          window.location.reload();
        });
        alert("Success!");
      } else {
        res.json().then((errors) => {
          console.log(errors);
        });
      }
    });
  }

  function RejectMove(e){
    e.preventDefault();
    fetch(`/migrant_shelters/${request.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hidden: true,
      }),
    })
    setRejectRequest(true)
    alert("You have rejected this move proposal. The migrant will stay in their current shelter.")
    // e.preventDefault();
    // fetch(`/migrant_shelters/${request.id}`, {
    //   method: "DELETE"
    // })
    // .then((res) => res.json())
    // .then(data => console.log(data));
    // alert("You have rejected this move proposal. The migrant will stay in their current shelter.")
    // history.push("/homepage");
    // window.location.reload();
  }
  console.log("request information,", request);
  return (
    <>
    {rejectRequest || request.hidden? <></>:<div key={request.id}>
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
    <strong>Capacity:</strong> {request.shelter.capacity}
    <br></br>
    <button onClick={AcceptedMove}>Accept Move Request</button>
    <button onClick={RejectMove}>Reject Move Request</button>
  </div>}</>
  );
}
