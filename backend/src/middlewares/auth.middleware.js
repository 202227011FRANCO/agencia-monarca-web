const jwt = require('jsonwebtoken');

require('dotenv').config();


// VALIDAR TOKEN
const verificarToken = (req, res, next) => {

    try {

        const authHeader = req.headers['authorization'];

        // VALIDAR HEADER
        if(!authHeader){

            return res.status(401).json({
                message: 'Token requerido'
            });

        }

        // FORMATO: Bearer TOKEN
        const token = authHeader.split(' ')[1];

        // VALIDAR TOKEN
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // GUARDAR USUARIO
        req.usuario = decoded;

        next();

    } catch(error){

        return res.status(403).json({
            message: 'Token inválido'
        });

    }

};


module.exports = verificarToken;