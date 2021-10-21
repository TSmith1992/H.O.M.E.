import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import Homepage from "./Homepage";
import ProfileEdit from "./ProfileEdit";
import Reviews from "./Reviews";
import Move from "./Move";
import UnitPage from "./UnitPage";
import LeaderMove from "./LeaderMove";
import React, { useState, useEffect } from "react";

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const history = useHistory();

  const handleLogout = () => {
    fetch(`/logout`, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        history.push("/login");
      }
    });
  };

  const [shelters, setShelters] = useState("");
  const [chosenMove, setChosenMove] = useState(false);

  useEffect(() => {
    fetch(`/shelters`)
      .then((r) => r.json())
      .then((r) => {
        setShelters(r);
      });
  }, []);

  // console.log("Current User,   ", currentUser);
  return (
    <div className="App">
      <nav className="topNav">
        <span className="spanNLinks">
          <NavLink to="/homepage">
            <button className="NavLinks">HomePage</button>
          </NavLink>
          <NavLink to="/profileedit">
            <button className="NavLinks">Edit Your Profile</button>
          </NavLink>
          <NavLink to="/reviews">
            <button className="NavLinks">Write/Read Reviews</button>
          </NavLink>
          {currentUser.origin_country ? (
            <NavLink to="/unitedit">
              <button className="NavLinks">Create Migrant Units</button>
            </NavLink>
          ) : (
            <></>
          )}
          {chosenMove ? (
            <></>
          ) : (
            <NavLink to="/sheltermove">
              <button className="NavLinks">Move Request(s)</button>
            </NavLink>
          )}
          {currentUser.review_score? (
            <NavLink to="/leadermove">
              <button className="NavLinks">Move Migrants</button>
            </NavLink>
          ) : (
            <></>
          )}
        </span>
        <br></br>
        <p></p>
        <span className="spanLogout">
          Logged in as... <img
          src={currentUser.picture}
          alt="Profile"
          width="25px"
          height="25px"
        /><strong>{currentUser.name}</strong>        
          <p></p>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </span>
      </nav>
      <Switch>
        <Route exact path="/homepage">
          <Homepage currentUser={currentUser} />
        </Route>
        <Route exact path="/profileedit">
          <ProfileEdit
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Route>
        <Route exact path="/reviews">
          <Reviews currentUser={currentUser} />
        </Route>
        <Route exact path="/unitedit">
          <UnitPage
            currentUser={currentUser}
            shelters={shelters}
            setChosenMove={setChosenMove}
          />
        </Route>
        <Route exact path="/sheltermove">
          <Move
            currentUser={currentUser}
            shelters={shelters}
            setChosenMove={setChosenMove}
          />
        </Route>
        <Route exact path="/leadermove">
          <LeaderMove
            currentUser={currentUser}
            shelters={shelters}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;
