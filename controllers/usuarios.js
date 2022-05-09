
const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    // const query = req.query;

    const {q, nombre = 'No Nombre', apikey, page = 1, limit} = req.query;
    // en caso de que no venga nada en noombre entonces nombre = 'No Nombre'
    // link en postman http://localhost:8080/api/usuarios?q=hola&nombre=alexander&apikey=123

    res.json({
        ok: true,
        msg: 'todo bien GET API - controlador',//esto aparecera en postman
        //query,
        q,
        nombre,
        apikey,
        page,
        limit

        //lo que devuelve mi servidor en postman:
        // {
        //     "ok": true,
        //     "msg": "todo bien GET API - controlador",
        //     "query": {
        //         "q": "hola",
        //         "nombre": "alexander",
        //         "apikey": "123"
        //     }
        // }

        // http://localhost:8080/api/usuarios?q=hola&apikey=123
        //lo que devuelve mi servidor en postman si no hay nombre:
        // {
        //     "ok": true,
        //     "msg": "todo bien GET API - controlador",
        //     "q": "hola",
        //     "nombre": "No Nombre",
        //     "apikey": "123"
        // }

        //http://localhost:8080/api/usuarios?q=hola&apikey=123&page=1&limit=10
        //lo que devuelve mi servidor, en caso de que no haya page, pone por defeto 1
        // {
        //     "ok": true,
        //     "msg": "todo bien GET API - controlador",
        //     "q": "hola",
        //     "nombre": "No Nombre",
        //     "apikey": "123",
        //     "page": "1",
        //     "limit": "10"
        // }

    });
    
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params; //desde router.put('/:id', usuariosPut);
    //viene desde el link de postman http://localhost:8080/api/usuarios/10

    res.status(400).json({ //status 400 bad request
        ok: true,
        msg: 'PUT API - controlador',//esto aparecera en postman
        id

        //Lo que devuelve mi servidor en postman:
        // {
        //     "ok": true,
        //     "msg": "PUT API - controlador",
        //     "id": "10"
        // }
        
    });
    
}

const usuariosPost = (req, res = response) => {

    // const body = req.body;

    const {nombre, edad} = req.body; //req es lo que el frontend esta enviando a mi servidor, la request entra por el body
    //para saber si funciona verificar el postman

    res.status(201).json({ //status all ok
        ok: true,
        msg: 'POST API - controlador',//esto aparecera en postman
        nombre,
        edad
        
    });

    //Lo que entra a mi servidor desde postman: Body-raw-JSON   
    // {
    //     "nombre": "Alexander Martinez Millan",
    //     "edad": 27
    // }

    //Lo que mi servidor devuelve en postman:
    // {
    //     "ok": true,
    //     "msg": "POST API - controlador",
    //     "nombre": "Alexander Martinez Millan",
    //     "edad": 27
    // }
    
}

const usuariosDelte = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'DELETE API - controlador'//esto aparecera en postman
        
    });
    
}

const usuariosPatch = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'PATCH API - controlador'//esto aparecera en postman
        
    });
    
}

module.exports = {

    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelte,
    usuariosPatch
}