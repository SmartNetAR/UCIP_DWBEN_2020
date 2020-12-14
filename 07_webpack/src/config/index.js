import dotenv from "dotenv";

dotenv.config({path: '.env'});

const config = {
    enviroment: process.env.NODE_ENV || 'development',
    port: process.env.NODE_PORT || 3000,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD
} ;

export default config ;