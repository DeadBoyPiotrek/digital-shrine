const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/e2e'],
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/app/components/$1',
    '@/lib/(.*)': '<rootDir>/lib/$1',
    '@/types/(.*)': '<rootDir>/types/$1',
    '@/context/(.*)': '<rootDir>/app/context/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
