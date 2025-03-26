/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-03-25 12:23:13
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-26 12:12:34
 * @FilePath: /lulab_website_next_js/components/admin/project/ProjectFormDialog.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */

'use client';

import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import ProjectForm from './ProjectForm';
import { Project } from '@/types';


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