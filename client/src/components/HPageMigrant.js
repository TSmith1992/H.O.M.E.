import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export default function HPageMigrant({ currentUser }) {
  return (
    <div>
      <div className="cardsCenter">
        <h3 className="Title">
          <em>
            Find on this page some general information about you, your shelter,
            and shelter lead!
          </em>
        </h3>
        <Card sx={{ maxWidth: 1000 }}>
          <div className="card-container">
            <div class="float-layout">
              <div class="card-image">
                <img
                  src={currentUser.picture}
                  alt="Profile"
                  width="600px"
                  height="300px"
                />
                <div class="card">
                  <div class="card-title">{currentUser.name}</div>
                  <div class="card-desc">
                    <p class="card-titles">About you:</p>
                    <h3>{currentUser.description}</h3>
                    <p class="card-titles">Country of Origin:</p>
                    <h3>{currentUser.origin_country}</h3>
                    <p class="card-titles">Birthdate:</p>
                    <h3>{currentUser.birthdate}</h3>
                    <p class="card-titles">Unit Code ID:</p>
                    <h3>{currentUser.id}</h3>
                    <h3>
                      {currentUser.unit_member || currentUser.unit ? (
                        <>You are currently part of a migrant unit </>
                      ) : (
                        <>
                          You are currently <strong>NOT</strong> part of a
                          migrant unit
                        </>
                      )}
                    </h3>
                    <Button
                      variant="contained"
                      className="login"
                      color="secondary"
                    >
                      <Link to="/unitedit" style={{ color: "white" }}>
                        Click hear to go to the migrant unit page 🤝
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <br></br>
      <div class="container">
        <Card sx={{ maxWidth: 500 }}>
          <div className="card-container">
            <div class="float-layout">
              <div
                class="card-image"
                style={{ height: "620px", width: "500px", align: "center" }}
              >
                <img src={currentUser.lead_info.picture} alt="Shelter Lead" />
                <div class="card" style={{ backgroundColor: "palevioletred" }}>
                  <div class="card-title" style={{ color: "black" }}>
                    <h3 style={{ color: "black" }}>
                      <em>Shelter Lead:</em>
                    </h3>{" "}
                    {currentUser.lead_info.name}
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Button
                    variant="contained"
                    className="login"
                    color="secondary"
                  >
                    <Link to="/reviews" style={{ color: "white" }}>
                      Read more about {currentUser.lead_info.name} 📖
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card sx={{ maxWidth: 1000 }}>
          <div className="card-container">
            <div class="float-layout">
              <div class="card-image">
                <img
                  src={currentUser.shelters[0].picture}
                  alt="Shelter"
                  style={{ width: "500px" }}
                />
                <div class="card" style={{ backgroundColor: "palevioletred" }}>
                  <div class="card-title" style={{ color: "black" }}>
                    <h3>
                      <em>Shelter:</em> {currentUser.shelters[0].name}
                    </h3>
                    <p class="card-titles">Address:</p>
                    <h3>{currentUser.shelters[0].address}</h3>
                    <p class="card-titles">State:</p>
                    <h3>{currentUser.shelters[0].state}</h3>
                    <p class="card-titles">Shelter Score:</p>
                    <h3>{currentUser.shelters[0].avg_rating_shelter}</h3>
                    <Button
                      variant="contained"
                      className="login"
                      color="secondary"
                    >
                      <Link to="/reviews" style={{ color: "white" }}>
                        Read more about {currentUser.shelters[0].name} 🏠
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
