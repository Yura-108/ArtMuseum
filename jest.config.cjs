module.exports = {
  testPathIgnorePatterns: ['/node_modules/', 'api/', 'e2e/'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@types(.*)$': '<rootDir>/src/types$1',
    '^@store(.*)$': '<rootDir>/src/store$1',
  },
  globals: {
    __PATH_PREFIX__: '',
  },
  verbose: true,
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest.transform.cjs',
  },
  roots: ['.'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',

  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.styled.ts',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/serviceWorker.ts',
    '!src/setupTests.ts',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
