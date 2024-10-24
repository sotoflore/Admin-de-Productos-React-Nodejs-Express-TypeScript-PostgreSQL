import express from "express";
import swaggerUi from 'swagger-ui-express';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';
import db from "./config/db";
import router from "./router/product.route";
import {swaggerSpec, swaggerUiOptions} from "./config/swagger";

// Conectar a la base de datos
async function connectDB() {
    try {
        await db.authenticate();
        db.sync();
        console.log('Conexion exitosa a la DB!!!')
    } catch (error) {
        console.log(error);
        console.log('Hubo un error al conectar a la BD!!');
    }
}

connectDB();

// Instancia de Express
const server = express();

// Permitir conexiones
const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        if (origin === process.env.FRONTEND_URL) {
            callback(null, true);
        }
        else {
            callback(new Error('Error de CORS'));
        }
    }
}

server.use(cors(corsOptions));

// Leer datos de formularios - formato json
server.use(express.json());

// Morgan - para los logs
server.use(morgan('dev'));

server.use('/api/v1/products', router);

// ruta - Documentacion con Swagger
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server;