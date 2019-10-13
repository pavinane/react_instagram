module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/jsx-no-undef": 0,
    "react/prefer-stateless-function": 0,
    "max-classes-per-file": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    quotes: 0,
    "import/no-unresolved": 0
  }
};
