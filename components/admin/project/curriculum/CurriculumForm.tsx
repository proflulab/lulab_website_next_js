'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "../../../ui/card";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Textarea } from "../../../ui/textarea";

interface Curriculum {
    id?: string;
    project_id: string;
    title: string;
    description: string;
    week: number;
    topics: string[];
    goals: string[] | null;
}

interface CurriculumFormProps {
    curriculum?: Curriculum;
    projectId: string;
    onSubmit: (curriculum: Curriculum) => void;
    onCancel: () => void;
}

export default function CurriculumForm({ curriculum, projectId, onSubmit, onCancel }: CurriculumFormProps) {
    const [formData, setFormData] = useState<Curriculum>({
        project_id: projectId,
        title: '',
        description: '',
        week: 1,
        topics: [],
        goals: [],
        ...curriculum
    });

    const [topicInput, setTopicInput] = useState('');
    const [goalInput, setGoalInput] = useState('');

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
            [name]: parseInt(value) || 1
        }));
    };

    const addTopic = () => {
        if (topicInput.trim()) {
            setFormData(prev => ({
                ...prev,
                topics: [...prev.topics, topicInput.trim()]
            }));
            setTopicInput('');
        }
    };

    const removeTopic = (index: number) => {
        setFormData(prev => ({
            ...prev,
            topics: prev.topics.filter((_, i) => i !== index)
        }));
    };

    const addGoal = () => {
        if (goalInput.trim()) {
            setFormData(prev => ({
                ...prev,
                goals: [...(prev.goals || []), goalInput.trim()]
            }));
            setGoalInput('');
        }
    };

    const removeGoal = (index: number) => {
        setFormData(prev => ({
            ...prev,
            goals: prev.goals?.filter((_, i) => i !== index) || null
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
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
                        <label className="text-sm font-medium">Description</label>
                        <Textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Week</label>
                        <Input
                            type="number"
                            name="week"
                            value={formData.week}
                            onChange={handleNumberChange}
                            min={1}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Topics</label>
                        <div className="flex gap-2">
                            <Input
                                value={topicInput}
                                onChange={(e) => setTopicInput(e.target.value)}
                                placeholder="Add topic"
                            />
                            <Button type="button" onClick={addTopic}>Add</Button>
                        </div>
                        <ul className="list-disc list-inside space-y-1">
                            {formData.topics.map((topic, index) => (
                                <li key={index} className="flex items-center justify-between">
                                    <span>{topic}</span>
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => removeTopic(index)}
                                    >
                                        Remove
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Goals (Optional)</label>
                        <div className="flex gap-2">
                            <Input
                                value={goalInput}
                                onChange={(e) => setGoalInput(e.target.value)}
                                placeholder="Add goal"
                            />
                            <Button type="button" onClick={addGoal}>Add</Button>
                        </div>
                        <ul className="list-disc list-inside space-y-1">
                            {formData.goals?.map((goal, index) => (
                                <li key={index} className="flex items-center justify-between">
                                    <span>{goal}</span>
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => removeGoal(index)}
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
                        {curriculum ? 'Update Curriculum' : 'Create Curriculum'}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}