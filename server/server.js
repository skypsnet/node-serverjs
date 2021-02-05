require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')

  app.use(bodyParser.urlencoded({extended:false}));
  app.use(bodyParser.json());
  
  // Habilitación de carpeta publica

  app.use(express.static(path.resolve(__dirname,'../public')));

  console.log(path.resolve(__dirname,'../public'));
  console.log(__dirname +'../public');

  // Configuración global de rutas
  app.use(require('./routes/index'));

  // Conexión a la base de datos
  mongoose.connect(process.env.URLDB, {useNewUrlParser: true, useCreateIndex: true} ,(err,res)=>{
        
  if(err) throw new err;

  console.log('Base de datos Online')

  });
   
  app.listen(process.env.PORT, ()=>{
      console.log('Escuchando puerto 3000')
  })