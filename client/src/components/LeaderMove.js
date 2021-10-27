import React from "react";
import LeaderMoveShelter from "./LeaderMoveShelter";

export default function LeaderMove({ currentUser, shelters }) {
  return (
    <div>
      <h3
        className="Title"
        style={{
          textShadow:
            "0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow, 0 0 1px yellow",
          textAlign: "center",
        }}
      >
        <em>
          As a Shelter Lead, you may move migrants to different shelters you
          manage in order to ease capacity for certain shelters.
        </em>
      </h3>
      {currentUser.shelters.map((shelter) => (
        <LeaderMoveShelter
          key={shelter.name}
          shelter={shelter}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
}
