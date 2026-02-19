import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-config-prettier";

export default withNuxt({
  rules: {
    "comma-dangle": "off",
    quotes: "off",
    semi: "off",
    "vue/no-multiple-template-root": "off",
    "vue/max-attributes-per-line": ["error", { singleline: 3 }],
  },
  extends: [prettier],
});
