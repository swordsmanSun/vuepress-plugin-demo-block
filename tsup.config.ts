import { defineConfig } from "tsup";

export default defineConfig({
    clean: true,
    dts: true,
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    external: [/\.vue$/u, /^@internal/u],
    target: "node14",

    onSuccess: 'copy "src\\public" "dist/public/"',
});
