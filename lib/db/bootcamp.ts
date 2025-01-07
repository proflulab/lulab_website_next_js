export interface WeekContent {
    id: string;
    title: string;
    topics: string[];
    timeline: {
        title: string;
        description: string;
        date: string;
    };
}

export interface BootcampProject {
    id: string;
    title: string;
    category: string;
    image: string;
    curriculumKey: string;
    duration: string;
    level: string;
    maxStudents: number;
    prerequisites?: string[];
    outcomes?: string[];
    description: string;
}

export const CURRICULUM_DATA: Record<string, WeekContent[]> = {
    aiBasic: [
        {
            id: "week1",
            title: "人工智能导论",
            topics: [
                "人工智能的历史与发展",
                "机器学习基础概念",
                "深度学习简介",
                "Python编程基础",
                "开发环境搭建",
                "AI伦理与社会影响"
            ],
            timeline: {
                title: "人工智能基础入门",
                description: "了解AI发展历史，掌握基本概念，搭建开发环境",
                date: "第1周"
            }
        },
        {
            id: "week2",
            title: "机器学习基础",
            topics: [
                "监督学习与无监督学习",
                "回归与分类问题",
                "模型评估方法",
                "特征工程",
                "常用算法介绍",
                "实战案例分析"
            ],
            timeline: {
                title: "机器学习实践",
                description: "掌握机器学习基础理论，动手实践基础算法",
                date: "第2周"
            }
        },
        {
            id: "week3",
            title: "深度学习进阶",
            topics: [
                "神经网络原理",
                "卷积神经网络",
                "循环神经网络",
                "迁移学习",
                "模型优化技巧",
                "框架使用实践"
            ],
            timeline: {
                title: "深度学习探索",
                description: "深入学习神经网络，实践深度学习模型",
                date: "第3周"
            }
        },
        {
            id: "week4",
            title: "项目实战",
            topics: [
                "项目架构设计",
                "数据收集与预处理",
                "模型选择与训练",
                "部署与优化",
                "性能评估",
                "项目答辩"
            ],
            timeline: {
                title: "综合项目实践",
                description: "独立完成AI项目，从设计到部署全流程实践",
                date: "第4周"
            }
        }
    ],
    aiAdvanced: [
        {
            id: "week1",
            title: "高级Python与AI框架",
            topics: [
                "Python高级特性",
                "PyTorch深入理解",
                "TensorFlow高级应用",
                "分布式训练基础",
                "GPU加速优化",
                "自动化部署流程"
            ],
            timeline: {
                title: "高级开发环境搭建",
                description: "掌握高级Python特性和主流AI框架",
                date: "第1周"
            }
        },
        {
            id: "week2",
            title: "深度学习高级概念",
            topics: [
                "神经网络架构设计",
                "优化器原理",
                "损失函数设计",
                "注意力机制",
                "Transformer架构",
                "模型压缩技术"
            ],
            timeline: {
                title: "深度学习进阶",
                description: "深入理解深度学习核心概念",
                date: "第2周"
            }
        }
    ]
};

export const BOOTCAMP_PROJECTS: BootcampProject[] = [
    {
        id: 'aiBasic',
        title: 'AI基础训练营',
        category: 'ai',
        image: '/images/about/lab-origin.png',
        curriculumKey: 'aiBasic',
        description: "AI基础课程涵盖人工智能的核心概念和技术，包括机器学习、深度学习、计算机视觉和自然语言处理的入门知识。学员将通过理论学习和实践项目，掌握AI领域的基本技能，为未来深入学习和应用AI技术打下坚实基础。",
        duration: '4周',
        level: '入门级',
        maxStudents: 30,
        prerequisites: [],
        outcomes: ['理解AI基础概念', '掌握基本机器学习算法']
    },
    {
        id: 'aiAdvanced',
        category: 'ai',
        title: 'AI进阶训练营',
        image: '/images/about/lab-origin.png',
        curriculumKey: 'aiAdvanced',
        description: "AI进阶课程深入探讨人工智能的高级概念和最新技术，包括深度学习架构设计、模型优化、分布式训练等进阶主题。学员将通过实战项目，掌握AI系统开发和部署的完整流程，为实际工作中的AI应用打下坚实基础。",
        duration: '12周',
        level: '进阶级',
        maxStudents: 20,
        prerequisites: ['aiBasic'],
        outcomes: ['开发复杂AI模型', '实践深度学习技术']
    }
];

export const getProjectById = (id: string): BootcampProject | undefined => {
    return BOOTCAMP_PROJECTS.find(project => project.id === id);
};