import React, { useState, useEffect } from "react";

export default function UnitPageInUnit({ currentUser}) {
  const [deleteCon, setDeleteCon] = useState(false);
  const [personA, setPersonA] = useState({});
  const [personB, setPersonB] = useState({});
  const [personC, setPersonC] = useState({});

  useEffect(() => {
    fetch(`/migrants/${currentUser.unit.person_A}`)
      .then((r) => r.json())
      .then((data) => {
        setPersonA(data);
      });
    fetch(`/migrants/${currentUser.unit.person_B}`)
      .then((r) => r.json())
      .then((data) => {
        setPersonB(data);
      });
    fetch(`/migrants/${currentUser.unit.person_C}`)
      .then((r) => r.json())
      .then((data) => {
        setPersonC(data);
        console.log("Person C,", personC);
      });
  }, []);

  function deleteUnit(e) {
    e.preventDefault();
    fetch(`/units/${currentUser.unit.id}`, {
      method: "DELETE",
    });
    alert(
      `You have successfully disbanded this Unit. Now, both you and your previous Unit Members may request to move if you so choose.`
    );
    window.location.reload();
  }

  return (
    <div>
      Your Unit:
      <button onClick={() => setDeleteCon(!deleteCon)}>
        Click here disband your unit
      </button>
      {deleteCon ? (
        <span>
          Are you sure you would like to delete this Unit? Click the button
          below to confirm.
          <button onClick={deleteUnit}>Confirm Unit Disband</button>
        </span>
      ) : (
        <></>
      )}
      <div>
        <h1>
          {currentUser.name} <em>(Unit Lead)</em>
        </h1>
        <img
          src={currentUser.picture}
          alt="Profile"
          width="300px"
          height="300px"
        />
        <p>About you:</p>
        <h3>{currentUser.description}</h3>
        <p>Country Origin:</p>
        <h3>{currentUser.origin_country}</h3>
        <p>Shelter Location:</p>
        <h3>
          {currentUser.shelters[0].name}, {currentUser.shelters[0].address},
          {currentUser.shelters[0].state}
        </h3>
      </div>
      <div>
        <h1>
          {personA.name} <em>(Unit Member)</em>
        </h1>
        <img src={personA.picture} alt="Profile" width="300px" height="300px" />
        <p>About you:</p>
        <h3>{personA.description}</h3>
        <p>Country Origin:</p>
        <h3>{personA.origin_country}</h3>
        <p>Shelter Location:</p>
        <h3>
          {personA.shelters[0].name}, {personA.shelters[0].address},
          {personA.shelters[0].state}
        </h3>
      </div>
      <div>
        <h1>
          {personB.name} <em>(Unit Member)</em>
        </h1>
        <img src={personB.picture} alt="Profile" width="300px" height="300px" />
        <p>About you:</p>
        <h3>{personB.description}</h3>
        <p>Country Origin:</p>
        <h3>{personB.origin_country}</h3>
        <p>Shelter Location:</p>
        <h3>
          {personB.shelters[0].name}, {personB.shelters[0].address},
          {personB.shelters[0].state}
        </h3>
      </div>
      <div>
        <h1>
          {personC.name} <em>(Unit Member)</em>
        </h1>
        <img src={personC.picture} alt="Profile" width="300px" height="300px" />
        <p>About you:</p>
        <h3>{personC.description}</h3>
        <p>Country Origin:</p>
        <h3>{personC.origin_country}</h3>
        <p>Shelter Location:</p>
        <h3>
          {personC.shelters[0].name}, {personC.shelters[0].address},
          {personC.shelters[0].state}
        </h3>
      </div>
    </div>
  );
}
