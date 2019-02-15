const assert = require('assert');
const {configTableGenerator} = require('../index');

describe('Output the configured table', () => {
    const defaultConfigTable = {
        introduction: true,
        softwareVersion: true,
        sourceDirectory: true,
        installation: true,
        usage: true,
        author: true,
        issue: true,
        apiSpec: true,
        license: true,
    };
    it('should return default configuration table', () => {
        assert.deepEqual(configTableGenerator(), defaultConfigTable);
    });

    it('should return custom configuration table', () => {
        const customOption = {
            introduction: false,
            softwareVersion: false,
            usage: false,
            license: false
        };
        const expectConfigTable = Object.assign(defaultConfigTable, customOption);
        assert.deepEqual(configTableGenerator(customOption), expectConfigTable);
    });
});

describe('Generate the information object to compile to md', () => {
    // 输出待编译为 md 的 json 对象
});
