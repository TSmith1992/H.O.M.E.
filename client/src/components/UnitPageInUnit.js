import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export default function UnitPageInUnit({ currentUser }) {
  const history = useHistory();
  const [deleteCon, setDeleteCon] = useState(false);
  const [personA, setPersonA] = useState();
  const [personB, setPersonB] = useState();
  const [personC, setPersonC] = useState();

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
      `You have successfully disbanded this migrant unit. Now, both you and your previous migrant unit members may request to move if you so choose.`
    );
    window.location.reload();
  }

  return (
    <div>
      {personC && personA && personB ? (
        <div>
          <div
            style={{
              textAlign: "center",
              align: "center",
              right: "100px",
            }}
          >
            <Button
              variant="contained"
              className="login"
              color="secondary"
              onClick={() => setDeleteCon(!deleteCon)}
            >
              Click here disband your unit
            </Button>
          </div>
          {deleteCon ? (
            <div
              style={{
                border: "3px solid white",
                backgroundColor: "yellow",
                textShadow:
                  "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
                textAlign: "center",
                align: "center",
                right: "100px",
              }}
            >
              <br></br>
              <br></br>
              Are you sure you would like to delete this Unit? Click the button
              below to confirm.<br></br>
              <br></br>
              <Button
                variant="contained"
                className="login"
                type="submit"
                color="primary"
                style={{ backgroundColor: "red" }}
                onClick={deleteUnit}
              >
                Confirm Unit Disband ✖️
              </Button>
            </div>
          ) : (
            <></>
          )}
          <br></br>
          <br></br>
          <div className="cardsCenter">
            <Card sx={{ maxWidth: 1000 }}>
              <div className="card-container">
                <div class="float-layout">
                  <div class="card-image">
                    <img
                      src={currentUser.picture}
                      alt="Profile"
                      width="300px"
                      height="300px"
                    />
                    <div class="card">
                      <h1 class="card-title">
                        {currentUser.name}{" "}
                        <em
                          style={{
                            textShadow:
                              "0 0 1px red, 0 0 1px red, 0 0 1px red, 0 0 1px red",
                          }}
                        >
                          [Unit Lead]
                        </em>
                      </h1>
                      <div class="card-desc">
                        <p class="card-titles">About you:</p>
                        <h3>{currentUser.description}</h3>
                        <p class="card-titles">Country Origin:</p>
                        <h3>{currentUser.origin_country}</h3>
                        <p class="card-titles">Shelter Location:</p>
                        <h3>
                          {currentUser.shelters[0].name},{" "}
                          {currentUser.shelters[0].address},
                          {currentUser.shelters[0].state}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>{" "}
          <br></br>
          <br></br>
          <div className="container1">
            <div className="saloncard">
              <h1 style={{align: "center", textAlign: "center"}}>
                {personA.name}{" "}
                <em
                  style={{
                    textShadow:
                      "0 0 1px red, 0 0 1px red, 0 0 1px red, 0 0 1px red"
                  }}
                >
                  [Unit Member]
                </em>
              </h1>
              <div style={{align: "center", textAlign: "center"}}>
              <img
                src={personA.picture}
                alt="Profile"
                width="300px"
                height="300px"
              /></div>
              <p
                class="card-titles"
                style={{
                  textShadow:
                    "0 0 1px red, 0 0 1px red, 0 0 1px red, 0 0 1px red",
                }}
              >
                About you:
              </p>
              <h3>{personA.description}</h3>
              <p
                class="card-titles"
                style={{
                  textShadow:
                    "0 0 1px red, 0 0 1px red, 0 0 1px red, 0 0 1px red",
                }}
              >
                Country Origin:
              </p>
              <h3>{personA.origin_country}</h3>
              <p
                class="card-titles"
                style={{
                  textShadow:
                    "0 0 1px red, 0 0 1px red, 0 0 1px red, 0 0 1px red",
                }}
              >
                Shelter Location:
              </p>
              <h3>
                {personA.shelters[0].name}, {personA.shelters[0].address},
                {personA.shelters[0].state}
              </h3>
            </div>
            <br></br>
            <br></br>
            <div className="saloncard">
              <h1 style={{align: "center", textAlign: "center"}}>
                {personB.name}{" "}
                <em
                  style={{
                    textShadow:
                      "0 0 1px red, 0 0 1px red, 0 0 1px red, 0 0 1px red",
                  }}
                >
                  [Unit Member]
                </em>
              </h1>
              <div style={{align: "center", textAlign: "center"}}>
              <img
                src={personB.picture}
                alt="Profile"
                width="300px"
                height="300px"
              /></div>
              <p
                class="card-titles"
                style={{
                  textShadow:
                    "0 0 1px red, 0 0 1px red, 0 0 1px red, 0 0 1px red",
                }}
              >
                About you:
              </p>
              <h3>{personB.description}</h3>
              <p
                class="card-titles"
                style={{
                  textShadow:
                    "0 0 1px red, 0 0 1px red, 0 0 1px red, 0 0 1px red",
                }}
              >
                Country Origin:
              </p>
              <h3>{personB.origin_country}</h3>
              <p
                class="card-titles"
                style={{
                  textShadow:
                    "0 0 1px red, 0 0 1px red, 0 0 1px red, 0 0 1px red",
                }}
              >
                Shelter Location:
              </p>
              <h3>
                {personB.shelters[0].name}, {personB.shelters[0].address},
                {personB.shelters[0].state}
              </h3>
            </div>
            <br></br>
            <br></br>
            <div className="saloncard">
              <h1 style={{align: "center", textAlign: "center"}}>
                {personC.name}{" "}
                <em
                  style={{
                    textShadow:
                      "0 0 1px red, 0 0 1px red, 0 0 1px red, 0 0 1px red",
                  }}
                >
                  [Unit Member]
                </em>
              </h1>
              <div style={{align: "center", textAlign: "center"}}>
              <img
                src={personC.picture}
                alt="Profile"
                width="300px"
                height="300px"
              /></div>
              <p
                class="card-titles"
                style={{
                  textShadow:
                    "0 0 1px red, 0 0 1px red, 0 0 1px red, 0 0 1px red",
                }}
              >
                About you:
              </p>
              <h3>{personC.description}</h3>
              <p
                class="card-titles"
                style={{
                  textShadow:
                    "0 0 1px red, 0 0 1px red, 0 0 1px red, 0 0 1px red",
                }}
              >
                Country Origin:
              </p>
              <h3>{personC.origin_country}</h3>
              <p
                class="card-titles"
                style={{
                  textShadow:
                    "0 0 1px red, 0 0 1px red, 0 0 1px red, 0 0 1px red",
                }}
              >
                Shelter Location:
              </p>
              <h3>
                {personC.shelters[0].name}, {personC.shelters[0].address},
                {personC.shelters[0].state}
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
