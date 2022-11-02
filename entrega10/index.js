const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require("./routes/api/index");

app.use(express.json());

app.listen(PORT, () => {
  console.log("servidor corriendo en puerto:" + PORT);
});

app.use("/api", routes);

app.get("/", (req, res) => {
  res.redirect("/api/productos");
});