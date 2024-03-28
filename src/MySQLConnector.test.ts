// src/MySQLConnector.test.ts
import { MySQLConnector } from './app';

describe('MySQLConnector', () => {
    let connector: MySQLConnector;

    beforeEach(() => {
        const dbConfig = {
            host: 'localhost',
            user: 'root',
            password: 'SmartWork_123',
            database: 'project'
        };
        connector = new MySQLConnector(dbConfig);
    });

    afterEach(() => {
        connector.end();
    });

    it('should connect to the database', async () => {
        try {
            await connector.connect();
        } catch (err) {
            fail(`Failed to connect to the database: ${err}`);
        }
    });

    it('should execute a query', async () => {
        const results = await connector.query('SELECT * FROM project.products;');
        expect(results.length).toBeGreaterThan(0);
    });
});
