import React from "react";
import UnitPageInUnit from "./UnitPageInUnit";

export default function UnitPageTree({ currentUser}) {
  return (
    <div>
      {currentUser.unit_leader ? (
        <UnitPageInUnit
          currentUser={currentUser}
        />
      ) : (
        <>Please consult with your Unit leader about changes to your Unit</>
      )}
    </div>
  );
}
