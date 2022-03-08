import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({ pages: "../public" }),
    browser: {
      hydrate: false,
		  router: false
    },
    trailingSlash: "always",
		vite: {
			optimizeDeps: {
				include: ["highlight.js/lib/core"]
			}
		},
    prerender: {
      onError: ({ status, path, referrer, referenceType }) => {
        if (status === 404 && (
          path.startsWith("/demo") ||
          path.startsWith("/editor") ||
          path.startsWith("/dashboard")
        )) return;
        throw new Error(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
      },
      default: true
    }
	}
};

export default config;
