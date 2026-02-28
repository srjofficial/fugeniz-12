"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MentalistSection() {
    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center">

            <div className="w-full px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center h-full">

                {/* ================= LEFT COLUMN ================= */}
                <div className="relative flex justify-center md:justify-start h-full items-center">

                    {/* Wrapper controls alignment */}
                    <div className="relative w-[320px] sm:w-[380px] md:w-[450px] lg:w-[500px]">

                        {/* 🔴 Ring (DO NOT SCALE WITH PERSON) */}
                        <div
                            className="
                absolute
                top-[5%]
                left-1/5
                -translate-x-1/2
                w-[350px] md:w-[420px] lg:w-[500px]
                aspect-square
                animate-spinSlow
                opacity-60
                z-0
                pointer-events-none
              "
                        >
                            <Image
                                src="/images/home/redring.png"
                                alt="Ring"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* 🧠 PERSON (BIGGER ONLY PERSON) */}
                        <Image
                            src="/images/home/metalist-person.png"
                            alt="Mentalist Anandhu"
                            width={800}
                            height={1200}
                            className="
                relative z-10
                w-[340px]
                sm:w-[410px]
                md:w-[520px]
                lg:w-[610px]
                object-contain
              "
                            priority
                        />
                    </div>
                </div>

                {/* ================= RIGHT COLUMN ================= */}
                <div className="flex flex-col justify-end items-center md:items-end mt-12 md:mt-0 md:h-full pb-0 md:pb-0">

                    <motion.div
                        className="text-center md:text-right"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >

                        <h2 className="
              font-asoka
              font-bold
              text-[#8B0000]
              leading-none
              text-5xl
              sm:text-8xl
              md:text-8xl
              lg:text-[10rem]
              tracking-[0.12em]
            ">
                            MENTALIST
                        </h2>

                        <h3 className="
              font-asoka
              font-bold
              text-white
              mt-4
              text-4xl
              sm:text-8xl
              md:text-7xl
              lg:text-[9rem]
              tracking-widest
            ">
                            ANANDHU
                        </h3>

                    </motion.div>
                </div>

            </div>

            {/* Subtle depth overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

        </section>
    );
}
