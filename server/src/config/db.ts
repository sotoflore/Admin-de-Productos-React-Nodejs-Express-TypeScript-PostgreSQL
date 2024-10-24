import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';
dotenv.config();

// base de datos postgresql, en render.com
const db = new Sequelize(process.env.DATABASE_URL_RENDER!, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false, // O true para ver los logs de SQL si lo deseas
    dialectOptions: {
        ssl: {
            require: true, // Es posible que Render requiera SSL
        }
    },
    models: [__dirname + '/../models/**/*']
})

export default db;