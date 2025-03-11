// src/utils/mysql.ts
import mysql from 'mysql2/promise';

let connection: mysql.Pool | null = null;

/**
 * Connect to MySQL database
 */
export async function connectToMySQL() {
  if (connection) {
    return connection;
  }

  connection = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: parseInt(process.env.DATABASE_PORT || '3306'),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  return connection;
}
