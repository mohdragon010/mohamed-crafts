"use client"

import ProjectCard from "./project-card"
import ProjectModal from "./projectModal"

const projects = [
  {
    id: "vertex",
    title: "Vertex – Team Management Reimagined",
    description:
      "A modern team collaboration platform featuring workspaces, projects, tasks, and real-time team chat with smart notifications.",
    longDescription:
      "Vertex is a comprehensive team collaboration tool designed for speed and clarity. It integrates project management with real-time communication, featuring role-based permissions, an invitation-based membership system, and an advanced chat system with edit history and seen receipts. Built with React 19 and Next.js 16, it focuses on instant updates via Firestore listeners and a clean, system-aware user experience.",
    features: [
      "Workspaces and projects with role-based permissions",
      "Task management with prioritization and status flows",
      "Real-time team chat with edit history and seen receipts",
      "Invitation-based system with a dedicated notification inbox",
      "Smart notifications with unread counts and filtering",
      "User profiles with bio, stats, and personal task feeds",
      "Advanced settings for account, appearance, and security",
      "Light and dark mode with polished system-aware toggles",
      "Optimized SEO with dynamic OG images and PWA support",
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS 4",
      "Zustand",
      "Firebase Auth",
      "Cloud Firestore",
      "Cloudinary",
      "Framer Motion",
    ],
    liveUrl: "https://vertex-team.vercel.app",
    githubUrl: "https://github.com/mohdragon010/vertex",
    status: "Completed",
    type: "Personal Project",
    image: "@/public/vertex.png",
  },
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
