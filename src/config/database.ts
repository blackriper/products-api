import "reflect-metadata";
import { createConnection } from "typeorm";
import 'dotenv/config';
import { Product } from "../entity/Product";

export const connect= async()=>{
    await createConnection({
        type: "mysql",
        host: process.env.ENDPOINT,
        port: 3306,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE, 
        entities: [
           Product 
        ],
        synchronize: true,
    })
    console.log('Database is Connected')
}

