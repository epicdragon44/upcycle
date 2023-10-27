import adapter from "@sveltejs/adapter-static";
import { importAssets } from "svelte-preprocess-import-assets";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [importAssets()],
    kit: {
        adapter: adapter(),
        paths: {
            base:
                process.env.NODE_ENV === "production"
                    ? "/sveltekit-gh-pages"
                    : "",
        },
    },
};

export default config;
