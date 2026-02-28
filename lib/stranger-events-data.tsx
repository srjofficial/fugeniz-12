import { ReactNode } from "react";
import { QrCode, BrainCircuit } from "lucide-react";

export type EventData = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    icon: ReactNode;
    date?: string;
    time?: string;
    venue?: string;
    registrationFee?: string;
    feeLabel?: string;
};

export const eventsData: Record<string, EventData> = {
    "scan-seek": {
        id: "scan-seek",
        title: "Scan & Seek",
        subtitle: "The Physical-Digital Scavenger Hunt",
        description: "Navigate the campus using high-tech clues. This event blends real-world exploration with algorithmic puzzles. Scan the hidden QR codes to unlock your next destination—but be warned: the riddles get harder as you go!",
        image: "/home/scan-seek.png",
        icon: <QrCode className="w-8 h-8 text-red-500" />,
        date: "March 5, 2026",
        registrationFee: "150",
    },
    "pixel-decode": {
        id: "pixel-decode",
        title: "Pixel Decode",
        subtitle: "An AI Image Generation",
        description: "In Pixel Decode, participants must craft precise, complex prompts to recreate a 'Target Image' using AI. It's a battle of vocabulary, aesthetics, and technical understanding of generative models.",
        image: "/home/pixel-decode.png",
        icon: <BrainCircuit className="w-8 h-8 text-red-500" />,
        date: "March 5, 2026",
        registrationFee: "40",
        feeLabel: "per head"
    }
};
