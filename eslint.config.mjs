import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.js"],
		languageOptions: {
			sourceType: "commonjs",
			globals: globals.browser,
		},
		rules: {
			"indent": ["error", 2],        // 2-space indentation
			"quotes": ["error", "single"], // single quotes
			"semi": ["error", "always"],   // require semicolons
			"linebreak-style": ["error", "unix"] // enforce LF
		}
	},
]);
