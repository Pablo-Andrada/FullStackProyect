// const app = require("./src/server");
// const dbCon = require("./src/config/dbCon");

// dbCon().then(() => {
//     app.listen(3000, () => {
//         console.log("Servidor escuchando en el puerto 3000");
//     })
// })
//     .catch((error) => {
//     console.log("Error al conectar a la base de datos");    
// })

// const app = require("./src/server");
// const dbCon = require("./src/config/dbCon");

// dbCon().then(() => {
//     app.listen(3000, () => {
//         console.log("Servidor escuchando en el puerto 3000");
//     })
// })
//     .catch((error) => {
//     console.log("Error al conectar a la base de datos");    
// })
require("dotenv").config();
const cors = require("cors");

const app = require("./src/server");
const dbCon = require("./src/config/dbCon");
app.use(cors());

// Conectar a la base de datos antes de exportar la aplicación
(async () => {
  try {
    await dbCon();
    console.log("Conexión a la base de datos establecida");
  } catch (error) {
    console.error("Error crítico al conectar a la base de datos:", error);
    process.exit(1); // Finaliza el proceso si no hay conexión
  }
})();

module.exports = app;
