const express =  require('express');
const rol_model =  require('../models/rol_model');
const route = express.Router();

//Obtener Roles
route.get('/roles',(req, res)=>{
    rol_model
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

//Crear Roles
route.post('/rol',(req, res)=>{
    const rol = rol_model(req.body);
    rol
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

//Recuperar un rol por ID
route.get('/rol/:id',(req, res)=>{
    const {id} = req.params;
    rol_model
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

//Actualizar un ROL
route.put('/rol/:codRol',(req, res)=>{
    const {codRol} = req.params;
    const {nombre} = req.body;
    rol_model
    .updateOne({cod: codRol}, {$set:{nombre}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

//Eliminar un ROL
route.delete('/rol/:idRol',(req, res)=>{
    const {idRol} = req.params;
    rol_model
    .deleteOne({cod: idRol})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

module.exports = route;