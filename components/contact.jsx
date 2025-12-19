"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail, ArrowRight } from "lucide-react"

export default function Contact() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden" id="contact">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="container px-4 md:px-6 mx-auto max-w-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
                    Get in Touch
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
                    I'm currently looking for new opportunities and interesting projects.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both">
                    <Button size="lg" className="h-12 px-8 rounded-full text-base group" asChild>
                        <a href="mailto:mohammed.ayman152433@gmail.com">
                            <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                            Say Hello
                        </a>
                    </Button>

                    <Button variant="outline" size="lg" className="h-12 px-8 rounded-full text-base hover:bg-muted/50 transition-colors" asChild>
                        <a href="https://github.com/mohdragon010" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
