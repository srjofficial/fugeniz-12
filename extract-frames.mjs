/**
 * extract-frames.mjs
 * Run once: node extract-frames.mjs
 * Requires: npm install --save-dev fluent-ffmpeg ffmpeg-static
 *
 * Extracts frames from /vdo/tenani.mp4 → /public/frames/tenani/frame-XXXX.jpg
 */

import ffmpegStatic from "ffmpeg-static";
import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configure fluent-ffmpeg to use the bundled static binary
ffmpeg.setFfmpegPath(ffmpegStatic);

const INPUT = path.join(__dirname, "vdo", "upscaled-video.mp4");
const OUTPUT_DIR = path.join(__dirname, "public", "frames", "tenani");
const FPS = 24;       // frames per second to extract
const QUALITY = 3;    // ffmpeg jpeg q:v (1=best, 31=worst); 3 ≈ 75% quality

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
}

// Check input
if (!fs.existsSync(INPUT)) {
    console.error(`ERROR: Input file not found: ${INPUT}`);
    process.exit(1);
}

console.log(`Extracting frames from: ${INPUT}`);
console.log(`Output directory: ${OUTPUT_DIR}`);
console.log(`FPS: ${FPS}, JPEG quality scale: ${QUALITY}`);
console.log("This may take a minute...\n");

ffmpeg(INPUT)
    .outputOptions([
        `-vf fps=${FPS}`,
        `-q:v ${QUALITY}`,
    ])
    .output(path.join(OUTPUT_DIR, "frame-%04d.jpg"))
    .on("start", (cmd) => console.log("ffmpeg command:", cmd))
    .on("progress", (p) => {
        if (p.frames) process.stdout.write(`\r  Processed frame: ${p.frames}`);
    })
    .on("end", () => {
        const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith(".jpg"));
        console.log(`\n\nDone! Extracted ${files.length} frames.`);
        console.log(`Frames are in: ${OUTPUT_DIR}`);
        // Write a JSON metadata file so the component knows how many frames exist
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
