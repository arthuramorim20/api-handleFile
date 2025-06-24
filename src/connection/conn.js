import { Client } from "pg";
import dotenv from 'dotenv'

class connectDatabase {
    constructor () {
        dotenv.config();
        this.connect();
    }

    connect() {
        const client = new Client({
            user: process.env.USER_DB,
            password: process.env.PASSWORD,
            port: process.env.PORT,
            host: process.env.HOST
        });
        client.connect()
            .then(() => console.log('Deu certo'))
            .catch(err => console.error(err));
    }

}

const Database = new connectDatabase;



export default Database;