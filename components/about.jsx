"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="w-full py-24 md:py-32 bg-background flex justify-center border-t border-b">
            <div className="container px-4 md:px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-8"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-primary">About</h2>

                    <div className="space-y-6">
                        <p className="text-2xl md:text-3xl font-medium text-foreground leading-tight">
                            I’m a frontend developer who enjoys building clean and thoughtful user interfaces.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            I focus on building modern web interfaces using React and Next.js, with a strong emphasis on clarity, structure, and performance. I enjoy turning complex ideas into simple, intuitive user experiences and writing clean, maintainable code.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}