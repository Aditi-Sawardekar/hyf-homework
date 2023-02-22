import dotenv from 'dotenv';
dotenv.config();

import knex from "knex";

// create connection
const database = knex({
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST, 
      port: process.env.DB_PORT, 
      user: process.env.DB_USER, 
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_NAME, 
      multipleStatements: true,
    },
  });

// Check that the connection works
database.raw("SELECT VERSION()").then(() => {
    console.log(`connection to db successful!`);
  });
  
export default database;