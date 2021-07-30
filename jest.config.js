const config = {
    verbose: true,
    moduleDirectories: [ 'node_modules', 'src/test-setup' ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testEnvironment: 'jsdom'
};
  
module.exports = config;