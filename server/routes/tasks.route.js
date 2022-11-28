const {  verifyUser, testUser } = require('../controladores/Login_Controller');
const {getDatosUsuario} = require('../controladores/tasks.controller');
const router = require('express').Router();
//router.get('/getUsers',getUsers);

router.post("/", verifyUser);
router.get("/test", testUser);
router.post("/perfil_usuario",getDatosUsuario);

module.exports = router;