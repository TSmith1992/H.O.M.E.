import React, { useState } from "react";
import LeaderMoveMigrantButton from "./LeaderMoveMigrantButton";

export default function LeaderMoveShelterButton({ shelter, currentUser }) {
  const [revealM, setRevealM] = useState(false);
  return (
    <div>
      <button onClick={() => setRevealM(!revealM)}>
        See Migrants in this shelter
      </button>
      {revealM ? (
        <>
          {currentUser.migrant_shelters
          .filter(local => local.active)
            .filter((place) => place.shelter.name === shelter.name)
            .map((place) => (
              <div>
                {place.migrant.name}
                <br></br>
                <img
                  src={place.migrant.picture}
                  alt="Profile"
                  width="300px"
                  height="300px"
                />
                <LeaderMoveMigrantButton place={place} currentUser={currentUser} shelter={shelter} />
              </div>
            ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
