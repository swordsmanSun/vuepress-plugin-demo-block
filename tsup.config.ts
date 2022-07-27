import { defineConfig } from "tsup";

export default defineConfig({
    clean: true,
    dts: true,
    entry: ["src/index.ts","src/node/*.ts", "src/utils/**/*.ts"],
    format: ["cjs"],
    outDir: "lib",
    external: [/\.vue$/u, /^@internal/u],
    target: "node14",

    onSuccess: 'copy "src\\public" "lib/public/"',
});
