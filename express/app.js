const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("../react-app/build"));

app.get("/", (req, res) => {
  res.sendFile("../react-app/build/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
