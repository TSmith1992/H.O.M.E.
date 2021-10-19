import React from "react";
import UnitPageM from "./UnitPageM";

export default function UnitPage({ currentUser }) {
  return (
    <div>
      <UnitPageM currentUser={currentUser} />
    </div>
  );
}
