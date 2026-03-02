/**
 * convert-to-webp.mjs
 * One-time script: converts all JPG frames to WebP using `sharp`.
 * Run with: node convert-to-webp.mjs
 */

import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const QUALITY = 78;

const JOBS = [
    {
        input: "public/frames/tenani",
        output: "public/frames/tenani-webp",
    },
    {
        input: "public/frames/tenani-mobile",
        output: "public/frames/tenani-mobile-webp",
    },
];

async function convertFolder({ input, output }) {
    if (!existsSync(output)) {
        await mkdir(output, { recursive: true });
    }

    const files = (await readdir(input)).filter((f) => f.endsWith(".jpg"));
    console.log(`\n📁 ${input} → ${output}  (${files.length} frames)`);

    let done = 0;
    // Process in parallel batches of 20 to avoid memory spikes
    const BATCH = 20;
    for (let i = 0; i < files.length; i += BATCH) {
        const batch = files.slice(i, i + BATCH);
        await Promise.all(
            batch.map(async (file) => {
                const src = path.join(input, file);
                const dest = path.join(output, file.replace(".jpg", ".webp"));
                await sharp(src).webp({ quality: QUALITY }).toFile(dest);
                done++;
            })
        );
        process.stdout.write(`\r  ✓ ${done}/${files.length}`);
    }
    console.log(`\n  Done ✅`);
}

(async () => {
    console.log("🔄 Converting frames to WebP …");
    const start = Date.now();
    for (const job of JOBS) {
        await convertFolder(job);
    }
    const elapsed = ((Date.now() - start) / 1000).toFixed(1);
    console.log(`\n✅ All frames converted in ${elapsed}s`);
})();
