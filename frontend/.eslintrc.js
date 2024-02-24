/* eslint-disable no-undef */
// .eslintrc.js example
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: {
      ts: "@typescript-eslint/parser",
      js: "@babel/eslint-parser",
      typescript: "@typescript-eslint/parser",
    },
  },
};
