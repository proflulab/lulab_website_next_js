export interface TrainingProject {
    id: string;
    category: string;
    image: string;
    price: number;
    curriculumKey: string;
}

export const TRAINING_PROJECTS: TrainingProject[] = [
    {
        id: 'aiBasic',
        category: 'ai',
        image: '/images/ai-basic.jpg',
        price: 19000,
        curriculumKey: 'aiBasic',
    },
    {
        id: 'aiAdvanced',
        category: 'ai',
        image: '/images/ai-advanced.jpg',
        price: 38000,
        curriculumKey: 'aiAdvanced',
    },
    // ... 其他项目
];

export const getProjectById = (id: string): TrainingProject | undefined => {
    return TRAINING_PROJECTS.find(project => project.id === id);
}; 