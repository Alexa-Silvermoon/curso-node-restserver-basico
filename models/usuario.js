const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    nombre:{

        type: String,
        required: [true, 'El nombre es obligatorio']

    },
    correo:{

        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true

    },
    password:{

        type: String,
        required: [true, 'La contraseña es obligatorio']

    },
    img:{

        type: String,
        // imagen no es obligatoria (no required)

    },
    rol:{

        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']

    },
    estado:{

        type: Boolean,
        default: true //justo despues de crear el usuario, quedara activo

    },
    google:{

        type: Boolean,
        default: false //usuario creado por google???

    },

});

UsuarioSchema.methods.toJSON = function() { //debe ser una funcion normal ya que usaremos objeto this adentro
    //el this hace referencia a la instancia creada

    const { __v, password, ...usuario } = this.toObject(); // __v y password se almacenara en usuario
    // __v = version     ,     ... = operador rest

    // la version esta en la respuesta de postman

    return usuario;

    //gracias a eso, postman no mostrara ni la version ni la contraseña, pero lo contraseña si quedara
    //almacenada en la BD de mongo

}

module.exports = model( 'Usuario', UsuarioSchema );