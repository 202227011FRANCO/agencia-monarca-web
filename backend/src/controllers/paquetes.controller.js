const db = require('../config/db');


// OBTENER TODOS LOS PAQUETES
exports.obtenerPaquetes = (req, res) => {

    db.query(
        'SELECT * FROM paquetes',
        (err, results) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json(results);

        }
    );

};


// OBTENER PAQUETE POR ID
exports.obtenerPaquete = (req, res) => {

    const { id } = req.params;

    db.query(
        'SELECT * FROM paquetes WHERE id = ?',
        [id],
        (err, results) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json(results[0]);

        }
    );

};


// CREAR PAQUETE
exports.crearPaquete = (req, res) => {

    const {
        titulo,
        descripcion,
        destino,
        precio,
        duracion,
        imagen,
        disponibles
    } = req.body;

    db.query(
        `
        INSERT INTO paquetes
        (titulo, descripcion, destino, precio, duracion, imagen, disponibles)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
        [
            titulo,
            descripcion,
            destino,
            precio,
            duracion,
            imagen,
            disponibles
        ],
        (err, results) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message: 'Paquete creado',
                id: results.insertId
            });

        }
    );

};


// ACTUALIZAR PAQUETE
exports.actualizarPaquete = (req, res) => {

    const { id } = req.params;

    const {
        titulo,
        descripcion,
        destino,
        precio,
        duracion,
        imagen,
        disponibles
    } = req.body;

    db.query(
        `
        UPDATE paquetes
        SET
        titulo = ?,
        descripcion = ?,
        destino = ?,
        precio = ?,
        duracion = ?,
        imagen = ?,
        disponibles = ?
        WHERE id = ?
        `,
        [
            titulo,
            descripcion,
            destino,
            precio,
            duracion,
            imagen,
            disponibles,
            id
        ],
        (err) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message: 'Paquete actualizado'
            });

        }
    );

};


// ELIMINAR PAQUETE
exports.eliminarPaquete = (req, res) => {

    const { id } = req.params;

    db.query(
        'DELETE FROM paquetes WHERE id = ?',
        [id],
        (err) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message: 'Paquete eliminado'
            });

        }
    );

};