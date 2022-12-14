const {  verifyUser, testUser } = require('../controladores/Login_Controller');
const {getDatosUsuario, ObtenerNombreUsuario, modificarDatosUsuario} = require('../controladores/tasks.controller');
const router = require('express').Router();
//router.get('/getUsers',getUsers);

router.post("/", verifyUser);
router.get("/test", testUser);
router.post("/perfil_usuario",getDatosUsuario);
router.post("/Gerente", ObtenerNombreUsuario);
router.post("/Subgerente", ObtenerNombreUsuario);
router.post("/Ejecutivo_cuenta", ObtenerNombreUsuario); 
router.post("/modificar_perfil", getDatosUsuario);
router.put("/modificar_perfil", modificarDatosUsuario);


module.exports = router;