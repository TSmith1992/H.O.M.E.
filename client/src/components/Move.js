import React from "react";
import MoveM from "./MoveM";
import MoveL from "./MoveL";

export default function Move({ currentUser, shelters, setChosenMove }) {
  return (
    <div>
      {currentUser.lead_info ? (
        <MoveM
          currentUser={currentUser}
          shelters={shelters}
          setChosenMove={setChosenMove}
        />
      ) : (
        <MoveL currentUser={currentUser} />
      )}
    </div>
  );
}
