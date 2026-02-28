"use client";

import Image from "next/image";

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">

            <div className="relative w-48 h-48 flex items-center justify-center">

                {/* Outer Ring */}
                <div className="absolute w-full h-full rounded-full border-t-2 border-red-500 animate-spin-slow"></div>

                {/* Middle Ring */}
                <div className="absolute w-40 h-40 rounded-full border-b-2 border-red-400 animate-spin-reverse"></div>

                {/* Inner Ring */}
                <div className="absolute w-32 h-32 rounded-full border-t-2 border-red-300 animate-spin-slow"></div>

                {/* Center Image */}
                <div className="relative w-24 h-24">
                    <Image
                        src="/images/loading.png"
                        alt="Loading"
                        fill
                        className="object-contain"
                    />
                </div>

            </div>
        </div>
    );
}
