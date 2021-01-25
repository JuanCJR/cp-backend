const express = require('express');
const router = express.Router();
const {getUsers,signin,getUser} = require('../controllers/usuarios.controller');
const validaUsuario = require('../lib/validaUsuario');

router.get('/getusers',getUsers);

router.get('/getuser',getUser);

router.post('/signin',signin);



module.exports = router;