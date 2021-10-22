import React from "react";
import Card from "@mui/material/Card";

export default function HPageShelter({ shelter }) {
  // console.log('shelter, ', shelter)
  return (
    <Card sx={{ maxWidth: 500 }} style={{ backgroundColor: "palevioletred" }}>
      <div className="card-container" style={{ textAlign: "center", border:'none' }}>
        <div class="float-layout">
          <h1 style={{ textAlign: "center" }}>{shelter.name}</h1>
          <div class="card-image" style={{ justifyContent: "center" }}>
            <img
              src={shelter.picture}
              alt="Profile"
              width="300px"
              height="300px"
            />
          </div>
          <br></br>
          <div>
            {shelter.current_occupancy > shelter.capacity ? (
              <em>
                This shelter is currently overpopulated. You may not accept new
                migrants here until there is sufficient space
              </em>
            ) : (
              <></>
            )}
            <h2>
              <em>{shelter.description}</em>
            </h2>
            <p>Address:</p>
            <h2>
              {shelter.address}, {shelter.state}
            </h2>
            <p>Rating:</p>
            <h2>{shelter.avg_rating_shelter}</h2>
            <p>Occupancy:</p>
            <h2>
              {shelter.current_occupancy}/{shelter.capacity}
            </h2>
          </div>
        </div>
      </div>
    </Card>
  );
}
