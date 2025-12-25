"use client";

import { Terminal, Code, Palette, Zap, GitGraph } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Skills() {
    const skills = [
        {
            category: "Frontend Core",
            icon: <Code className="w-5 h-5" />,
            items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Next.js"],
            color: "text-blue-500",
            bgHover: "hover:bg-blue-500/5",
            borderHover: "hover:border-blue-500/50",
            badgeHover: "group-hover/card:bg-blue-500/10 group-hover/card:text-blue-500",
        },
        {
            category: "Styling & UI",
            icon: <Palette className="w-5 h-5" />,
            items: ["Tailwind CSS", "Shadcn UI", "Framer Motion", "MUI", "Responsive Design"],
            color: "text-purple-500",
            bgHover: "hover:bg-purple-500/5",
            borderHover: "hover:border-purple-500/50",
            badgeHover: "group-hover/card:bg-purple-500/10 group-hover/card:text-purple-500",
        },
        {
            category: "Tools & DevOps",
            icon: <GitGraph className="w-5 h-5" />,
            items: ["Git", "GitHub", "Vercel", "Firebase", "Firestore","Zustand"],
            color: "text-green-500",
            bgHover: "hover:bg-green-500/5",
            borderHover: "hover:border-green-500/50",
            badgeHover: "group-hover/card:bg-green-500/10 group-hover/card:text-green-500",
        },
    ];

    return (
        <section id="skills" className="relative w-full py-24 md:py-32 bg-background flex flex-col items-center overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 w-[500px] h-[500px] bg-secondary/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="container relative px-4 md:px-6 max-w-6xl z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary flex items-center justify-center gap-3">
                            <Terminal className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                            Technical Skills
                        </h2>
                        <div className="h-1.5 w-24 bg-linear-to-r from-primary/10 via-primary/50 to-primary/10 mt-4 rounded-full mx-auto" />
                        <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
                            Tools and technologies I use to build clean, modern web interfaces.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center w-full">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className={`h-full bg-background/50 backdrop-blur-sm border-border/50 shadow-sm hover:shadow-md transition-all duration-300 group/card ${skill.bgHover} ${skill.borderHover}`}>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className={`text-lg font-semibold flex items-center gap-2 transition-colors ${skill.color}`}>
                                            <div className="p-2 rounded-lg bg-background border border-border/50 shadow-sm group-hover/card:scale-110 transition-transform duration-300">
                                                {skill.icon}
                                            </div>
                                            {skill.category}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.items.map((item, idx) => (
                                            <Badge
                                                key={idx}
                                                variant="secondary"
                                                className={`px-3 py-1 text-sm bg-background/50 border border-border/50 transition-colors duration-300 cursor-default ${skill.badgeHover}`}
                                            >
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
