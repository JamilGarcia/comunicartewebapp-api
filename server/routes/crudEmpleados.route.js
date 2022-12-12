const {crearNuevoEmpleado} = require('../controladores/crudUsers.controller');
const router = require('express').Router();


router.post("/crear_empleado", crearNuevoEmpleado);
module.exports = router;