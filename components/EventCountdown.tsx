"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
    targetDate: string;
    targetTime: string;
}

export default function EventCountdown({ targetDate, targetTime }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        // Parse the target string
        // Assuming targetDate is like "March 11, 2026"
        // And targetTime is like "11:30 AM to 1:30 PM", we just take the first part "11:30 AM"

        try {
            const startTimeString = targetTime.split(" to ")[0];
            const dateString = `${targetDate} ${startTimeString}`;
            const target = new Date(dateString).getTime();

            const interval = setInterval(() => {
                const now = new Date().getTime();
                const difference = target - now;

                if (difference <= 0) {
                    clearInterval(interval);
                    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                } else {
                    setTimeLeft({
                        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                        seconds: Math.floor((difference % (1000 * 60)) / 1000),
                    });
                }
            }, 1000);

            return () => clearInterval(interval);
        } catch (e) {
            console.error("Error parsing date for countdown:", e);
        }
    }, [targetDate, targetTime]);

    if (!isClient) return null; // Avoid hydration mismatch

    const timeUnits = [
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINUTES", value: timeLeft.minutes },
        { label: "SECONDS", value: timeLeft.seconds },
    ];

    return (
        <div className="mb-12 p-6 md:p-8 bg-black/40 border border-red-900/30 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm">
            <h3 className="font-mono text-sm text-red-500/80 tracking-widest uppercase mb-6 text-center">
                TIME TO PROTOCOL INITIATION
            </h3>
            <div className="flex gap-4 md:gap-8 justify-center w-full">
                {timeUnits.map((unit, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <div className="text-3xl md:text-5xl lg:text-6xl font-black font-mono text-white tracking-tighter drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                            {unit.value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-[10px] md:text-xs text-red-500/60 font-mono mt-2 tracking-widest">
                            {unit.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
