import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // change if your dev server runs on another port
    specPattern: "cypress/e2e/**/*.ts", // 👈 tell Cypress where your tests live
    supportFile: false, // optional: disable default support if unused
    setupNodeEvents() {
      // you can add plugins or event listeners here later
    },
  },
});
