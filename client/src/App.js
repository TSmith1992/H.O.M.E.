import React, { useState, useEffect } from "react";
import AuthenticatedApp from "./components/AuthenticatedApp";
import LoginTree from "./components/LoginTree";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          if (user) {
            setCurrentUser(user);
            setAuthChecked(true);
          } else {
            setCurrentUser(user);
            setAuthChecked(true);
          }
        });
      } else {
        setAuthChecked(true);
      }
    });
  }, []);

  if (!authChecked) {
    return <div></div>;
  }
  return (
    <div className="App">
     <Router>
      {currentUser ? (
        <AuthenticatedApp
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
        />
      ) : (
        <LoginTree setCurrentUser={setCurrentUser} />
      )}
    </Router>
    </div>
  );
}

export default App;