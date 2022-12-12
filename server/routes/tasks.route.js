const {  verifyUser, testUser } = require('../controladores/Login_Controller');
const {getDatosUsuario, ObtenerNombreUsuario} = require('../controladores/tasks.controller');
const router = require('express').Router();
//router.get('/getUsers',getUsers);

router.post("/", verifyUser);
router.get("/test", testUser);
router.post("/perfil_usuario",getDatosUsuario);
router.post("/Gerente", ObtenerNombreUsuario);
router.post("/Subgerente", ObtenerNombreUsuario);
router.post("/modificar_perfil", getDatosUsuario);
router.post("/Ejecutivo_cuenta", ObtenerNombreUsuario); 

module.exports = router;