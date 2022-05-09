
const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelte, usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelte);

router.patch('/', usuariosPatch);



module.exports = router;