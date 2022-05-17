
const express = require('express');// servidor express
const cors = require('cors'); //autoriza o no paginas web que entren a mi server
const { dbConnection } = require('../database/config.js');

class Server {

    constructor(){

        this.app = express();

        this.port = process.env.PORT; //desde app.js require('dotenv').config();// trae los del archivo .env

        this.usuariosPath = '/api/usuarios';

        // Conectar a Base de Datos
        this.conectarDB();

        // Middlewares es una funcion que se ejecuta cada vez que levantamos el servidor
        this.middlewares();

        // Rutas de mi App
        this.routes();

    }

    async conectarDB(){

        await dbConnection();
    }

    middlewares(){ //funcion que se ejecuta antes de llamar a un controlador o seguir con ejecucion de peticiones

        // CORS
        this.app.use( cors());

        // Lectura y Parseo del body
        this.app.use( express.json() );

        // Directorio Publico
        this.app.use( express.static('public') );//.use me ayuda a saber de se trata de un middleware
        //apuntando a la carpeta publica, es decir al index.html

    }

    routes(){

        this.app.use( this.usuariosPath, require('../routes/usuarios.js'));

    }

    listen(){

        this.app.listen(this.port, () => {

            console.log('App corriendo en el puerto', this.port);

        });

    }
    

}

module.exports = Server;
