// // src/app.ts
// import { MySQLConnector } from './index';

// const dbConfig = {
//   host: 'localhost',
//   user: 'root',
//   password: 'SmartWork_123',
//   database: 'project'
// };

// const connector = new MySQLConnector(dbConfig);
// connector.connect();

// // Example usage:
// connector.query('SELECT * FROM project.products;')
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.error('Error executing query:', err);
//   });

// // Don't forget to end the connection when done
// // connector.end();

export { MySQLConnector } from './index';