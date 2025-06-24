import conn from "../connection/conn.js";

const query = await conn.query(`
    create table if not exists list (
	id int primary key not null,
	name varchar(255),
	ramal bigint,
	phone bigint
);
`)
    .then( success => console.log("Certinho", success))
    .catch(err => console.error(err));





