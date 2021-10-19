import React, {useState, useEffect} from "react";
import UnitPageInUnit from "./UnitPageInUnit";
import UnitPageM from "./UnitPageM";
import UnitPageTree from "./UnitPageTree";

export default function UnitPage({ currentUser }) {

  return (
    <div>
      {currentUser.unit_member?<UnitPageTree currentUser={currentUser}/>:
      <UnitPageM currentUser={currentUser} />}
    </div>
  );
}
