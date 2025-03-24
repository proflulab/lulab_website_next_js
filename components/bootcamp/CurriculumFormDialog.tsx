'use client';

import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import CurriculumForm from './CurriculumForm';

interface Curriculum {
    id?: string;
    project_id: string;
    title: string;
    description: string;
    week: number;
    topics: string[];
    goals: string[] | null;
}

interface CurriculumFormDialogProps {
    isOpen: boolean;
    onClose: () => void;
    curriculum?: Curriculum;
    projectId: string;
    onSubmit: (curriculum: Curriculum) => void;
}

export default function CurriculumFormDialog({
    isOpen,
    onClose,
    curriculum,
    projectId,
    onSubmit
}: CurriculumFormDialogProps) {
    const handleSubmit = (curriculum: Curriculum) => {
        onSubmit(curriculum);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>{curriculum ? 'Edit Curriculum' : 'Add New Curriculum'}</DialogTitle>
                </DialogHeader>
                <CurriculumForm
                    curriculum={curriculum}
                    projectId={projectId}
                    onSubmit={handleSubmit}
                    onCancel={onClose}
                />
            </DialogContent>
        </Dialog>
    );
}