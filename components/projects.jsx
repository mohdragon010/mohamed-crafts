"use client"

import ProjectCard from "./project-card"
import ProjectModal from "./projectModal"

const projects = [
    {
        id: "ketra",
        title: "Ketra – Study Dashboard",
        description:
            "A modern study dashboard that helps students manage subjects, tasks, notes, and motivation in one place.",
        longDescription:
            "Ketra is a productivity-focused study dashboard built with Next.js. It includes subject-based task management, progress tracking, a rich text notes editor, and motivational quotes fetched from an external API. The app focuses on clean UI, smooth UX, and practical features for daily studying.",
        features: [
            "Subjects with custom colors and icons",
            "Task management (create, edit, delete, complete)",
            "Progress tracking per subject",
            "Rich text notes editor using Tiptap",
            "Quotes page with external API integration",
            "Downloadable quote images",
            "Modern dialogs and UI patterns",
            "Light and dark mode support",
        ],
        techStack: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "MUI",
            "Tiptap",
        ],
        liveUrl: "https://ketra.vercel.app",
        githubUrl: "https://github.com/mohdragon010/ketra",
        status: "Completed",
        type: "Personal Project",
        image: "@/public/ketra.png"
    },
    {
        id: "modmingle",
        title: "ModMingle – Minecraft Mod Discovery",
        description:
            "A web app for discovering, browsing, and downloading Minecraft mods with search and filtering.",
        longDescription:
            "ModMingle is a Minecraft mod discovery platform designed to make finding mods easier and faster. It provides categorized mod listings, search functionality, pagination, and detailed mod pages with download options and filters.",
        features: [
            "Homepage highlighting top mods with badges",
            "Mods listing page with search functionality",
            "Pagination for large mod collections",
            "Popular mods section",
            "Detailed mod pages with download options",
            "Filters for mod versions and categories",
            "Clean and responsive UI",
        ],
        techStack: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "MUI",
            "Framer-motion",
            "Modrinth-API"
        ],
        liveUrl: "https://modmingle.vercel.app",
        githubUrl: "https://github.com/mohdragon010/modmingle",
        status: "Completed",
        type: "Personal Project",
        image: "@/public/modmingle.png"
    },
    {
    id: "smart-product-dashboard",
    title: "Smart Product Dashboard",
    description:
        "A frontend dashboard demonstrating advanced client-side state management with filtering, sorting, and derived data.",
    longDescription:
        "Smart Product Dashboard is a frontend-focused project that showcases advanced state management patterns on the client side. It includes combined filters, sorting, search, and derived state such as filtered counts and average prices, with a clean and responsive UI. The project intentionally avoids backend complexity to focus on data flow and UI logic.",
    features: [
        "Products list with mock data",
        "Combined filters (category, price range, availability)",
        "Search by product name",
        "Sorting by price and rating",
        "Derived state (filtered count, average price)",
        "Clean and responsive UI",
        "Empty and loading states"
    ],
    techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Zustand",
        "shadcn/ui"
    ],
    liveUrl: "LIVE_DEMO_URL",
    githubUrl: "GITHUB_REPO_URL",
    status: "Completed",
    type: "Personal Project",
    image: "@/public/smart-product-dashboard.png"
}
];



export default function Projects() {
    return (
        <div id="projects" className="border-t p-20 bg-background">
            <h1 className="text-center text-4xl font-bold mb-10">Projects</h1>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">A selection of projects where I design, build, and refine real-world web interfaces.</p>
            <div className="flex flex-wrap justify-center gap-10 w-full">
                {projects.map((project, index) => (
                    <div key={index} className="w-full sm:w-[calc(50%-2.5rem)] lg:w-[calc(25%-2.5rem)] min-w-[300px]">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
            <ProjectModal />
            <p className="text-center text-muted-foreground mt-16 text-lg">
                Want to see more? Check my <a href="https://github.com/mohdragon010" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline underline-offset-4 transition-all">GitHub</a>
            </p>
        </div>
    )
}