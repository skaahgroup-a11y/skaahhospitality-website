import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
  },
  test: {
    include: ["lib/**/*.test.ts", "content-schemas/**/*.test.ts"],
    environment: "node",
  },
});
