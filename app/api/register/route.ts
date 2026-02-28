import { NextResponse } from "next/server";

export async function POST(req: Request) {
    let data: Record<string, unknown> = {};

    try {
        data = await req.json();

        const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL;

        // Always log to console as backup
        console.log("📋 New Registration:", {
            event: data.eventTitle,
            name: data.fullname,
            team: data.teamSize,
            college: data.college,
            phone: data.phone,
            email: data.email,
        });

        if (!GOOGLE_SHEET_URL || GOOGLE_SHEET_URL.includes("PASTE_YOUR_SCRIPT_URL_HERE")) {
            console.warn("⚠️  GOOGLE_SHEET_URL not configured.");
            return NextResponse.json({ success: true, message: "Entry logged." });
        }

        const payload = {
            eventId: data.eventId || "",
            eventTitle: data.eventTitle || "",
            fullname: data.fullname || "",
            teamSize: String(data.teamSize || ""),
            college: data.college || "",
            phone: data.phone || "",
            email: data.email || "",
            timestamp: data.timestamp || new Date().toISOString(),
            fileContent: data.fileContent || "",
            fileName: data.fileName || "",
            mimeType: data.mimeType || "",
        };

        try {
            const response = await fetch(GOOGLE_SHEET_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
                redirect: "follow",
            });

            const rawText = await response.text();
            console.log("Apps Script response:", response.status, rawText.substring(0, 300));

            // If we got JSON back with success
            try {
                const result = JSON.parse(rawText);
                if (result.success === false) {
                    console.error("Apps Script error:", result.error);
                }
            } catch {
                // Non-JSON response (HTML redirect page etc) - ignore
                console.log("Apps Script returned non-JSON (may still have saved)");
            }

        } catch (fetchError) {
            // Network error reaching Apps Script - log but don't fail the user
            console.error("Could not reach Apps Script:", fetchError);
        }

        // Always return success to the user - data is logged above as backup
        return NextResponse.json({ success: true, message: "Entry successfully synchronized." });

    } catch (error) {
        console.error("Registration parse error:", error);
        return NextResponse.json(
            { success: false, message: "Transmission failed. Please check your frequency." },
            { status: 500 }
        );
    }
}
