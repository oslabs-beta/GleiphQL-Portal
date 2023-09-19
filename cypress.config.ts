import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '75c5by',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/e2e.ts', // Specify your TypeScript support file here
    specPattern: 'cypress/e2e/**/*.spec.cy.ts',
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    }
  },
});
