"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Explicit Background Layer */}
            <div className="absolute inset-0 -z-50 bg-background" />

            {/* Grid Background */}
            <div
                className="absolute inset-0 -z-40 bg-grid-img opacity-50"
                style={{ maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black 100%)' }}
            />
            
            <div className="absolute inset-0 -z-20 pointer-events-none"
                style={{ maskImage: 'radial-gradient(ellipse at center, transparent 40%, black 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 40%, black 100%)' }}
            />

            {/* Atmospheric Glow Anchor - Increased Opacity */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/30 blur-[100px] rounded-full -z-30 dark:bg-indigo-500/20 mix-blend-normal" />

            <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10">

                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm border border-border mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-secondary-foreground">Available for work</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mb-6"
                >
                    Building digital products that <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">matter</span>.
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
                >
                    Frontend developer focused on building fast, clean, and intuitive web experiences with modern tools.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-primary-foreground bg-primary rounded-full overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/25">
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span>View My Work</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-foreground bg-secondary/50 backdrop-blur-sm border border-border rounded-full hover:bg-secondary/80 transition-colors">
                        <Mail className="w-4 h-4" />
                        <span>Contact me</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}