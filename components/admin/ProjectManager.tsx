'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import ProjectFormDialog from './project/ProjectFormDialog';
import CurriculumFormDialog from './project/curriculum/CurriculumFormDialog';

interface Project {
    id: string;
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

interface Curriculum {
    id: string;
    project_id: string;
    title: string;
    description: string;
    week: number;
    topics: string[];
    goals: string[] | null;
}

export default function ProjectManager() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [curriculums, setCurriculums] = useState<Curriculum[]>([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [showCurriculumForm, setShowCurriculumForm] = useState(false);
    const [editingCurriculum, setEditingCurriculum] = useState<Curriculum | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    useEffect(() => {
        if (selectedProject) {
            fetchCurriculums(selectedProject.id);
        }
    }, [selectedProject]);

    const fetchProjects = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/projects');
            if (!response.ok) {
                throw new Error('Failed to fetch projects');
            }
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
            setError('Failed to fetch projects');
        } finally {
            setLoading(false);
        }
    };

    const fetchCurriculums = async (projectId: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/curriculums?project_id=${projectId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch curriculums');
            }
            const data = await response.json();
            // Ensure data is an array before setting state
            setCurriculums(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching curriculums:', error);
            setError('Failed to fetch curriculums');
            setCurriculums([]);
        } finally {
            setLoading(false);
        }
    };

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

            fetchProjects();
            setShowProjectForm(false);
            setEditingProject(null);
        } catch (error) {
            console.error('Error saving project:', error);
        }
    };

    const handleProjectDelete = async (projectId: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        try {
            const response = await fetch(`/api/projects?id=${projectId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete project');
            }

            fetchProjects();
            if (selectedProject?.id === projectId) {
                setSelectedProject(null);
            }
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    const handleCurriculumSubmit = async (curriculum: Curriculum) => {
        try {
            const method = curriculum.id ? 'PUT' : 'POST';
            const response = await fetch('/api/curriculums', {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(curriculum),
            });

            if (!response.ok) {
                throw new Error('Failed to save curriculum');
            }

            if (selectedProject) {
                fetchCurriculums(selectedProject.id);
            }
            setShowCurriculumForm(false);
            setEditingCurriculum(null);
        } catch (error) {
            console.error('Error saving curriculum:', error);
        }
    };

    const handleCurriculumDelete = async (curriculumId: string) => {
        if (!confirm('Are you sure you want to delete this curriculum?')) return;

        try {
            const response = await fetch(`/api/curriculums?id=${curriculumId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete curriculum');
            }

            if (selectedProject) {
                fetchCurriculums(selectedProject.id);
            }
        } catch (error) {
            console.error('Error deleting curriculum:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Projects</h2>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <Badge variant="secondary">{project.category}</Badge>
                                <Badge variant="outline">{project.duration}</Badge>
                                <Badge variant="outline">{project.level}</Badge>
                            </div>
                            <p className="text-sm text-gray-600">{project.description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button
                                variant="outline"
                                onClick={() => setSelectedProject(project)}
                            >
                                View Curriculums
                            </Button>
                            <div className="space-x-2">
                                <Button
                                    variant="default"
                                    onClick={() => {
                                        setEditingProject(project);
                                        setShowProjectForm(true);
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="destructive"
                                    onClick={() => handleProjectDelete(project.id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {selectedProject && (
                <div className="mt-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">
                            Curriculums for {selectedProject.title}
                        </h2>
                        <Button onClick={() => setShowCurriculumForm(true)}>
                            Add Curriculum
                        </Button>
                    </div>

                    {loading && (
                        <div className="flex justify-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        </div>
                    )}

                    {error && (
                        <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-md mb-4">
                            {error}
                        </div>
                    )}

                    <CurriculumFormDialog
                        isOpen={showCurriculumForm}
                        onClose={() => {
                            setShowCurriculumForm(false);
                            setEditingCurriculum(null);
                        }}
                        curriculum={editingCurriculum || undefined}
                        projectId={selectedProject.id}
                        onSubmit={handleCurriculumSubmit}
                    />

                    <div className="space-y-4">
                        {curriculums.map((curriculum) => (
                            <Card key={curriculum.id}>
                                <CardHeader>
                                    <CardTitle>Week {curriculum.week}: {curriculum.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">{curriculum.description}</p>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold">Topics:</h4>
                                        <ul className="list-disc list-inside">
                                            {curriculum.topics.map((topic, index) => (
                                                <li key={index}>{topic}</li>
                                            ))}
                                        </ul>
                                        {curriculum.goals && curriculum.goals.length > 0 && (
                                            <div>
                                                <h4 className="font-semibold mt-4">Goals:</h4>
                                                <ul className="list-disc list-inside">
                                                    {curriculum.goals.map((goal, index) => (
                                                        <li key={index}>{goal}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-end space-x-2">
                                    <Button
                                        variant="outline"
                                        onClick={() => {
                                            setEditingCurriculum(curriculum);
                                            setShowCurriculumForm(true);
                                        }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        onClick={() => handleCurriculumDelete(curriculum.id)}
                                    >
                                        Delete
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}