const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://pancho_uy:Lambare_1960@cluster0.dcuxt5d.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on("open", () => {
  console.log("Connectado a MongoDB");
});

mongoose.connection.on("error", () => {
  console.log("Error al conectar a MongoDB");
});
