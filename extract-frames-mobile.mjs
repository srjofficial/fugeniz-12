/**
 * extract-frames-mobile.mjs
 * Run once: node extract-frames-mobile.mjs
 *
 * Extracts frames from /vdo/vdo2.mp4 → /public/frames/tenani-mobile/frame-XXXX.jpg
 */

import ffmpegStatic from "ffmpeg-static";
import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

ffmpeg.setFfmpegPath(ffmpegStatic);

const INPUT = path.join(__dirname, "vdo", "vdo2.mp4");
const OUTPUT_DIR = path.join(__dirname, "public", "frames", "tenani-mobile");
const FPS = 24;
const QUALITY = 3;

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
}

if (!fs.existsSync(INPUT)) {
    console.error(`ERROR: Input file not found: ${INPUT}`);
    process.exit(1);
}

console.log(`Extracting mobile frames from: ${INPUT}`);
console.log(`Output directory: ${OUTPUT_DIR}`);
console.log(`FPS: ${FPS}, JPEG quality scale: ${QUALITY}`);
console.log("This may take a minute...\n");

ffmpeg(INPUT)
    .outputOptions([`-vf fps=${FPS}`, `-q:v ${QUALITY}`])
    .output(path.join(OUTPUT_DIR, "frame-%04d.jpg"))
    .on("start", (cmd) => console.log("ffmpeg command:", cmd))
    .on("progress", (p) => {
        if (p.frames) process.stdout.write(`\r  Processed frame: ${p.frames}`);
    })
    .on("end", () => {
        const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith(".jpg"));
        console.log(`\n\nDone! Extracted ${files.length} frames.`);
        fs.writeFileSync(
            path.join(OUTPUT_DIR, "meta.json"),
            JSON.stringify({ frameCount: files.length, fps: FPS })
        );
        console.log(`Wrote meta.json with frameCount: ${files.length}`);
    })
    .on("error", (err) => {
        console.error("ffmpeg error:", err.message);
        process.exit(1);
    })
    .run();
