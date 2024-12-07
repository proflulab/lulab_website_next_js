export interface TrainingCourse {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    duration: string;
    level: string;
    category: string;
    curriculum: {
        title: string;
        lessons: {
            title: string;
            description: string;
            duration: string;
        }[];
    }[];
    features: {
        title: string;
        description: string;
        icon?: string;
    }[];
    prerequisites: string[];
    outcomes: string[];
    instructor: {
        name: string;
        title: string;
        avatar: string;
        bio: string;
    };
}
