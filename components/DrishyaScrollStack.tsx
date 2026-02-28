"use client";

import React from 'react';
import Image from 'next/image';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

export default function DrishyaScrollStack() {
    const images = [
        { src: '/images/drishya/1.png', alt: 'Drishya Gallery 1', title: 'Expressions', desc: 'Capturing moments of pure joy and creativity.' },
        { src: '/images/drishya/2.png', alt: 'Drishya Gallery 2', title: 'Performance', desc: 'Showcasing the talent that lights up the stage.' },
        { src: '/images/drishya/3.png', alt: 'Drishya Gallery 3', title: 'Highlights', desc: 'Memorable scenes from past celebrations.' },
        { src: '/images/drishya/4.png', alt: 'Drishya Gallery 4', title: 'Legacy', desc: 'A tradition of excellence and artistry.' }
    ];

    return (
        <section className="relative w-full bg-[#050505]">
            <ScrollStack
                itemDistance={100}
                itemScale={0.05}
                rotationAmount={5}
                blurAmount={0}
                useWindowScroll={true}
            >
                {images.map((img, index) => (
                    <ScrollStackItem key={index} itemClassName="bg-transparent border-0 shadow-none !p-0 !h-[20rem] md:!h-[30rem] !w-[100%] md:!w-[60%] mx-auto overflow-visible">
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden isolate group shadow-2xl shadow-red-500/10 border border-white/10">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                quality={85}
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover will-change-transform"
                                style={{
                                    transform: 'translateZ(0)',
                                    backfaceVisibility: 'hidden'
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold font-asoka text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.title}
                                </h3>
                                <p className="text-white/70 font-mono text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {img.desc}
                                </p>
                            </div>
                        </div>
                    </ScrollStackItem>
                ))}
            </ScrollStack>
        </section>
    );
}
