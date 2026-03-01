"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaArrowRight, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="contact" className="relative w-full bg-black/85 text-white overflow-hidden">
            {/* Large Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                <h2 className="font-cinzel font-bold text-6xl md:text-8xl lg:text-[12rem] tracking-widest text-red-600 whitespace-nowrap drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                    FUGENIZ 12th
                </h2>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* College and Community Sections */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    {/* SNGCE Section */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 md:h-12 rounded-lg overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                <img src="/home/sngce-logo.jpg" alt="SNGCE Logo" className="h-full w-auto object-cover" onError={(e) => { e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/SNGCE_logo.png/220px-SNGCE_logo.png' }} />
                            </div>
                        </div>
                        <p className="text-red-500 font-sans text-xs md:text-sm tracking-wide mb-3">
                            Sree Narayana Gurukulam College of Engineering
                        </p>
                        <Link href="https://sngce.ac.in" className="flex items-center justify-center gap-2 text-white/70 hover:text-red-500 transition-colors duration-300 group">
                            <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase">Explore Campus</span>
                            <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* sngce ieee sb */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 md:h-12 rounded-lg overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                <img
                                    src="/home/student-brach-white-26-02-26_15-39-21-904.png"
                                    alt="SNGCE IEEE SB Logo"
                                    className="h-full w-auto object-contain"
                                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                                />
                            </div>
                        </div>
                        <p className="text-red-500 font-sans text-xs md:text-sm tracking-wide mb-3">
                            IEEE Student Branch SNGCE
                        </p>
                        {/* <Link href="/" className="flex items-center justify-center gap-2 text-white/70 hover:text-red-500 transition-colors duration-300 group">
                            <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase">Join Us</span>
                            <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                        </Link> */}
                    </div>

                    {/* IEEE CIS Section */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 md:h-12 rounded-lg overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                <img
                                    src="/home/cis.png"
                                    alt="IEEE CIS Logo"
                                    className="h-full w-auto object-contain"
                                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                                />
                            </div>
                        </div>
                        <p className="text-red-500 font-sans text-xs md:text-sm tracking-wide mb-3">
                            Computational Intelligence Society
                        </p>
                        {/* <Link href="/" className="flex items-center justify-center gap-2 text-white/70 hover:text-red-500 transition-colors duration-300 group">
                            <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase">Discover Events</span>
                            <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                        </Link> */}
                    </div>

                    {/* IEEE */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 md:h-12 rounded-lg overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                <img
                                    src="/home/ieee.png"
                                    alt="IEEE Logo"
                                    className="h-full w-auto object-contain"
                                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                                />
                            </div>
                        </div>
                        <p className="text-red-500 font-sans text-xs md:text-sm tracking-wide mb-3">
                            IEEE
                        </p>
                        <Link href="https://www.ieee.org/" className="flex items-center justify-center gap-2 text-white/70 hover:text-red-500 transition-colors duration-300 group">
                            <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase">Learn More</span>
                            <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>

                {/* Social & Banner Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                    {/* Social Section (Left Side) */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h4 className="font-cinzel text-sm tracking-wider text-gray-400 uppercase">
                            Social
                        </h4>
                        <Link
                            href="https://www.instagram.com/ieee_sngce_cis?igsh=MWVjMG95OW5zeTRybQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition-colors duration-300 group"
                        >
                            <FaInstagram size={24} className="text-gray-500 group-hover:text-red-500 transition-colors" />
                            <span className="font-cinzel tracking-wider text-sm font-bold">IEEE CIS</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/ieee-cis-sngce/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition-colors duration-300 group"
                        >
                            <FaLinkedin size={24} className="text-gray-500 group-hover:text-red-500 transition-colors" />
                            <span className="font-cinzel tracking-wider text-sm font-bold">IEEE CIS</span>
                        </Link>
                    </div>

                    {/* College Right Side */}
                    <div className="flex flex-col items-center md:items-end">
                        <div className="text-red-600 font-creepster text-3xl tracking-widest drop-shadow-[0_0_5px_rgba(220,38,38,0.5)]">
                            FUGENIZ 12th
                        </div>
                    </div>
                </div>

                {/* Main Contacts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 border-t border-red-900/30 pt-10 mt-6">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="font-cinzel text-red-500 tracking-widest text-lg font-bold hover:text-red-400 transition-colors">Riyan</h4>
                        <p className="font-sans text-[10px] md:text-xs text-red-400/80 uppercase tracking-[0.2em] mb-2 font-semibold">IEEE CIS SECRETARY</p>
                        <a href="tel:9496161498" className="font-mono text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_5px_rgba(220,38,38,1)] animate-pulse" />
                            9496161498
                        </a>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h4 className="font-cinzel text-red-500 tracking-widest text-lg font-bold hover:text-red-400 transition-colors">Abinson</h4>
                        <p className="font-sans text-[10px] md:text-xs text-red-400/80 uppercase tracking-[0.2em] mb-2 font-semibold">IEEE CIS CHAIR</p>
                        <a href="tel:9019263539" className="font-mono text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_5px_rgba(220,38,38,1)] animate-pulse" />
                            9019263539
                        </a>
                    </div>
                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                        <h4 className="font-cinzel text-red-500 tracking-widest text-lg font-bold hover:text-red-400 transition-colors">Krishnaindu K.S</h4>
                        <p className="font-sans text-[10px] md:text-xs text-red-400/80 uppercase tracking-[0.2em] mb-2 font-semibold">CHAPTER ADVISOR</p>
                        <a href="tel:8848835478" className="font-mono text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_5px_rgba(220,38,38,1)] animate-pulse" />
                            8848835478
                        </a>
                    </div>
                </div>

                {/* Website Developers */}
                <div className="flex flex-col items-center border-t border-red-900/30 pt-10 mb-10">
                    <h4 className="font-cinzel text-sm tracking-widest text-gray-400 uppercase mb-6">
                        Website Built By
                    </h4>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {/* Abinson Babu */}
                        <Link
                            href="https://www.instagram.com/ab._xn__son__"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition-colors duration-300 group"
                        >
                            <FaInstagram className="w-5 h-5 text-gray-500 group-hover:text-red-500 transition-colors" />
                            <span className="font-cinzel tracking-wider text-sm md:text-base font-bold">Abinson Babu</span>
                        </Link>

                        {/* Parthip Sasidharan */}
                        <Link
                            href="https://www.instagram.com/parthip_sasidharan/?next="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition-colors duration-300 group"
                        >
                            <FaInstagram className="w-5 h-5 text-gray-500 group-hover:text-red-500 transition-colors" />
                            <span className="font-cinzel tracking-wider text-sm md:text-base font-bold">Parthip Sasidharan</span>
                        </Link>

                        {/* Saroj S */}
                        <Link
                            href="https://www.instagram.com/thesarojs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition-colors duration-300 group"
                        >
                            <FaInstagram className="w-5 h-5 text-gray-500 group-hover:text-red-500 transition-colors" />
                            <span className="font-cinzel tracking-wider text-sm md:text-base font-bold">Saroj S</span>
                        </Link>
                    </div>
                </div>

                {/* Divider */}

                {/* Copyright */}
                <div className="text-center">
                    <p className="font-mono text-xs text-red-500/50">
                        © 2026 Fugeniz 12th. All rights reserved. Built with curiosity in the Upside Down.
                    </p>
                </div>
            </div>
        </footer>
    );
}
