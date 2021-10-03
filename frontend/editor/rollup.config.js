import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

const firebaseApiKeys = {
  stage: "AIzaSyBxFFOSL7yfPksJMK1drBBabOWlOWLwDE4",
  prod: "AIzaSyBU8Uc2XMlksFDa-WP27u4yL4I5Q1_Ddbg"
}

const branch = process.env.BRANCH;
const production = branch === "prod";

export default {
	input: 'src/main.ts',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: '../public/editor/build/bundle.js'
	},
	plugins: [
		svelte({
			preprocess: sveltePreprocess({ sourceMap: !production }),
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			}
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
    css({ output: 'bundle.css' }),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		typescript({
			sourceMap: !production,
			inlineSources: !production
    }),
    
    injectProcessEnv({
      PROJECT_ID: `lexoral-${branch ?? "stage"}`,
      FIREBASE_API_KEY: firebaseApiKeys[branch ?? "stage"],
    }),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
