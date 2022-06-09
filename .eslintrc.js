module.exports = {
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "react-native",
    "prettier"
  ],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".js"]
      }
    ],
    "react/state-in-constructor": "off",
    "react/react-in-jsx-scope": "off",
    "no-use-before-define": "off",
    "no-unused-vars": "off",
    "react/function-component-definition": "off",
    "arrow-body-style": ["error", "always"],
  },
};

/*
{
    "parser": "@babel/eslint-parser",
    "extends": "@react-native-community",
    "rules": {
        "quotes": [2, "double", {"avoidEscape": true}]
    }
}
*/
