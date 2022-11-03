const { Schema, model } = require("mongoose");
const carritoSchema = new Schema({
  timestamp: {
    type: Number, // si uso  DATE no respeta el timestamp
    required: true,
  },
  productos: {
    type: String,
  },
});

module.exports = model("Cart", carritoSchema);
