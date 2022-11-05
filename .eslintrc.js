module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: ["tsconfig.json"],
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
      },
      extends: [
        "plugin:prettier/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:rxjs/recommended",
      ],
      plugins: ["import", "unused-imports", "rxjs", "simple-import-sort"],
      rules: {
        "@angular-eslint/component-class-suffix": [
          "error",
          {
            suffixes: ["Component", "Layout", "Dialog", "Page", "Card"],
          },
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "hg",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "hg",
            style: "kebab-case",
          },
        ],
        "@angular-eslint/component-max-inline-declarations": [
          "error",
          {
            template: 1,
          },
        ],
        "@typescript-eslint/explicit-function-return-type": ["error"],
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            overrides: {
              constructors: "off",
            },
          },
        ],
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "enumMember",
            format: ["PascalCase"],
          },
          {
            selector: "typeAlias",
            format: ["PascalCase"],
          },
          {
            selector: "variable",
            types: ["boolean"],
            format: ["PascalCase"],
            prefix: ["has", "is"],
          },
          {
            selector: "variableLike",
            format: ["camelCase"],
          },
          {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
        ],
        "import/order": [
          "error",
          {
            "newlines-between": "never",
            alphabetize: {
              order: "asc",
              caseInsensitive: false,
            },
          },
        ],
        "rxjs/no-async-subscribe": "error",
        "rxjs/no-ignored-observable": "error",
        "rxjs/no-nested-subscribe": "error",
        "rxjs/no-unbound-methods": "error",
        "rxjs/throw-error": "error",
        "rxjs/finnish": [
          "error",
          {
            functions: true,
            methods: true,
            names: {
              "^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$": false,
            },
            parameters: true,
            properties: true,
            types: {
              "^EventEmitter$": false,
            },
            variables: true,
          },
        ],
        "simple-import-sort/exports": "error",
        "unused-imports/no-unused-imports": "error",
      },
    },
    {
      files: ["*.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {},
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
