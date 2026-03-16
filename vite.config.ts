import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    pool: "vmThreads",
    include: ["src/**/*.test.{ts,tsx}"], // ← seulement src/ avec .test.
    exclude: ["e2e/**", "node_modules/**"],
  },
});
