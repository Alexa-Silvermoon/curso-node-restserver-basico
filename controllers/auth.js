const bcryptjs = require("bcryptjs");
const { response } = require("express");
const { generarJWT } = require("../helpers/generar-jwt");
const Usuario = require('../models/usuario');

const login = async(req, res = response) => {

    const { correo, password } = req.body;

    try{ //validacion de log in

        // verificar si email existe
        const usuario = await Usuario.findOne({ correo });
        if (!usuario){
            return res.status(400).json({
                msg: 'Usuario o contraseña incorrectos -> correo'
            });
        }


        // verificar si el usuario esta activo en la BD
        if (!usuario.estado){ //si estado en la bd es === false entonces:
            return res.status(400).json({
                msg: 'Usuario o contraseña incorrectos -> estado: false'
            });
        }


        // verificar la contraseña                  pass de req.body    contra pass en la bd
        const validPassword = bcryptjs.compareSync( password, usuario.password);
        if (!validPassword){
            return res.status(400).json({
                msg: 'Usuario o contraseña incorrectos -> contraseña: false'
            })
        }


        // generar el JWT
        const token = await generarJWT( usuario.id );

        res.json({
            //msg: 'Login OK'
            usuario,
            token
        });


    } catch (error){

        console.log(error);
        return res.status(500).json({ //en este caso return es opcional
            msg: 'Error, hable con el administrador'

        });
    }

}

module.exports = {

    login

}