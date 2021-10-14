import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <div className="App">
      <Button>I'm a Button </Button>
      <h1>Page Count:</h1>
    </div>
  );
}

export default App;