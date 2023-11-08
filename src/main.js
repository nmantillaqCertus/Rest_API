const express =  require('express');
const mongoose =  require('mongoose');
const cors = require('cors');

require('dotenv').config();
const rol_Service = require('./service/rol_service');
const usuario_Service = require('./service/usuario_service');

const app = express();
const port = 8000;

//Mapeando las rutas de los servicios
app.use(cors({origin:'*'}));
app.use(express.json());
app.use('/api',rol_Service);
app.use('/api',usuario_Service);

//Rutas
app.get('/',(req, res)=>{
    res.send("Servicio Iniciado");
});

mongoose
.connect(process.env.url_DataBase)
.then(function(){
    console.log(process.env.mensaje_base_datos)
})
.catch((error)=> console.error(error));

app.listen(port, ()=>
            console.log("Se ha iniciado la aplicacion de NODE en el puerto "+port)
    );