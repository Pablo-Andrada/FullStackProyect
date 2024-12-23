require("dotenv").config();
//  const mongoose = require("mongoose");


// const dbCon = async () => {
//     await mongoose.connect(process.env.MONGO_URI);
//  };
 
//  module.exports = dbCon;
require('dotenv').config();

const mongoose = require("mongoose");

const dbCon = async () => {
  try {
    console.log("Intentando conectar con la URI:", process.env.MONGO_URI); // Para verificar
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    throw error;
  }
};

module.exports = dbCon;

