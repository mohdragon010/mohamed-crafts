"use client"

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Folder, ArrowRight } from "lucide-react";
import { useStore } from "@/stores/useStore";


export default function ProjectCard({ project }) {
    const setIsProjectModalOpen = useStore(s => s.setIsProjectModalOpen)
    const setProject = useStore(s => s.setProject)
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-full"
        >
            <Card className="flex flex-col h-full bg-card hover:shadow-lg transition-shadow duration-300 border-muted-foreground/20 group relative mt-3 overflow-hidden hover:border-white"
                onClick={() => {
                    setIsProjectModalOpen(true)
                    setProject(project)
                }}
            >
                <CardHeader className="p-6 pb-2">
                    <div className="flex justify-between items-start">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Folder className="w-5 h-5" />
                        </div>
                        <div className="text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all duration-300">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="p-6 pt-4 grow flex flex-col">
                    <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.techStack.map((stack, i) => (
                            <Badge key={i} variant="secondary" className="font-normal text-xs bg-secondary/50 hover:bg-secondary">
                                {stack}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}