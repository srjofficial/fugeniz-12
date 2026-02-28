import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageHeaderProps {
    title: string
    subtitle: string
    description: string
    backLink?: string
    backLabel?: string
}

export default function PageHeader({ title, subtitle, description, backLink, backLabel }: PageHeaderProps) {
    return (
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#050505] grid-bg noise-overlay pt-20 lg:pt-0">
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.08)_0%,transparent_70%)]" />

            <div className="relative z-10 text-center px-4">
                {/* Back link */}
                {backLink && (
                    <Link
                        href={backLink}
                        className="inline-flex items-center gap-2 text-[10px] font-mono text-white/40 tracking-widest hover:text-red-500 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {backLabel || "BACK"}
                    </Link>
                )}

                {/* Top label */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="h-px w-8 bg-red-500/50" />
                    <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-red-500/80 uppercase">
                        {subtitle}
                    </span>
                    <span className="h-px w-8 bg-red-500/50" />
                </div>

                {/* Main title */}
                <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-sans font-bold tracking-tighter leading-none text-white">
                    {title}
                </h1>

                {/* Description */}
                <p className="text-sm md:text-base font-mono text-white/40 mt-6 max-w-md mx-auto">
                    {description}
                </p>
            </div>
        </section>
    )
}
