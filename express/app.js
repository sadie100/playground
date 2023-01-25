const express = require("express");
const birds = require("./birds");
const app = express();
const port = 3000;

app.use(express.static("../react-app/build"));

app.use(birds);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
