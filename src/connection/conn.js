import { Client } from "pg";
import dotenv from 'dotenv'

dotenv.config();

const conn = new Client({
    user: process.env.USER_DB,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    host: process.env.HOST
});


conn.connect()
    .then(() => console.log('Deu certo'))
    .catch(err => console.error(err));

export default conn;



