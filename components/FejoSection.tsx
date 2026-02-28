"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FejoSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: "url('/images/home/fejobg.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* MAIN CONTENT */}
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-0">

                {/* LEFT IMAGE */}
                <div
                    className={`flex justify-start items-end transition-all duration-1000
          ${visible ? "opacity-50 translate-x-0" : "opacity-0 -translate-x-32"}`}
                >
                    <div className="relative -ml-12">
                        {/* Base Image */}
                        <Image
                            src="/images/home/leftbg.png"
                            alt="Fejo Left"
                            width={1000}
                            height={1400}
                            className="object-contain"
                        />
                        {/* Overlapping Image */}
                        <Image
                            src="/images/home/fejofinal.png"
                            alt="Fejo Black Overlay"
                            width={700}
                            height={1200}
                            className="absolute inset-0 object-contain scale-100 translate-y-24 md:scale-100 md:translate-y-36"
                        />
                    </div>
                </div>

                {/* CENTER IMAGE */}
                <div className="flex flex-col items-center justify-center my-8 md:my-0">
                    <Image
                        src="/images/home/fejogold.png"
                        alt="THIS IS NOT A CONCERT THIS IS FEJO"
                        width={800}
                        height={300}
                        className="object-contain w-[90%] md:w-[60%] h-auto drop-shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-transform duration-700 hover:scale-105"
                    />
                    <h2 className="font-asoka text-red-600 text-sm md:text-4xl tracking-[0.3em] md:tracking-[0.5em] mt-8 animate-pulse whitespace-nowrap">
                        THE MALLU RAPPER
                    </h2>
                </div>

                {/* RIGHT IMAGE */}
                <div
                    className={`flex justify-end items-end transition-all duration-1000 -mr-12 md:mb-[-160px]
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"}`}
                >
                    <Image
                        src="/images/home/redfejo.png"
                        alt="Fejo Right"
                        width={1200}
                        height={1500}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
