import { defineConfig } from "vite";

/* The `obsidian` CLI: dist/bin/obsidian, on the agent's PATH via `contributes.bin`; self-contained, shebang as a banner, exec bit set by the build script. */
export default defineConfig({
    build: {
        ssr: "src/cli/obsidian.ts",
        outDir: "dist/bin",
        emptyOutDir: false,
        target: "node22",
        rollupOptions: { output: { entryFileNames: "obsidian", banner: "#!/usr/bin/env node" } },
    },
    ssr: { noExternal: true },
});
