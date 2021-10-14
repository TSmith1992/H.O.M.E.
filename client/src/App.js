import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import SaveIcon from '@material-ui/icons/Save';

function App() {


  return (
    <div className="App">
      <Button 
      startIcon={<SaveIcon/>}
      variant="contained" 
      color="primary">I'm a Button </Button>
    </div>
  );
}

export default App;