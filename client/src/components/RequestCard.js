import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

export default function RequestCard({ currentUser, request }) {
  const history = useHistory();
  const [rejectRequest, setRejectRequest] = useState(false);

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
          // history.push("/homepage");
          window.location.reload();
        });
        alert(
          "Success! You have accepted this move proposal. The migrant will be moved to the new shelter."
        );
      } else {
        res.json().then((errors) => {
          // console.log(errors);
        });
      }
    });
  }

  function RejectMove(e) {
    e.preventDefault();
    fetch(`/migrant_shelters/${request.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hidden: true,
      }),
    });
    setRejectRequest(true);
    alert(
      "You have rejected this move proposal. The migrant will stay in their current shelter."
    );
    window.location.reload();
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
      {rejectRequest || request.hidden ? (
        <></>
      ) : (
        <div
          key={request.id}
          className="authForm"
          style={{ width: "100%", textAlign: "center", color:'white' }}
        >
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
          <br></br>
          <strong>Requested Location:</strong> {request.shelter.name}
          <br></br><br></br>
          <img
            src={request.shelter.picture}
            alt="shelter"
            width="300px"
            height="300px"
          />
          <br></br><br></br>
          <strong>Description:</strong> {request.shelter.description}
          <br></br><br></br>
          <strong>Capacity:</strong> {request.shelter.capacity}
          <br></br><br></br>
          <Button
            variant="contained"
            className="login"
            color="primary"
            onClick={AcceptedMove}
          >
            Accept Move Request ✅
          </Button> {'        '}
          <Button
            variant="contained"
            className="login"
            color="secondary"
            onClick={RejectMove}
          >
            Reject Move Request ❌
          </Button>
        </div>
      )}
    </>
  );
}
