const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World2!");
});

// Start the server
const PORT = 4000; 
app.listen(PORT, () => {
  console.log(`Service-2 is running on http://localhost:${PORT}`);
});
