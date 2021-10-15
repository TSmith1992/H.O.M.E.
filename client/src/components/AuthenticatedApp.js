
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import Homepage from "./Homepage";
import ProfileEdit from "./ProfileEdit";

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

  console.log('Current User,   ', currentUser)
  return (
    <div className="App">
      <nav className='topNav'>
        <span className="spanNLinks">
          <NavLink to="/homepage"><button className='NavLinks'>HomePage</button></NavLink>
          <NavLink to="/profileedit"><button className='NavLinks'>Edit Your Profile</button></NavLink>
          <NavLink to="/reviews"><button className='NavLinks'>Write/Read Reviews</button></NavLink>
          <NavLink to="/unitedit"><button className='NavLinks'>Create Units</button></NavLink>
          <NavLink to="/sheltermove"><button className='NavLinks'>Move Request(s)</button></NavLink>
        </span><br></br><p></p>
        <span className="spanLogout">
          Logged in as...<strong>{currentUser.name}</strong><p></p>
          <button className='logout' onClick={handleLogout}>Logout</button>
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
        {/* 
        <Route exact path="/pastappt">
          <PastAppointmentTree currentUser={currentUser} />
        </Route>
        <Route exact path="/pendappt">
          <PendingAppointments currentUser={currentUser} />
        </Route>
        <Route exact path="/bookappt">
          <BookAppointment currentUser={currentUser} />
        </Route> */}
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;
