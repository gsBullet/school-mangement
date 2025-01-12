"use strict"
import { Sequelize } from 'sequelize';
require('dotenv').config();

interface Database {
    [key: string]: any;
}

export interface sequelize_response {
    sequelize: Sequelize | null;
    // db: { [key: string]: Model };
}

export const sequelize = function (): Promise<sequelize_response> {
    return new Promise(async (resolve, reject) => {
        
        let db = process.env.DB_DATABASE || '';
        let user = process.env.DB_USER || '';
        let pass = process.env.DB_PASSWORD || '';
        let host = process.env.DB_HOST || '';
        let port = process.env.DB_PORT || '';

        const sequelize: Sequelize = new Sequelize(db, user, pass, {
            host,
            dialect: 'mysql',
            port: parseInt(port),
            dialectOptions: {
                // Your mysql2 options here
            },
            pool: {
                max: 10,
                min: 0,
                acquire: 30000,
                idle: 10000,
            },
        });

        try {
            await sequelize.authenticate();
            resolve({
                sequelize: sequelize
            });
            console.log('SQL Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            reject(false);
        }
    })
}
