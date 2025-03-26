'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import ProjectFormDialog from './project/ProjectFormDialog';
import { useRouter } from '@/i18n/routing';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast"
import { Project } from '@/types';
import { LoadingSpinner } from "@/components/LoadingSpinner";


function ProjectCard({
    project,
    onEdit,
    onDelete
}: {
    project: Project;
    onEdit: (project: Project) => void;
    onDelete: (projectId: string) => void;
}) {
    const router = useRouter();

    return (
        <Card className="hover:shadow-lg transition-shadow h-[280px] flex flex-col">
            <CardHeader className="flex-none">
                <CardTitle className="text-xl truncate">{project.title}</CardTitle>
                <CardDescription className="truncate">{project.subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden">
                <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Badge variant="outline">{project.duration}</Badge>
                    <Badge variant="outline">{project.level}</Badge>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">{project.description}</p>
            </CardContent>
            <CardFooter className="flex-none mt-auto">
                <div className="w-full flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
                    <Button
                        variant="outline"
                        className="w-full sm:w-auto"
                        onClick={() => router.push(`/admin/projects/curriculum?projectId=${project.id}`)}
                    >
                        View Curriculums
                    </Button>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <Button
                            variant="default"
                            className="flex-1 sm:flex-none"
                            onClick={() => onEdit(project)}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="destructive"
                            className="flex-1 sm:flex-none"
                            onClick={() => project.id && onDelete(project.id)}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default function ProjectManager() {
    const { toast } = useToast()
    const [projects, setProjects] = useState<Project[]>([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(false);
    const [deleteProjectId, setDeleteProjectId] = useState<string | null>(null);

    const fetchProjects = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/projects');
            if (!response.ok) {
                throw new Error('Failed to fetch projects');
            }
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
            toast({
                title: "Error",
                description: "Failed to fetch projects",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    }, [toast]); // 添加 toast 作为依赖

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]); // 添加 fetchProjects 作为依赖

    const handleProjectSubmit = async (project: Project) => {
        try {
            const method = project.id ? 'PUT' : 'POST';
            const response = await fetch('/api/projects', {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(project),
            });

            if (!response.ok) {
                throw new Error('Failed to save project');
            }

            await fetchProjects();
            setShowProjectForm(false);
            setEditingProject(null);
            toast({
                title: "Success",
                description: `Project ${project.id ? 'updated' : 'created'} successfully`,
            });
        } catch (error) {
            console.error('Error saving project:', error);
            toast({
                title: "Error",
                description: "Failed to save project",
                variant: "destructive",
            });
        }
    };

    const handleProjectDelete = async (projectId: string) => {
        try {
            const response = await fetch(`/api/projects?id=${projectId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete project');
            }

            await fetchProjects();
            toast({
                title: "Success",
                description: "Project deleted successfully",
            });
        } catch (error) {
            console.error('Error deleting project:', error);
            toast({
                title: "Error",
                description: "Failed to delete project",
                variant: "destructive",
            });
        } finally {
            setDeleteProjectId(null);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Projects List</h2>
                <Button onClick={() => setShowProjectForm(true)}>Add Project</Button>
            </div>

            <ProjectFormDialog
                isOpen={showProjectForm}
                onClose={() => {
                    setShowProjectForm(false);
                    setEditingProject(null);
                }}
                project={editingProject || undefined}
                onSubmit={handleProjectSubmit}
            />

            {loading ? (
                <div className="flex justify-center py-8">
                    <LoadingSpinner />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onEdit={(project) => {
                                setEditingProject(project);
                                setShowProjectForm(true);
                            }}
                            onDelete={(id) => setDeleteProjectId(id)}
                        />
                    ))}
                </div>
            )}

            <AlertDialog open={!!deleteProjectId} onOpenChange={() => setDeleteProjectId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>确认删除</AlertDialogTitle>
                        <AlertDialogDescription>
                            此操作不可撤销。确定要删除这个项目吗？
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>取消</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => deleteProjectId && handleProjectDelete(deleteProjectId)}
                        >
                            确认删除
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}