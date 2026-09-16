import { defineConfig } from "vite";

/* The `kb` CLI: dist/bin/kb, on the agent's PATH via `contributes.bin`; self-contained, shebang as a banner, exec bit set by the build script. */
export default defineConfig({
    build: {
        ssr: "src/cli/kb.ts",
        outDir: "dist/bin",
        emptyOutDir: false,
        target: "node22",
        rollupOptions: { output: { entryFileNames: "kb", banner: "#!/usr/bin/env node" } },
    },
    ssr: { noExternal: true },
});
