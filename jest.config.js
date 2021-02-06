module.exports = {
    roots: ['./src'],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
    collectCoverage: true,
    clearMocks: true,
    coverageDirectory: "coverage",
};
