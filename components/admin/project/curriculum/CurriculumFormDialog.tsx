/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-03-25 12:23:13
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-26 12:13:39
 * @FilePath: /lulab_website_next_js/components/admin/project/curriculum/CurriculumFormDialog.tsx
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
import CurriculumForm from './CurriculumForm';
import { Curriculum } from '@/types';

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