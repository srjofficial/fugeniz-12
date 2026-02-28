import { notFound } from "next/navigation"

import Footer from "@/components/SiteFooter"
import TeamSection from "@/components/TeamSection"
import DeptEventsContent from "@/components/dept-events-content"
import { departments, technicalEvents } from "@/lib/events-data"

interface DeptPageProps {
    params: Promise<{ dept: string }>
}

export async function generateStaticParams() {
    return departments.map((dept) => ({
        dept: dept.slug,
    }))
}

export default async function DeptEventsPage({ params }: DeptPageProps) {
    const { dept: deptSlug } = await params

    const department = departments.find((d) => d.slug === deptSlug)

    if (!department) {
        notFound()
    }

    const events = department.events


    return (
        <main className="relative bg-[#050505] min-h-screen">
            <DeptEventsContent department={department} events={events} />

            <Footer />
        </main>
    )
}
