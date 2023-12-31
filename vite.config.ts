import { defineConfig } from "vite";

import path, { join } from "path";
const resolve = (dir: string) => path.resolve(__dirname, dir);

export default defineConfig({
    base: "./",
    build: {
        outDir: "docs",
        rollupOptions: {
            input: {
                index: resolve("index.html"),
                readme: resolve("src/readme/index.html"),
                "step1.1": resolve("src/step1.1/index.html"),
                "step1.2": resolve("src/step1.2/index.html"),
                "step1.3": resolve("src/step1.3/index.html"),
                "step1.4": resolve("src/step1.4/index.html"),
                "step1.5": resolve("src/step1.5/index.html"),
                "step1.6": resolve("src/step1.6/index.html"),
                "step1.7": resolve("src/step1.7/index.html"),
                "step1.8": resolve("src/step1.8/index.html"),

                "step2.1": resolve("src/step2.1/index.html"),
                "step2.2": resolve("src/step2.2/index.html"),
                "step2.3": resolve("src/step2.3/index.html"),
                "step2.4": resolve("src/step2.4/index.html"),
                "step2.5": resolve("src/step2.5/index.html"),
                "step2.6": resolve("src/step2.6/index.html"),
                "step2.7": resolve("src/step2.7/index.html"),
                "step2.8": resolve("src/step2.8/index.html"),
                "step2.9": resolve("src/step2.9/index.html"),
                "step2.10": resolve("src/step2.10/index.html"),
                "step2.11": resolve("src/step2.11/index.html"),

                "step3.1": resolve("src/step3.1/index.html"),
                "step3.2": resolve("src/step3.2/index.html"),
                "step3.3": resolve("src/step3.3/index.html"),
                "step3.4": resolve("src/step3.4/index.html"),
                "step3.5": resolve("src/step3.5/index.html"),

                "step4.1": resolve("src/step4.1/index.html"),
                "step4.2": resolve("src/step4.2/index.html"),
                "step4.3": resolve("src/step4.3/index.html"),
                "step4.4": resolve("src/step4.4/index.html"),
                "step4.5": resolve("src/step4.5/index.html"),
                "step4.6": resolve("src/step4.6/index.html"),
                "step4.7": resolve("src/step4.7/index.html"),
                "step4.8": resolve("src/step4.8/index.html"),

                "step5.1": resolve("src/step5.1/index.html"),
                "step5.2": resolve("src/step5.2/index.html"),
                "step5.3": resolve("src/step5.3/index.html"),
                "step5.4": resolve("src/step5.4/index.html"),
            },
        },
    },
    server: {
        host: "0.0.0.0",
        port: 8002,
    },
});
