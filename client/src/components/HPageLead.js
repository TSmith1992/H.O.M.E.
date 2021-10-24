import React from "react";
import { Link } from "react-router-dom";
import HPageShelter from "./HPageShelter";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export default function HPageLead({ currentUser }) {
  return (
    <div>
      <div className="cardsCenter">
        <h3 className="Title">
          <em
            style={{
              textShadow:
                "0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow",
            }}
          >
            Find on this page some general information about you and the
            shelters you manage.
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
                    <p class="card-titles">Average Rating:</p>
                    <h3>{currentUser.avg_rating_lead}</h3>
                    <Button variant="contained" color="secondary">
                      <Link to="/reviews" style={{ color: "white" }}>
                        Read Your Reviews Here 📖
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
      <h1
        style={{
          textAlign: "center",
          textShadow:
            "0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow",
        }}
      >
        Your Shelters:
      </h1>
      <br></br>
      <div class="container1">
        {currentUser.shelters.map((shelter) => (
          <HPageShelter key={shelter.name} shelter={shelter} />
        ))}
      </div>
    </div>
  );
}
