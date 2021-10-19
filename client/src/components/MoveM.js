import React from "react";
import NoUnitMove from "./NoUnitMove";
import UnitMove from "./UnitMove";

export default function MoveM({ currentUser, shelters, setChosenMove }) {
  return (
    <div>
      {currentUser.unit_member != true ? (
        <NoUnitMove
          shelters={shelters}
          setChosenMove={setChosenMove}
          currentUser={currentUser}
        />
      ) : (
        <UnitMove currentUser={currentUser} setChosenMove={setChosenMove} />
      )}
    </div>
  );
}
