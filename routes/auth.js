
const { Router } = require('express');
const { check } = require('express-validator');
const { login, googleSignIn } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/login',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(), //para no dar pistas de mis contraseñas
    validarCampos
], login); // ruta this.authPath = '/api/auth';   y login desde '../controllers/auth'

router.post('/google',[
    check('id_token','id_token de google es necesario').not().isEmpty(), //NO tiene que estar vacio
    validarCampos
], googleSignIn);

module.exports = router;