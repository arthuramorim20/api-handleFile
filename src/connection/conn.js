import { Client } from "pg";
import dotenv from 'dotenv'

dotenv.config();

const conn = new Client({
    user: process.env.USERDB,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    host: "localhost"
});

conn.connect()
    .then(() => console.log('Deu certo'))
    .catch(err => console.error(err));

export default conn;



