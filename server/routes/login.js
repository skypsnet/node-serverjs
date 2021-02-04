const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuario');
const { response } = require('./usuario');
const app = express();


app.post('/login', (req, res)=>{
  
   let body = req.body;
   console.log(body)
  console.log(body.email)
    
   Usuario.findOne({email: body.email}, (err, usuarioDB)=>{
         
    if(err){
        return res.status(400).json({
             ok: false,
             err
         });
     }

     console.log(usuarioDB)

     if(!usuarioDB){
        return res.status(400).json({
            ok: false,
            err: {
                message:  '(Usuario) o contraseña incorrectos'
            }
        });
     }

     
     if(!bcrypt.compareSync(body.password, usuarioDB.password)){
          
        return res.status(400).json({
            ok: false,
            err: {
                message:  'La contraseña no es correcta'
            }
        });

     }
     let token = jwt.sign({
         usuario: usuarioDB
     },process.env.SEED,{expiresIn: process.env.CADUCIDAD_TOKEN})

     res.json({
         ok: true,
         usuario: usuarioDB,
         token
     })
     

   })

    

})

module.exports = app;