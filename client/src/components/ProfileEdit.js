import React from "react";
import MProfileEdit from './MProfileEdit';
import LProfileEdit from './LProfileEdit'

export default function ProfileEdit({ currentUser, setCurrentUser }) {
  return (
    <div>
      {currentUser.origin_country ? (
        <MProfileEdit
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      ) : (
        <LProfileEdit
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
    </div>
  );
}
