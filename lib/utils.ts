import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { eventZones } from "./events-data"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getEventBySlug(slug: string) {
  // Flatten all events from all zones
  const allEvents = eventZones.flatMap(zone =>
    zone.events.map(event => ({
      ...event,
      zoneId: zone.id,
      zoneTitle: zone.title,
      // Generate a slug if one doesn't exist
      slug: (event.name || "").toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    }))
  )

  return allEvents.find(event => event.slug === slug)
}

export function getAllEventSlugs() {
  return eventZones.flatMap(zone =>
    zone.events.map(event => ({
      slug: (event.name || "").toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    }))
  )
}
