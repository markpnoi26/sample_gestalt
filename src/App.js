import { useState } from "react";
import { Box, Button, Pulsar } from "gestalt";
import "gestalt/dist/gestalt.css";

function App() {
  const [pulsarToggle, setPulsarToggle] = useState(false);
  return (
    <Box margin={2}>
      <Box>
        {pulsarToggle && <Pulsar size={50} />}
        <Button
          fullWidth
          color="red"
          text="Test Button"
          onClick={() => setPulsarToggle(!pulsarToggle)}
        />
      </Box>
    </Box>
  );
}

export default App;
