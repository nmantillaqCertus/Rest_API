const express =  require('express');
const usuario_model =  require('../models/usuario_model');
const route = express.Router();

//Metodos HTTP [REST{json} SOA{xml}]
route.get('/usuarios',(req, res)=>{
    usuario_model
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

route.post('/usuario',(req, res)=>{
    const usuario = usuario_model(req.body);
    usuario
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

route.get('/usuario/:id',(req, res)=>{
    const {id} = req.params;
    usuario_model
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

route.get('/usuario/:usuario',(req, res)=>{
    const {usuario} = req.params;
    usuario_model
    .findOne({usuario:usuario}) // Revisar
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

/*route.delete();
route.put();*/


module.exports = route;