// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { trace } = require('console');
const { permission } = require('process');

const config = {
  testDir: './tests',
  retries: 0,
  workers: 1,

  timeout: 300 * 1000,
  expect: {
    timeout: 10000
  },

  /* Run tests in files in Parallel*/
  fullyParallel: true,
  
  /* Report in HTML */
  //reporter: 'html',
  reporter:[ ['html' , { outputFolder : 'playwright-report' , open: 'never' } ]],

  /* Configure projects for major browsers */
  projects:
    [
      {
        name: 'Chrome',
        use: {

          browserName: 'chromium',
          headless: false,
          screenshot: 'only-on-failure', //on, off
          trace: 'retain-on-failure', //off, on    
          ignoreHttpsErrors: true,
          permission: ['geolocation'],
          video: 'retain-on-failure',
          viewport: null, // Set viewport to null for maximizing the window
          deviceScaleFactor: undefined,
          launchOptions: {
            args: ['--start-maximized'] // Pass argument to start maximized
          }
        },
      },

    ],


};

module.exports = config;