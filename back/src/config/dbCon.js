 require("dotenv").config();
 //const mongoose = require("mongoose");


// const dbCon = async () => {
//     await mongoose.connect(process.env.MONGO_URI);
//  };
 
//  module.exports = dbCon;

// require("dotenv").config();
// const mongoose = require("mongoose");

// const dbCon = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Conexión exitosa a la base de datos");
//     } catch (error) {
//         console.error("Error al conectar a la base de datos", error);
//         throw error; // Lanzar el error para que sea manejado en el lugar donde se llama la función
//     }
// };

// module.exports = dbCon;
const mongoose = require('mongoose');

const dbCon = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error("La variable de entorno MONGO_URI no está definida.");
        }

        await mongoose.connect(uri, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
        });

        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error.message);
        throw error; // Lanza el error para que lo capture el índice
    }
};

module.exports = dbCon;
