const db = require('../config/db');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

require('dotenv').config();


// REGISTER
exports.register = async (req, res) => {

    try {

        const {
            nombre,
            email,
            password
        } = req.body;

        // HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);

        // INSERT USER
        db.query(
            `
            INSERT INTO usuarios
            (nombre, email, password)
            VALUES (?, ?, ?)
            `,
            [
                nombre,
                email,
                hashedPassword
            ],
            (err, results) => {

                if(err){
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Usuario registrado'
                });

            }
        );

    } catch(error){

        res.status(500).json(error);

    }

};


// LOGIN
exports.login = (req, res) => {

    const {
        email,
        password
    } = req.body;

    db.query(
        'SELECT * FROM usuarios WHERE email = ?',
        [email],
        async (err, results) => {

            if(err){
                return res.status(500).json(err);
            }

            if(results.length === 0){

                return res.status(404).json({
                    message: 'Usuario no encontrado'
                });

            }

            const usuario = results[0];

            // COMPARE PASSWORD
            const validPassword = await bcrypt.compare(
                password,
                usuario.password
            );

            if(!validPassword){

                return res.status(401).json({
                    message: 'Contraseña incorrecta'
                });

            }

            // TOKEN
            const token = jwt.sign(
                {
                    id: usuario.id,
                    rol: usuario.rol
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '1d'
                }
            );

            res.json({
                message: 'Login correcto',
                token,
                usuario: {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    email: usuario.email,
                    rol: usuario.rol
                }
            });

        }
    );

};