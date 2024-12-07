module.exports = {
    testEnvironment: 'node',  // Set the environment to Node.js for backend testing
    roots: ['<rootDir>/__tests__'],  // Test files will be in __tests__ folder
    transform: {
        '^.+\\.js$': 'babel-jest',  // Use babel-jest for compiling tests (if using ES6/ESModules)
    },
};
