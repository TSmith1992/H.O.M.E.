import React, { useState } from "react";

import Button from "@mui/material/Button";

export default function LeaderMoveShelterButton({ shelter, currentUser, setRevealM, revealM }) {
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setRevealM(!revealM)}
      >
        {revealM ? (
          <>Hide Migrants in this shelter ❌</>
        ) : (
          <>See Migrants in this shelter 🧍</>
        )}
      </Button>
    </div>
  );
}
