import { notFound } from "next/navigation"
import EventDetailView from "@/components/event-detail-view"
import { getEventBySlug, getAllEventSlugs } from "@/lib/utils"

interface EventPageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return getAllEventSlugs()
}

export default async function EventPage({ params }: EventPageProps) {
    const { slug } = await params
    const event = getEventBySlug(slug)

    if (!event) {
        notFound()
    }

    return <EventDetailView event={event} />
}

