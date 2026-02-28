
import DrishyaHero from "@/components/drishya-hero"
import DrishyaEventCard from "@/components/drishya-event-card"
import TeamSection from "@/components/TeamSection"
import Footer from "@/components/SiteFooter"
import { artsEvents } from "@/lib/events-data"
import { ImageAutoSlider } from "@/components/ui/image-auto-slider"
import MenuButton from "@/components/MenuButton"

export default function DrishyaPage() {
    const day1Events = artsEvents.filter((event) => event.date === "2026-02-27")
    const day2Events = artsEvents.filter((event) => event.date === "2026-02-28")

    return (
        <main className="relative bg-[#050505] min-h-screen">
            <MenuButton />

            <DrishyaHero />
            <ImageAutoSlider />

            {/* Events Sections */}
            <div className="py-16 px-4 max-w-7xl mx-auto space-y-24">

                {/* Day 1 Section */}
                <section>
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-12 bg-red-500/30" />
                            <span className="text-[10px] font-mono text-red-500/60 tracking-[0.3em] uppercase">
                                Day 01
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                            27 FEBRUARY 2026
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {day1Events.map((event, index) => (
                            <DrishyaEventCard
                                key={event.name}
                                name={event.name}
                                time={event.time || "10:00 AM"}
                                location={event.location || "Venue"}
                                index={index}
                            />
                        ))}
                    </div>
                </section>

                {/* Day 2 Section */}
                <section>
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-12 bg-red-500/30" />
                            <span className="text-[10px] font-mono text-red-500/60 tracking-[0.3em] uppercase">
                                Day 02
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                            28 FEBRUARY 2026
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {day2Events.map((event, index) => (
                            <DrishyaEventCard
                                key={event.name}
                                name={event.name}
                                time={event.time || "10:00 AM"}
                                location={event.location || "Venue"}
                                index={index + day1Events.length}
                            />
                        ))}
                    </div>
                </section>

            </div>


            <Footer />
        </main>
    )
}
