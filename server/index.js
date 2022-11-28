const express = require('express');
const app = express();
const cors = require("cors");
const db = require('./db');
const port = process.env.PORT || 4000;

//process.env.NODE_ENV => production or undefined

//Middleware
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}



app.use((req, res, next) => {
  res.header({"Access-Control-Allow-Origin": "*"});
  next();
}) 
app.use(cors(corsOptions));//Permite comunicar servidor front-end y servidor back-end
app.use(express.json());


//import route
const routePrueba = require('./routes/tasks.route');
//initialize routes
app.use("/",routePrueba);
 
app.listen(port, () => {
  console.log(`Server empezado en el puerto ${port}`);
  })
