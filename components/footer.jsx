"use client"

import Link from "next/link"
import { Github, Facebook, Phone, Mail, Heart, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t bg-background/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/50">
                                Mohamed Crafts
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
                            Building digital experiences that blend design and technology. Let's create something engineering excellence together.
                        </p>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" size="icon" asChild className="rounded-full hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all">
                                <a href="https://github.com/mohdragon010" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-5 h-5" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild className="rounded-full hover:border-blue-600/50 hover:bg-blue-600/5 hover:text-blue-600 transition-all">
                                <a href="https://facebook.com/mohamed.ayman.119778" target="_blank" rel="noopener noreferrer">
                                    <Facebook className="w-5 h-5" />
                                    <span className="sr-only">Facebook</span>
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild className="rounded-full hover:border-green-500/50 hover:bg-green-500/5 hover:text-green-500 transition-all">
                                <a href="https://wa.me/201027118875" target="_blank" rel="noopener noreferrer">
                                    <Phone className="w-5 h-5" />
                                    <span className="sr-only">WhatsApp</span>
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild className="rounded-full hover:border-red-500/50 hover:bg-red-500/5 hover:text-red-500 transition-all">
                                <a href="mailto:mohammed.ayman152433@gmail.com">
                                    <Mail className="w-5 h-5" />
                                    <span className="sr-only">Email</span>
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-3">
                        <h3 className="font-semibold text-foreground mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                                    About
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                                    Skills
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                                    Projects
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact/CTA */}
                    <div className="md:col-span-4 space-y-6">
                        <h3 className="font-semibold text-foreground">Get in touch</h3>
                        <p className="text-muted-foreground">
                            Currently open to new opportunities and collaborations. Have a project in mind?
                        </p>
                        <Button size="lg" className="w-full sm:w-auto rounded-full group">
                            <a href="mailto:mohammed.ayman152433@gmail.com" className="flex items-center gap-2">
                                Say Hello
                                <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                            </a>
                        </Button>
                    </div>
                </div>

                <Separator className="my-12 bg-border/50" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
                    <p>
                        © {currentYear} Mohamed Crafts. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1.5">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> using Next.js
                    </p>
                </div>
            </div>
        </footer>
    )
}
