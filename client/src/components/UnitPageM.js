import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";

export default function UnitPageM({ currentUser }) {
  const history = useHistory();
  const [unitLead, setUnitLead] = useState();
  const [personA, setPersonA] = useState();
  const [personB, setPersonB] = useState();
  const [personC, setPersonC] = useState();
  const [errors, setErrors] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/units", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        migrant_id: currentUser.id,
        person_A: parseInt(personA),
        person_B: parseInt(personB),
        person_C: parseInt(personC),
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          window.location.reload();
        });
        alert("Success! You are now leader of a unit!");
      } else {
        res.json().then((errors) => {
          console.log(errors);
          setErrors(errors);
        });
      }
    });
  }

  return (
    <div>
      <br></br>
      <div
        style={{
          textShadow:
            "0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow",
          textAlign: "center",
        }}
      >
        {" "}
        <strong>
          {" "}
          <em>
            On this page, you can create or disband a migrant unit group. Only
            unit leaders may disband a unit. You may only form a unit of four(4)
            members. Remember: Being in a unit means you CANNOT be moved to a
            new shelter.
          </em>
        </strong>
      </div>
      <br></br>
      <form
        onSubmit={handleSubmit}
        className="authForm"
        style={{
          color: "yellow",
          border: "2px solid yellow",
          width: "50em",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <br></br>
        <p>
          <label htmlFor="unitLead">
            Your Unit ID is below. As Unit lead, you may disband a created unit:
          </label>
          <br></br>
          <br></br>
          <input
            type="unitLead"
            name="unitLead"
            value={currentUser.id}
            onChange={(e) => setUnitLead(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="personA">
            Write the Unit ID of the second person in your Unit:
          </label>
          <br></br>
          <br></br>
          <input
            type="input"
            name="personA"
            value={personA}
            onChange={(e) => setPersonA(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="personB">
            Write the Unit ID of the third person in your Unit:
          </label>
          <br></br>
          <br></br>
          <input
            type="personB"
            name="personB"
            value={personB}
            onChange={(e) => setPersonB(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="personC">
            Write the Unit ID of the fourth person in your Unit:
          </label>
          <br></br>
          <br></br>
          <input
            type="personC"
            name="personC"
            value={personC}
            onChange={(e) => setPersonC(e.target.value)}
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
        <Button
          variant="contained"
          className="login"
          type="submit"
          color="secondary"
        >
          Confirm Changes 💾
        </Button>
      </form>
    </div>
  );
}
