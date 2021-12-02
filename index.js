//Importando la biblioteca para realizar aplicaciones web
const express = require("express")
const path = require("path")
const cors = require("cors")

const dRoutes = require('./routes/divisiones')
const eRoutes = require('./routes/equipos')
const sequelize = require('./utils/database')

//Creación de la aplicación web
const app = express();

//Middleware
app.use(express.json())
app.use(cors())


app.use("/equipos",eRoutes);
app.use("/divisiones",dRoutes);

//Que la aplicación escuche peticiones
sequelize.sync()
    .then(()=>{app.listen(8080,()=>{
        console.log("Aplicación web en línea en el puerto 8080")
    })})
    .catch()