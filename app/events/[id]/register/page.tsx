"use client";

import { use, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Upload, CheckCircle2, QrCode, CreditCard, Send } from "lucide-react";
import { eventsData } from "@/lib/stranger-events-data";
import SiteFooter from "@/components/SiteFooter";
import FloatingSpores from "@/components/FloatingSpores";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function RegistrationPage({ params }: PageProps) {
    const resolvedParams = use(params);
    const eventId = resolvedParams.id;
    const event = eventsData[eventId];

    const [submittingState, setSubmittingState] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!event) {
        notFound();
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const fileInput = fileInputRef.current;
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            alert("UPLOAD PROTOCOL ERROR: Payment receipt is mandatory for survival.");
            return;
        }

        const file = fileInput.files[0];

        // Ensure file is smaller than ~5MB for Apps Script safety
        if (file.size > 5 * 1024 * 1024) {
            alert("File too large. Maximum size is 5MB.");
            return;
        }

        setSubmittingState("COMPRESSING IMAGE...");

        try {
            // Compress or fallback to raw Base64
            const getOptimalBase64 = (file: File): Promise<{ base64: string, name: string, type: string }> => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (event) => {
                        const rawResult = event.target?.result as string;
                        if (!rawResult) return reject("File reading failed");

                        // If not an easily compressible image, just return raw base64
                        if (!file.type.startsWith('image/') || file.type.includes('heic') || file.type.includes('gif')) {
                            return resolve({
                                base64: rawResult.split(',')[1],
                                name: file.name,
                                type: file.type
                            });
                        }

                        const img = new window.Image();
                        img.onload = () => {
                            try {
                                const canvas = document.createElement('canvas');
                                const MAX_WIDTH = 1200;
                                const MAX_HEIGHT = 1200;
                                let width = img.width;
                                let height = img.height;

                                if (width > height) {
                                    if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
                                } else {
                                    if (height > MAX_HEIGHT) { width *= MAX_HEIGHT / height; height = MAX_HEIGHT; }
                                }
                                canvas.width = width;
                                canvas.height = height;

                                const ctx = canvas.getContext('2d');
                                if (!ctx) throw new Error("Canvas not supported");
                                ctx.drawImage(img, 0, 0, width, height);

                                const dataUrl = canvas.toDataURL('image/jpeg', 0.6);
                                resolve({
                                    base64: dataUrl.split(',')[1],
                                    name: file.name.replace(/\.[^/.]+$/, "") + ".jpg",
                                    type: 'image/jpeg'
                                });
                            } catch (e) {
                                console.warn("Compression failed, using raw file:", e);
                                resolve({
                                    base64: rawResult.split(',')[1],
                                    name: file.name,
                                    type: file.type
                                });
                            }
                        };
                        img.onerror = () => {
                            console.warn("Image decode failed (might be HEIC), using raw file");
                            resolve({
                                base64: rawResult.split(',')[1],
                                name: file.name,
                                type: file.type
                            });
                        };
                        img.src = rawResult;
                    };
                    reader.onerror = (error) => reject(error);
                });
            };

            setSubmittingState("PREPARING PAYLOAD...");
            const formData = new FormData(e.currentTarget); // capture synchronous form values
            const fileData = await getOptimalBase64(file);  // wait for async compression
            setSubmittingState("UPLOADING...");
            const data = {
                eventId: eventId,
                eventTitle: event.title,
                fullname: formData.get("fullname")?.toString() || "",
                teamSize: formData.get("teamSize")?.toString() || "",
                college: formData.get("college")?.toString() || "",
                phone: formData.get("phone")?.toString() || "",
                email: formData.get("email")?.toString() || "",
                timestamp: new Date().toISOString(),
                fileContent: fileData.base64,
                fileName: fileData.name,
                mimeType: fileData.type
            };

            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const responseText = await response.text();
            let result;
            try {
                result = JSON.parse(responseText);
            } catch (e) {
                // If the server threw a 413 Payload too large, it returns HTML
                throw new Error("Server returned non-JSON. File might be too large! " + response.status);
            }

            if (result.success) {
                setIsSuccess(true);
            } else {
                alert(result.message || "Transmission error. Try again.");
            }
        } catch (error: any) {
            console.error("Submission error:", error);
            alert(`Error: ${error.message || error}`);
        } finally {
            setSubmittingState(null);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    // 3D Text Style
    const text3DStyle = {
        textShadow: "2px 2px 0px rgba(153, 27, 27, 0.8), 4px 4px 0px rgba(0, 0, 0, 0.5)"
    };

    return (
        <main className="min-h-screen bg-black text-[#f0f0f0] overflow-hidden selection:bg-red-900 selection:text-white font-sans">
            {/* Cinematic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover opacity-10 blur-xl grayscale"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-red-950/20 z-10" />
            </div>

            {/* Atmosphere */}
            <FloatingSpores />

            {/* Navigation */}
            <nav className="relative z-50 w-full p-6 flex items-center justify-between">
                <Link href={`/events/${eventId}`} className="group flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm uppercase tracking-widest">Abort Mission</span>
                </Link>
                <div className="hidden md:flex items-center gap-2">
                    <span className="w-16 h-px bg-red-600/50" />
                    <span className="font-cinzel text-red-500 tracking-widest text-sm">RECRUITMENT PROTOCOL</span>
                </div>
            </nav>

            <div className="relative z-20 max-w-4xl mx-auto px-6 py-12">
                <AnimatePresence mode="wait">
                    {!isSuccess ? (
                        <motion.div
                            key="registration-form"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="bg-zinc-900/40 backdrop-blur-xl border border-red-900/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                        >
                            {/* Decorative scanline effect */}
                            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%]" />

                            <div className="text-center mb-12">
                                <motion.h1
                                    className="font-cinzel text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-orange-500 to-red-600 mb-4 tracking-tighter"
                                    animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 10, repeat: Infinity }}
                                    style={{ backgroundSize: "200%", ...text3DStyle }}
                                >
                                    SURVIVAL ENTRY
                                </motion.h1>
                                <p className="font-mono text-sm text-red-500/80 tracking-[0.3em] uppercase" style={text3DStyle}>Event: {event.title}</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Row 1: Team Leader */}
                                    <div className="space-y-4">
                                        <label htmlFor="fullname" className="text-red-500 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold flex items-center gap-2">
                                            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                                            Team Leader Full Name
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform group-focus-within:translate-x-1">
                                                <span className="text-red-900 group-focus-within:text-red-500 font-black">❯</span>
                                            </div>
                                            <input
                                                required
                                                id="fullname"
                                                name="fullname"
                                                type="text"
                                                autoComplete="name"
                                                placeholder="Who is leading this mission?"
                                                className="w-full bg-black/80 border-b-2 border-red-900/50 px-10 py-5 focus:outline-none focus:border-red-500 focus:bg-red-900/10 transition-all text-white placeholder:text-zinc-700 font-cinzel text-lg tracking-widest rounded-t-lg"
                                            />
                                        </div>
                                    </div>

                                    {/* Number of Members */}
                                    <div className="space-y-2 group">
                                        <label htmlFor="teamSize" className="block font-mono text-xs uppercase tracking-widest text-gray-500 group-focus-within:text-red-500 transition-colors" style={text3DStyle}>
                                            {eventId === "scan-seek"
                                                ? "Number of Team Members (2–3)"
                                                : "Number of Team Members (1–2)"}
                                        </label>
                                        <select
                                            required
                                            id="teamSize"
                                            name="teamSize"
                                            autoComplete="off"
                                            className="w-full bg-black/50 border border-zinc-800 rounded-lg px-4 py-4 focus:outline-none focus:border-red-600 transition-all text-white appearance-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                                        >
                                            <option value="">Select count</option>
                                            {eventId === "scan-seek" ? (
                                                <>
                                                    <option value="2">2 Members</option>
                                                    <option value="3">3 Members</option>
                                                </>
                                            ) : (
                                                <>
                                                    <option value="1">1 (Solo)</option>
                                                    <option value="2">2 Members</option>
                                                </>
                                            )}
                                        </select>
                                    </div>

                                    {/* Row 3: College */}
                                    <div className="space-y-4 md:col-span-2">
                                        <label htmlFor="college" className="text-red-500 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold flex items-center gap-2">
                                            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                                            College Name
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform group-focus-within:translate-x-1">
                                                <span className="text-red-900 group-focus-within:text-red-500 font-black">❯</span>
                                            </div>
                                            <input
                                                required
                                                id="college"
                                                name="college"
                                                type="text"
                                                autoComplete="organization"
                                                placeholder="Where do you hail from?"
                                                className="w-full bg-black/80 border-b-2 border-red-900/50 px-10 py-5 focus:outline-none focus:border-red-500 focus:bg-red-900/10 transition-all text-white placeholder:text-zinc-700 font-cinzel text-lg tracking-widest rounded-t-lg"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 4: Contact Info */}
                                    <div className="space-y-4">
                                        <label htmlFor="phone" className="text-red-500 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold flex items-center gap-2">
                                            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                                            Team Leader Phone
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform group-focus-within:translate-x-1">
                                                <span className="text-red-900 group-focus-within:text-red-500 font-black">❯</span>
                                            </div>
                                            <input
                                                required
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                autoComplete="tel"
                                                placeholder="+91 XXXX XXX XXX"
                                                className="w-full bg-black/80 border-b-2 border-red-900/50 px-10 py-5 focus:outline-none focus:border-red-500 focus:bg-red-900/10 transition-all text-white placeholder:text-zinc-700 font-cinzel text-lg tracking-widest rounded-t-lg"
                                            />
                                        </div>
                                    </div>

                                    {/* Email ID */}
                                    <div className="space-y-4">
                                        <label htmlFor="email" className="text-red-500 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold flex items-center gap-2">
                                            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                                            Team Leader Email
                                        </label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform group-focus-within:translate-x-1">
                                                <span className="text-red-900 group-focus-within:text-red-500 font-black">❯</span>
                                            </div>
                                            <input
                                                required
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                placeholder="base@command.com"
                                                className="w-full bg-black/80 border-b-2 border-red-900/50 px-10 py-5 focus:outline-none focus:border-red-500 focus:bg-red-900/10 transition-all text-white placeholder:text-zinc-700 font-cinzel text-lg tracking-widest rounded-t-lg"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Section */}
                                <div className="mt-16 pt-8 border-t border-red-900/30 relative">
                                    <h3 className="font-cinzel text-2xl md:text-3xl text-red-500 mb-8 flex items-center gap-4 tracking-widest">
                                        <QrCode className="w-8 h-8 opacity-70" />
                                        PAYMENT PROTOCOL
                                    </h3>

                                    <div className="flex flex-col md:flex-row gap-12">
                                        <div className="relative group/qr shrink-0">
                                            <div className="absolute -inset-4 bg-red-600/5 rounded-2xl group-hover/qr:bg-red-600/10 transition-colors" />
                                            <motion.div
                                                whileHover={{ y: -5 }}
                                                className="relative w-64 h-64 overflow-hidden rounded-xl border border-red-900/50 bg-black/80 p-2 shadow-2xl"
                                            >
                                                <Image
                                                    src="/home/upi-qr.jpg"
                                                    alt="Payment QR"
                                                    fill
                                                    className="object-contain p-2"
                                                />
                                            </motion.div>
                                        </div>

                                        <div className="flex-1 space-y-8 flex flex-col justify-center">
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <label htmlFor="receipt" className="text-red-500 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                                                        Upload Payment Receipt
                                                    </label>
                                                    <span className="bg-red-600 text-white text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">Mandatory</span>
                                                </div>
                                                <div className="relative group">
                                                    <input
                                                        required
                                                        type="file"
                                                        accept="image/*"
                                                        id="receipt"
                                                        className="hidden"
                                                        onChange={handleFileChange}
                                                        ref={fileInputRef}
                                                    />
                                                    <label
                                                        htmlFor="receipt"
                                                        className="flex items-center justify-center gap-3 w-full border-2 border-dashed border-red-900/50 rounded-xl px-6 py-8 hover:border-red-500 hover:bg-red-900/10 transition-all cursor-pointer group-hover:shadow-[0_0_15px_rgba(220,38,38,0.1)]"
                                                    >
                                                        {fileName ? (
                                                            <>
                                                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                                                                <span className="text-green-500 font-mono text-sm truncate max-w-[200px]">{fileName}</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Upload className="w-6 h-6 text-red-500/70 group-hover:text-red-500 transition-colors group-hover:-translate-y-1" />
                                                                <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest group-hover:text-red-400 transition-colors">Choose File / Screenshot</span>
                                                            </>
                                                        )}
                                                    </label>
                                                </div>
                                                <p className="text-zinc-600 font-mono text-[10px] mt-2 uppercase tracking-wider">Max file size: 5MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 3D Animated Submit Button */}
                                <div className="relative group/btn-container pt-8 pb-4">
                                    {/* Shadow/Depth Layer */}
                                    <div className="absolute inset-x-0 bottom-2 top-10 bg-red-900 rounded-xl blur-[1px]" />

                                    <motion.button
                                        disabled={submittingState !== null}
                                        whileHover={{ y: -4, scale: 1.01 }}
                                        whileTap={{ y: 4, scale: 0.98 }}
                                        className="w-full relative py-6 bg-red-600 text-white font-cinzel font-bold text-2xl tracking-[0.4em] uppercase overflow-hidden rounded-xl shadow-[0_8px_0_rgb(153,27,27),0_15px_20px_rgba(0,0,0,0.4)] transition-all duration-100 disabled:opacity-50 disabled:cursor-not-allowed group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                                        <span className="relative z-10 flex items-center justify-center gap-6" style={text3DStyle}>
                                            {submittingState !== null ? (
                                                <>
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        className="w-7 h-7 border-3 border-white/30 border-t-white rounded-full"
                                                    />
                                                    <span className="text-xl">{submittingState}</span>
                                                </>
                                            ) : (
                                                <>
                                                    CONFIRM ENTRY
                                                    <Send className="w-6 h-6 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" />
                                                </>
                                            )}
                                        </span>
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success-message"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", duration: 1.5, bounce: 0.5 }}
                            className="text-center py-32 px-8 flex flex-col items-center justify-center relative z-50 min-h-[50vh]"
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.2 }}
                                className="relative mb-12 flex items-center justify-center"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-green-500/30 rounded-full blur-2xl"
                                />
                                <div className="w-28 h-28 bg-black/80 border-4 border-green-500/80 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.6),inset_0_0_20px_rgba(34,197,94,0.4)] relative z-10">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.6 }}
                                    >
                                        <CheckCircle2 className="w-16 h-16 text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,1)]" strokeWidth={2.5} />
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{
                                    textShadow: [
                                        "0px 0px 10px rgba(255,0,0,0.8), 4px 4px 0px rgba(153, 27, 27, 1)",
                                        "0px 0px 30px rgba(255,0,0,1), 8px 8px 0px rgba(153, 27, 27, 1)",
                                        "0px 0px 10px rgba(255,0,0,0.8), 4px 4px 0px rgba(153, 27, 27, 1)"
                                    ],
                                    scale: [1, 1.05, 1],
                                    y: [0, -10, 0]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="font-cinzel text-5xl md:text-7xl lg:text-8xl text-red-600 font-bold mb-16 tracking-widest uppercase cursor-default select-none"
                            >
                                ENTRY CONFIRMED
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                            >
                                <Link href="/">
                                    <button className="px-12 py-5 border-2 border-red-900/80 bg-black/50 text-red-500 font-mono text-lg uppercase tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all duration-300 rounded-xl shadow-[0_0_20px_rgba(255,0,0,0.2)] hover:shadow-[0_0_40px_rgba(255,0,0,0.6)]">
                                        Return to Surface
                                    </button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <SiteFooter />
        </main>
    );
}
