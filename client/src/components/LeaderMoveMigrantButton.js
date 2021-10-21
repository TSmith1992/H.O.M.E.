import React, { useState } from "react";
import LeaderMoveMigrantAccept from "./LeaderMoveMigrantAccept";

export default function LeaderMoveMigrantButton({
  place,
  currentUser,
  shelter,
}) {
  const [revealS, setRevealS] = useState(false);
  return (
    <div>
      <button onClick={() => setRevealS(!revealS)}>Show Move Options</button>
      {revealS ? (
        currentUser.shelters
          .filter((s) => s.name !== place.shelter.name)
          .map((location) => (
            <div>
              Move options are below:
              <div>
                {location.name}
                <br></br>
                <img
                  src={location.picture}
                  alt="Profile"
                  width="300px"
                  height="300px"
                />
                <br></br>
                {location.current_occupancy > location.capacity ? (
                  <em>
                    This shelter is currently overpopulated. You may not accept
                    new migrants here until there is sufficient space
                  </em>
                ) : (
                  <LeaderMoveMigrantAccept location={location} place={place}/>
                )}
              </div>
            </div>
          ))
      ) : (
        <></>
      )}
    </div>
  );
}
