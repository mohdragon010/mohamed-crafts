"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { useStore } from "@/stores/useStore"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ProjectModal() {
    const isProjectModalOpen = useStore((state) => state.isProjectModalOpen)
    const setIsProjectModalOpen = useStore((state) => state.setIsProjectModalOpen)
    const project = useStore((state) => state.project)

    if (!project) return null

    // Helper to fix the path provided in user data which uses @/public alias
    // In a real scenario, correct the data source, but here we handle it gracefully
    const imagePath = project.image ? project.image.replace('@/public', '') : null

    return (
        <Dialog open={isProjectModalOpen} onOpenChange={setIsProjectModalOpen}>
            <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto sm:rounded-xl p-0 gap-0">

                {/* Image Section */}
                {imagePath && (
                    <div className="relative w-full h-56 sm:h-64 bg-muted">
                        <Image
                            src={imagePath}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                            unoptimized // Since we are using local files that might not be processed ideally in this dev env setup without restart
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent" />

                        <div className="absolute bottom-4 left-6 right-6">
                            <div className="flex gap-2 mb-2">
                                <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm border-white/10">
                                    {project.type}
                                </Badge>
                                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/20 backdrop-blur-sm">
                                    {project.status}
                                </Badge>
                            </div>
                            <DialogTitle className="text-3xl font-bold text-foreground tracking-tight shadow-black drop-shadow-sm">
                                {project.title}
                            </DialogTitle>
                        </div>
                    </div>
                )}

                <div className="p-6 space-y-6">
                    {/* Header if no image, otherwise just spacing */}
                    {!imagePath && (
                        <DialogHeader>
                            <div className="flex gap-2 mb-2">
                                <Badge variant="secondary">{project.type}</Badge>
                                <Badge variant="outline">{project.status}</Badge>
                            </div>
                            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                        </DialogHeader>
                    )}

                    {/* Description */}
                    <div className="space-y-4">
                        <DialogDescription className="text-base leading-relaxed text-foreground/90">
                            {project.longDescription || project.description}
                        </DialogDescription>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                            <Layers className="w-4 h-4" />
                            Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack?.map((stack, i) => (
                                <Badge key={i} variant="outline" className="bg-muted/50">
                                    {stack}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    {project.features && (
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                                <Zap className="w-4 h-4" />
                                Key Features
                            </div>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
                        {project.liveUrl && (
                            <Button className="flex-1 gap-2" asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" />
                                    Visit Live Demo
                                </a>
                            </Button>
                        )}
                        {project.githubUrl && (
                            <Button variant="outline" className="flex-1 gap-2" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4" />
                                    View Source
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
