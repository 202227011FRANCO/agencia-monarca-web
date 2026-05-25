const express = require('express');

const cors = require('cors');

const app = express();


// IMPORTAR RUTAS
const paquetesRoutes = require('./routes/paquetes.routes');

const authRoutes = require('./routes/auth.routes');


// MIDDLEWARES
app.use(cors());

app.use(express.json());


// RUTAS
app.use('/api/paquetes', paquetesRoutes);

app.use('/api/auth', authRoutes);


module.exports = app;