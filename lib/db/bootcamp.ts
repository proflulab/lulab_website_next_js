export interface WeekContent {
    id: string;
    title: string;
    topics: string[];
    goals: string[];
    description: string;
    date: string;
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
            goals: [
                "了解人工智能的发展历程",
                "掌握机器学习和深度学习的基本概念",
                "搭建Python开发环境，初步编写简单程序"
            ],
            description: "本周重点是了解人工智能的基本概念与发展历史，搭建Python开发环境，为后续学习打下基础。",
            date: "第1周"
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
            goals: [
                "理解监督学习和无监督学习的基本原理",
                "掌握常见机器学习算法的使用",
                "进行简单的模型评估与特征工程"
            ],
            description: "本周重点是掌握机器学习的基础理论与常见算法，能够独立完成简单的机器学习任务。",
            date: "第2周"
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
            goals: [
                "深入理解神经网络及其核心机制",
                "掌握卷积神经网络与循环神经网络的实际应用",
                "学习迁移学习技术与模型优化技巧"
            ],
            description: "本周重点是深入学习神经网络的核心机制与常见应用，掌握深度学习框架的基本操作。",
            date: "第3周"
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
            goals: [
                "独立完成AI项目的设计与实现",
                "掌握模型训练与优化的完整流程",
                "进行项目答辩，展示成果"
            ],
            description: "本周将独立完成一个AI项目，包括从设计到部署的完整流程，并进行项目答辩展示。",
            date: "第4周"
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
            goals: [
                "掌握Python高级特性，提升代码效率",
                "深入学习PyTorch与TensorFlow框架",
                "初步理解分布式训练与GPU加速优化"
            ],
            description: "本周重点是掌握Python高级特性与主流AI框架的使用，为后续深度学习开发打下基础。",
            date: "第1周"
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
            goals: [
                "理解深度学习中常见的高级概念与优化方法",
                "掌握Transformer架构与注意力机制的原理与应用",
                "学习模型压缩技术，提高模型部署效率"
            ],
            description: "本周重点是深入理解深度学习的高级概念与最新技术，掌握模型优化与部署技巧。",
            date: "第2周"
        }
    ]
};

export const BOOTCAMP_PROJECTS: BootcampProject[] = [
    {
        id: 'aiBasic',
        title: 'AI基础训练营',
        category: 'AI',
        image: '/images/about/lab-origin.png',
        curriculumKey: 'aiBasic',
        description: "AI基础课程涵盖人工智能的核心概念和技术，包括机器学习、深度学习、计算机视觉和自然语言处理的入门知识。学员将通过理论学习和实践项目，掌握AI领域的基本技能，为未来深入学习和应用AI技术打下坚实基础。",
        duration: '4周',
        level: '入门级',
        maxStudents: 30,
        outcomes: ['理解AI基础概念', '掌握基本机器学习算法'],
        prerequisites: [
            "具备一台至少8GB内存的电脑，推荐使用16GB内存以上",
            "能够每天投入至少2小时学习时间",
            "提前安装好Python和Jupyter Notebook",
            "具备基本的英语阅读能力"
        ],
    },
    {
        id: 'aiAdvanced',
        category: 'AI',
        title: 'AI进阶训练营',
        image: '/images/about/lab-origin.png',
        curriculumKey: 'aiAdvanced',
        description: "AI进阶课程深入探讨人工智能的高级概念和最新技术，包括深度学习架构设计、模型优化、分布式训练等进阶主题。学员将通过实战项目，掌握AI系统开发和部署的完整流程，为实际工作中的AI应用打下坚实基础。",
        duration: '12周',
        level: '进阶级',
        maxStudents: 20,
        outcomes: ['开发复杂AI模型', '实践深度学习技术'],
        prerequisites: [
            "具备一台至少8GB内存的电脑，推荐使用16GB内存以上",
            "能够每天投入至少2小时学习时间",
            "提前安装好Python和Jupyter Notebook",
            "具备基本的英语阅读能力"
        ],
    }
];

export const getProjectById = (id: string): BootcampProject | undefined => {
    return BOOTCAMP_PROJECTS.find(project => project.id === id);
};