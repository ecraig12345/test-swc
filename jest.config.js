// @ts-check
/** @type {import('jest').Config} */
module.exports = {
  setupFiles: [
    "<rootDir>/jest/setup-before-env.js",
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/jest/setup-after-env.js",
  ],

  testMatch: ['<rootDir>/src/**/*.test.(c|m)?[jt]s(x)?'],
  testRunner: "jest-jasmine2",
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  // transformIgnorePatterns: ["node_modules"]
};
