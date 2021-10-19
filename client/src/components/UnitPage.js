import React, {useState, useEffect} from "react";
import UnitPageInUnit from "./UnitPageInUnit";
import UnitPageM from "./UnitPageM";
import UnitPageTree from "./UnitPageTree";

export default function UnitPage({ currentUser }) {
  const [personA, setPersonA] = useState({});
  const [personB, setPersonB] = useState({});
  const [personC, setPersonC] = useState({});

  useEffect(() => {
    fetch(`/migrants/${currentUser.unit.person_A}`)
      .then((r) => r.json())
      .then((data) => {
        setPersonA(data);
      });
    fetch(`/migrants/${currentUser.unit.person_B}`)
      .then((r) => r.json())
      .then((data) => {
        setPersonB(data);
      });
    fetch(`/migrants/${currentUser.unit.person_C}`)
      .then((r) => r.json())
      .then((data) => {
        setPersonC(data);
        console.log("Person C,", personC);
      });
  }, []);
  return (
    <div>
      {currentUser.unit_member?<UnitPageTree personA={personA} personB={personB} personC={personC} currentUser={currentUser}/>:
      <UnitPageM currentUser={currentUser} />}
    </div>
  );
}
