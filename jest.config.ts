import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  clearMocks: true,
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.(tsx|ts)"],
  coverageProvider: "babel",
  coverageReporters: ["text", "text-summary"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};

export default config;
