"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
    Sheet,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetHeader,
} from "@/components/ui/sheet"
import { Code, Folder, House, Info, Menu, Phone, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";


export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const links = [
        { name: "Home", href: "#", icon: <House /> },
        { name: "About", href: "#about", icon: <Info /> },
        { name: "Skills", href: "#skills", icon: <Code /> },
        { name: "Projects", href: "#projects", icon: <Folder /> },
        { name: "Contact", href: "#contact", icon: <Phone /> },
    ]
    const [open, setOpen] = useState(false);

    const navList = {
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
    }

    const navItem = {
        hidden: { y: -8, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
    }

    const mobileList = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.06 } },
    }

    const mobileItem = {
        hidden: { x: 12, opacity: 0 },
        show: { x: 0, opacity: 1, transition: { duration: 0.28, ease: "easeOut" } },
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <motion.header
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b max-h-16"
        >
            <nav className="flex justify-between p-2 max-w-5xl mx-auto items-center">
                {/* Logo */}
                <motion.div variants={navItem} whileHover={{ scale: 1.03 }} className="mx-2">
                    <Link href="/" className="font-semibold text-lg">Mohamed.dev</Link>
                </motion.div>

                {/* Desktop Links & Theme Toggle */}
                <div className="flex items-center gap-4">
                    <motion.div className="hidden md:flex items-center" variants={navList} initial="hidden" animate="show">
                        {links.map(link => (
                            <motion.div key={link.name} variants={navItem} whileHover={{ y: -2 }} className="mx-3 text-sm hover:text-primary transition">
                                <Link href={link.href}>{link.name}</Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Theme Toggle Button (Desktop) */}
                    {mounted && (
                        <motion.button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ rotate: 15 }}
                            className="p-2 rounded-full hover:bg-muted/50 transition-colors hidden md:block"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>
                    )}
                </div>

                {/* Mobile sheet */}
                <div className="md:hidden flex items-center gap-2">
                    {/* Theme Toggle Button (Mobile) */}
                    {mounted && (
                        <motion.button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-full hover:bg-muted/50 transition-colors"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>
                    )}

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <motion.button
                                aria-label="Open menu"
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                                animate={{ rotate: open ? 90 : 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="p-3 h-auto w-auto cursor-pointer"
                            >
                                <Menu />
                            </motion.button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader className="px-4 py-6 border-b">
                                <SheetTitle className="text-xl font-bold">
                                    Portfolio Navigation
                                </SheetTitle>
                            </SheetHeader>
                            <motion.div className="flex flex-col w-full py-4" variants={mobileList} initial="hidden" animate={open ? "show" : "hidden"}>
                                {links.map(link => (
                                    <SheetClose asChild key={link.name}>
                                        <motion.div variants={mobileItem}>
                                            <Link
                                                href={link.href}
                                                className="flex items-center px-4 py-3 text-lg transition-colors text-foreground hover:bg-muted/50"
                                            >
                                                <span className="text-xl mr-4">{link.icon}</span>
                                                <span>{link.name}</span>
                                            </Link>
                                        </motion.div>
                                    </SheetClose>
                                ))}
                            </motion.div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </motion.header>
    )
}