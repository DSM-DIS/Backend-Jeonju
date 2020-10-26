const assert = require('assert');
const config = require('../conigs');

describe('Config test', () => {
    describe('dev environment', () => {
        it('SERVER_PORT', () => {
            assert.strictEqual(process.env.SERVER_PORT, 8081);
        });
        it('DB_PASSWORD', () => {
            assert.strictEqual(process.env.DB_PASSWORD, '11111111');
        });
        it('DB_DATABASE', () => {
            assert.strictEqual(process.env.DB_DATABASE, 'dis');
        });
        it('DB_USERNAME', () => {
            assert.strictEqual(process.env.DB_USERNAME, 'root');
        });
        it('DB_HOST', () => {
            assert.strictEqual(process.env.DB_HOST, 'localhost');
        });
    });
});
