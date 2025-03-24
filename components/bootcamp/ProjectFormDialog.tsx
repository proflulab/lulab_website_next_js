'use client';

import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import ProjectForm from './ProjectForm';

interface Project {
    id?: string;
    title: string;
    subtitle: string;
    category: string;
    image: string;
    duration: string;
    level: string;
    max_students: number;
    description: string;
    slug: string;
    prerequisites: string[];
    outcomes: string[];
}

interface ProjectFormDialogProps {
    isOpen: boolean;
    onClose: () => void;
    project?: Project;
    onSubmit: (project: Project) => void;
}

export default function ProjectFormDialog({
    isOpen,
    onClose,
    project,
    onSubmit
}: ProjectFormDialogProps) {
    const handleSubmit = (project: Project) => {
        onSubmit(project);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{project ? 'Edit Project' : 'Add New Project'}</DialogTitle>
                </DialogHeader>
                <ProjectForm
                    project={project}
                    onSubmit={handleSubmit}
                    onCancel={onClose}
                />
            </DialogContent>
        </Dialog>
    );
}