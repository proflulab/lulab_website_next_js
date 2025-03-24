'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

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

interface ProjectFormProps {
    project?: Project;
    onSubmit: (project: Project) => void;
    onCancel: () => void;
}

export default function ProjectForm({ project, onSubmit, onCancel }: ProjectFormProps) {
    const [formData, setFormData] = useState<Project>({
        title: '',
        subtitle: '',
        category: '',
        image: '',
        duration: '',
        level: '',
        max_students: 25,
        description: '',
        slug: '',
        prerequisites: [],
        outcomes: [],
        ...project
    });

    const [prerequisiteInput, setPrerequisiteInput] = useState('');
    const [outcomeInput, setOutcomeInput] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: parseInt(value) || 0
        }));
    };

    const addPrerequisite = () => {
        if (prerequisiteInput.trim()) {
            setFormData(prev => ({
                ...prev,
                prerequisites: [...prev.prerequisites, prerequisiteInput.trim()]
            }));
            setPrerequisiteInput('');
        }
    };

    const removePrerequisite = (index: number) => {
        setFormData(prev => ({
            ...prev,
            prerequisites: prev.prerequisites.filter((_, i) => i !== index)
        }));
    };

    const addOutcome = () => {
        if (outcomeInput.trim()) {
            setFormData(prev => ({
                ...prev,
                outcomes: [...prev.outcomes, outcomeInput.trim()]
            }));
            setOutcomeInput('');
        }
    };

    const removeOutcome = (index: number) => {
        setFormData(prev => ({
            ...prev,
            outcomes: prev.outcomes.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (project?.id) {
            // 编辑模式：发送PUT请求
            fetch(`/api/projects?id=${project.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        throw new Error(data.error);
                    }
                    onSubmit(data);
                })
                .catch(error => {
                    console.error('Error updating project:', error);
                    // 可以在这里添加错误处理UI反馈
                });
        } else {
            // 创建模式：发送POST请求
            fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        throw new Error(data.error);
                    }
                    onSubmit(data);
                })
                .catch(error => {
                    console.error('Error creating project:', error);
                    // 可以在这里添加错误处理UI反馈
                });
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Title</label>
                            <Input
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Subtitle</label>
                            <Input
                                name="subtitle"
                                value={formData.subtitle}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Category</label>
                            <Input
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Image URL</label>
                            <Input
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Duration</label>
                            <Input
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Level</label>
                            <Input
                                name="level"
                                value={formData.level}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Max Students</label>
                            <Input
                                type="number"
                                name="max_students"
                                value={formData.max_students}
                                onChange={handleNumberChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Description</label>
                        <Textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Slug</label>
                        <Input
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Prerequisites</label>
                        <div className="flex gap-2">
                            <Input
                                value={prerequisiteInput}
                                onChange={(e) => setPrerequisiteInput(e.target.value)}
                                placeholder="Add prerequisite"
                            />
                            <Button type="button" onClick={addPrerequisite}>Add</Button>
                        </div>
                        <ul className="list-disc list-inside space-y-1">
                            {formData.prerequisites.map((prerequisite, index) => (
                                <li key={index} className="flex items-center justify-between">
                                    <span>{prerequisite}</span>
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => removePrerequisite(index)}
                                    >
                                        Remove
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Outcomes</label>
                        <div className="flex gap-2">
                            <Input
                                value={outcomeInput}
                                onChange={(e) => setOutcomeInput(e.target.value)}
                                placeholder="Add outcome"
                            />
                            <Button type="button" onClick={addOutcome}>Add</Button>
                        </div>
                        <ul className="list-disc list-inside space-y-1">
                            {formData.outcomes.map((outcome, index) => (
                                <li key={index} className="flex items-center justify-between">
                                    <span>{outcome}</span>
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => removeOutcome(index)}
                                    >
                                        Remove
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>

                <CardFooter className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button type="submit">
                        {project ? 'Update Project' : 'Create Project'}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}