import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
    const filePath = path.join(process.cwd(), "public", "home", "upi-qr.jpg");
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
            "Content-Type": "image/jpeg",
            "Content-Disposition": 'attachment; filename="fugeniz-upi-qr.jpg"',
            "Content-Length": fileBuffer.length.toString(),
        },
    });
}
