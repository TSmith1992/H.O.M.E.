import React, {useState} from "react";
import LeaderMoveShelterButton from "./LeaderMoveShelterButton";
import Card from "@mui/material/Card";
import LeaderMoveMigrantButton from "./LeaderMoveMigrantButton";

export default function LeaderMoveShelter({ currentUser, shelter }) {
  const [revealM, setRevealM] = useState(false);
  return (
    <div className="cardsCenter">
      <Card sx={{ maxWidth: 1000 }}>
        <div className="card-container">
          <div class="float-layout">
            <div class="card-image">
              <img
                src={shelter.picture}
                alt="Profile"
                width="300px"
                height="300px"
                />
              <br></br>
              <div class="card">
                <h1 class="card-title">{shelter.name}</h1>
                <div class="card-desc" style={{ textAlign: "center" }}>
              {shelter.current_occupancy > shelter.capacity ? (
                <em>
                  This shelter is currently overpopulated. It is recommended
                  that you move migrants from this location to ease strain.
                </em>
              ) : (
                <></>
              )}
              <p class="card-titles">Address:</p>
              <h2>
                {shelter.address}, {shelter.state}
              </h2>
              <p class="card-titles">Rating:</p>
              <h2>{shelter.avg_rating_shelter}</h2>
              <p class="card-titles">Occupancy:</p>
              <h2>
                {shelter.current_occupancy}/{shelter.capacity}
              </h2>
              <h2>
                <em>{shelter.description}</em>
              </h2>
              <LeaderMoveShelterButton
                shelter={shelter}
                currentUser={currentUser}
                setRevealM={setRevealM}
                revealM={revealM}
                />
            </div></div>
            </div>
          </div>
        </div>
      </Card>
      {revealM ? (
        <>
        <h1 className="Title"           style={{
            textShadow:
              "0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow", textAlign: "center"
          }}>
        <em
        >
          This Shelter's Migrants
        </em>
      </h1><div className="container1">
          {currentUser.migrant_shelters
            .filter((local) => local.active)
            .filter((place) => place.shelter.name === shelter.name)
            .map((place) => (
              <div className="saloncard" style={{textAlign: 'center'}}>
                <strong>{place.migrant.name}</strong>
                <br></br>
                <img
                  src={place.migrant.picture}
                  alt="Profile"
                  width="300px"
                  height="300px"
                />
                <LeaderMoveMigrantButton
                  place={place}
                  currentUser={currentUser}
                  shelter={shelter}
                />
              </div>
            ))}</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
