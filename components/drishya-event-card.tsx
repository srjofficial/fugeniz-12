import { Clock, MapPin } from "lucide-react"

interface DrishyaEventCardProps {
    name: string
    time: string
    location: string
    index: number
}

export default function DrishyaEventCard({ name, time, location, index }: DrishyaEventCardProps) {
    // Format index to always be 2 digits
    const formattedIndex = String(index + 1).padStart(2, "0");

    return (
        <div className="group relative border border-white/5 bg-[#0a0a0a] hover:border-red-500/30 transition-all duration-300 p-6 flex flex-col gap-4 overflow-hidden">
            {/* Hover Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex justify-between items-start relative z-10">
                <span className="font-mono text-[10px] font-bold text-red-500/60 tracking-[0.3em] uppercase">
                    #{formattedIndex}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors duration-300" />
            </div>

            <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-sans font-black text-white tracking-tight leading-[1.1] group-hover:text-red-500 transition-colors duration-300">
                    {name}
                </h3>
            </div>

            <div className="flex flex-col gap-3 border-t border-white/5 pt-5 relative z-10">
                <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-white/40 group-hover:text-white/60 transition-colors duration-300">
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500/50" />
                    <span className="truncate tracking-wide">{location}</span>
                </div>
                <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-white/40 group-hover:text-white/60 transition-colors duration-300">
                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500/50" />
                    <span className="truncate tracking-wide">{time}</span>
                </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-red-500" />
                <div className="absolute top-0 right-0 h-full w-[1px] bg-red-500" />
            </div>
        </div>
    )
}
