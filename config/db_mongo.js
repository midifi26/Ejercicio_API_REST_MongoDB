const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/EJERCICIO_MONGO");

const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;