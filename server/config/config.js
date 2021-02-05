// ==================
///  Puerto
//// ===============

process.env.PORT = process.env.PORT || 3000;


// ==================
///  Entorno
//// ===============

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//// ==================
////  Vencimiento del Token
//// ==================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = 60*60*24*30

//// ==================
////  SEED de autenticación
//// ==================
process.env.SEED = process.env.SEED || 'secret'

//// ==================
////  Base de datos
//// ==================

let urlDB;

if(process.env.NODE_ENV === 'dev'){
     urlDB = 'mongodb://localhost:27017/cafe'
}else{
     urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//// ==================
////  Google CLient ID
//// ==================

process.env.CLIENT_ID = process.env.CLIENT_ID || '457873792756-m0rvuv0c6ds6oh9vmbsoch3let26tmh7.apps.googleusercontent.com';


