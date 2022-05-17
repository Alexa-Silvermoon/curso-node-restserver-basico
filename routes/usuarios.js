
const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelte, usuariosPatch } = require('../controllers/usuarios');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    check('rol').custom( esRoleValido ),
    validarCampos
], usuariosPut);

router.post('/', [
    check('nombre', 'El nombre es obligatori').not().isEmpty(), //no tiene que estar vacio
    check('password', 'La contraseña debe tener mas de 6 letras').isLength({ min:6 }), //longitud de caracteres minima 6
    // check('correo', 'El correo no es valido').isEmail(), //tiene que ser un correo
    check('correo').custom( emailExiste),
    // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']), //isIn ¿existe en el arreglo?
    check('rol').custom( esRoleValido ),
    validarCampos
], usuariosPost);

router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos
], usuariosDelte);

router.patch('/', usuariosPatch);



module.exports = router;