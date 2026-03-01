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
    rules?: ReactNode[]; // Added optional rules array
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
        registrationFee: "80",
        rules: [
            <span key="1"><strong>Team Structure:</strong> 2-3 members per team.</span>,
            <span key="2"><strong>Equipment:</strong> Each team will be provided with one dedicated mobile device.</span>,
            <span key="3"><strong>The Workflow:</strong> Scan the QR code at the station.<br /><br />Answer the Kusruthi Chodyam (Brain-Teaser).<br />- If Correct: You receive the clue to the next location.<br />- If Wrong:  You face a "System Failure." You must record the assigned video task on your device to unlock the next clue.</span>,
            <span key="4"><strong>The Finish Line:</strong> The winner is determined by the fastest total time recorded on the IEEE CIS Master.</span>,
            <span key="5"><strong>Evidence Audit:</strong> At the final desk, organizers will verify your "Wrong Answer" count against your phone gallery.</span>
        ]
    },
    "pixel-decode": {
        id: "pixel-decode",
        title: "Pixel Decode",
        subtitle: "An AI Image Generation",
        description: "In Pixel Decode, participants must craft precise, complex prompts to recreate a 'Target Image' using AI. It's a battle of vocabulary, aesthetics, and technical understanding of generative models.",
        image: "/home/pixel-decode.png",
        icon: <BrainCircuit className="w-8 h-8 text-red-500" />,
        date: "March 5, 2026",
        registrationFee: "50",
        rules: [
            <span key="1"><strong>The Challenge:</strong> Participants are given a target image or a complex theme (e.g., "SNGCE Campus in the year 2050").</span>,
            <span key="2"><strong>Prompt Engineering:</strong> You must write a precise text prompt to get the AI to generate the most accurate or creative output.</span>,
            <span key="3">
                <strong>Constraints:</strong><br />
                - Maximum 50 words per prompt.<br />
                - Only 3 attempts allowed per round.<br />
                - No use of pre-written scripts or external AI tools.
            </span>,
            <span key="4">
                <strong>Judging Criteria:</strong><br />
                - <i>Visual Accuracy:</i> How close the result matches the target/theme.<br />
                - <i>Prompt Efficiency:</i> Skillful use of keywords and descriptive tokens.<br />
                - <i>Creativity:</i> Unique artistic direction.
            </span>
        ]
    }
};
