
const jwt = require('jsonwebtoken'); //jsonwebtoken trabaja en base a promesas

const generarJWT = ( uid = '' ) => { // uid user id

    return new Promise( (resolve, reject) => {

        const payload = { uid };
        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, { //mi firma para el token
            expiresIn: '4h' //<-- pueden ser horas, dias ej: 365  refiriendose a dias
        }, ( err, token ) => {

            if ( err ){
                console.log( err );
                reject( 'No se pudo generar el token');

            } else {
                resolve( token );
            }

        });

    });




}

module.exports = {

    generarJWT
}