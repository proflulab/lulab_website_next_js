'use client';

import React from 'react';
import ProjectManager from '../../../../../components/bootcamp/ProjectManager';

export default function ProjectsPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Project Management</h1>
            <ProjectManager />
        </div>
    );
}