import { defineConfig } from "@playwright/test";

// e2e shell per docs/07 T0.4; the full journey suite grows through E4/E6
// (T4.8: six segment paths, flag cases, failure fallback).
export default defineConfig({
  testDir: "./e2e",
  timeout: 60_000,
  retries: process.env.CI ? 1 : 0,
  use: {
    baseURL: process.env.E2E_BASE_URL ?? "http://127.0.0.1:3000",
    trace: "retain-on-failure",
    // Sandboxed environments provide a system Chromium instead of the
    // Playwright download; point PW_CHROMIUM_PATH at it to reuse it.
    launchOptions: process.env.PW_CHROMIUM_PATH
      ? { executablePath: process.env.PW_CHROMIUM_PATH }
      : undefined,
  },
  webServer: process.env.E2E_BASE_URL
    ? undefined
    : {
        command: "pnpm start",
        url: "http://127.0.0.1:3000/api/health",
        reuseExistingServer: true,
        timeout: 60_000,
      },
});
