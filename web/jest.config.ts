import type { Config } from "jest";

const jestConfig = async (): Promise<Config> => {
  return {
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    testEnvironment: "jsdom",
  };
};
export default jestConfig;
