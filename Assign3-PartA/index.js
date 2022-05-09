const express = require("express");
const app = express();
const PORT = 3000;
const hostname = "localhost"; //local host

// app.get("/", (req, res) => {
//   res.sendFile("./website/home.html", { root: __dirname });
// });

app.use(express.static("website"));

app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
