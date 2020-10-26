const assert = require('assert');
const config = require('../conigs');

describe('Config test', () => {
    describe('dev environment', () => {
        it('SERVER_PORT', () => {
            assert.strictEqual(config.SERVER_PORT, 8081);
        });
        it('DB_PASSWORD', () => {
            assert.strictEqual(config.DB_PASSWORD, '11111111');
        });
        it('DB_DATABASE', () => {
            assert.strictEqual(config.DB_DATABASE, 'dis');
        });
        it('DB_USERNAME', () => {
            assert.strictEqual(config.DB_USERNAME, 'root');
        });
        it('DB_HOST', () => {
            assert.strictEqual(config.DB_HOST, 'localhost');
        });
    });
});
