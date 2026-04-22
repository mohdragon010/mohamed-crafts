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
  {
    id: "efham",
    title: "Efham (افهم) – Learning Management System",
    description:
      "A streamlined LMS platform designed to manage educational content, assignments, and quizzes for single-subject environments.",
    longDescription:
      "Efham is a dedicated Learning Management System built to bridge the gap between teachers and students. It features a robust Teacher Dashboard for managing students, creating assignments, and building quizzes, alongside a Student Dashboard for submissions and performance tracking. The app utilizes a relational Firestore schema to maintain data integrity across users, grades, and course materials.",
    features: [
      "Teacher Dashboard for student and class management",
      "Quiz Builder and Assignment Hub with deadline tracking",
      "Student portal for assignment submissions and active quizzes",
      "Unified Gradebook for manual and automatic performance tracking",
      "Role-based access control (Teacher vs. Student)",
      "Real-time data synchronization with Firestore",
      "Progress monitoring via a dedicated 'My Grades' section",
      "Clean, distraction-free UI using ShadCN and Tailwind CSS",
    ],
    techStack: [
      "Next.js",
      "Firebase Authentication",
      "Cloud Firestore",
      "Tailwind CSS",
      "ShadCN",
      "Zustand",
    ],
    liveUrl: "https://efham.vercel.app",
    githubUrl: "https://github.com/mohdragon010/efham",
    status: "Completed",
    type: "Personal Project",
    image: "@/public/efham.png",
  },
  {
    id: "premium-base-store",
    title: "Premium Base – Corporate E-Commerce Solution",
    description:
      "A high-end, production-ready e-commerce platform featuring a cinematic design, advanced admin customization, and robust security architecture.",
    longDescription:
      "Premium Base Store is a modular e-commerce engine built for high-end brands. It features a glassmorphic UI with cinematic elements like dynamic video players and Framer Motion animations. Beyond the storefront, it includes a powerful Admin Dashboard that allows for deep site customization (feature blocks, brand story, and dynamic footers) and implements advanced security through high-level Firestore rules and atomic inventory protection.",
    features: [
      "Cinematic Homepage with dynamic hero video and glassmorphic UI",
      "Advanced Admin Dashboard for full site and inventory management",
      "Deep customization of feature blocks, brand story, and social links",
      "High-Security Firestore Rules with Role-Based Access Control (RBAC)",
      "Atomic Inventory Shield to prevent stock overselling and price tampering",
      "Premium checkout flow with real-time stock and price integrity",
      "Dynamic filtering system by categories, price, and arrivals",
      "Global theming control (logos, brand identity, and accents) from admin",
      "Fully responsive and optimized for mobile, tablet, and ultra-wide screens",
    ],
    techStack: [
      "Next.js 14",
      "Firebase / Firestore",
      "Tailwind CSS",
      "Framer Motion",
      "Cloudinary",
      "Shadcn UI",
      "Radix UI",
    ],
    liveUrl: "https://base-store-two.vercel.app",
    githubUrl: "https://github.com/mohdragon010/base-store",
    status: "Completed",
    type: "Personal Project",
    image: "@/public/premium-base-store.png",
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
