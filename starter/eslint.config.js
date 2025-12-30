import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        cy: "readonly",
        document: "readonly",
        window: "readonly",
        localStorage: "readonly",
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Disallow 'var' - use let or const instead
      "no-var": "error",

      // Require semicolons
      semi: ["error", "always"],

      // Disallow unused variables
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // Enforce consistent brace style
      "brace-style": ["error", "1tbs"],

      // Require === and !== instead of == and !=
      eqeqeq: ["error", "always"],

      // Disallow multiple empty lines
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],

      // Enforce consistent indentation
      indent: ["error", 2, { SwitchCase: 1 }],

      // Prettier integration
      "prettier/prettier": "error",
    },
  },
  eslintConfigPrettier,
];

