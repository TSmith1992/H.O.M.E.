// import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import HPageLead from './HPageLead';
import HPageMigrant from './HPageMigrant'

function Homepage({ currentUser }) {
  return (
    <div>
        {currentUser.origin_country? 
        <HPageMigrant currentUser={currentUser}/>
        : <HPageLead currentUser={currentUser} /> }
    </div>
  );
}

export default Homepage;
