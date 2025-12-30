import gulp from "gulp";
import shell from "gulp-shell";

// Task to run Parcel for development (watch mode)
export const dev = shell.task("npx parcel index.html");

// Task to build the project with Parcel (production)
export const build = shell.task("npx parcel build index.html --dist-dir dist");

// Task to run Mocha unit tests
export const testUnit = shell.task("mocha");

// Task to run Cypress end-to-end tests (headless)
export const testE2e = shell.task("npx cypress run");

// Task to open Cypress in interactive mode
export const cypressOpen = shell.task("npx cypress open");

// Task to run ESLint
export const lint = shell.task('npx eslint "src/**/*.js" "test/**/*.js"');

// Run all tests (unit + e2e)
export const test = gulp.series(testUnit, testE2e);

// Build and test together
export const buildAndTest = gulp.series(build, test);

// Default task - run build
export default build;

