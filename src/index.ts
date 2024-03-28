// src/MySQLConnector.ts
import * as mysql from 'mysql';

export class MySQLConnector {
  private connection: mysql.Connection;

  constructor(private config: mysql.ConnectionConfig) {
    this.connection = mysql.createConnection(config);
  }

  connect(): void {
    this.connection.connect((err: mysql.MysqlError | null) => {
      if (err) {
        console.error('Error connecting to database:', err);
        return;
      }
      console.log('Connected to database');
    });
  }

  query(sql: string, values?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err: mysql.MysqlError | null, results: any) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results);
      });
    });
  }

  end(): void {
    this.connection.end();
  }
}
