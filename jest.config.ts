export default {
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',  // src 경로 매핑
    },
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testRegex: '.*\\.spec\\.ts$',
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
};
