export interface CurriculumWeek {
    title: string;
    topics: string[];
}

export interface Curriculum {
    [week: string]: CurriculumWeek;
}

export interface TrainingProject {
    id: string;
    category: string;
    image: string;
    price: number;
    curriculumKey: string;
    duration: string;
    level: string;
    maxStudents: number;
    prerequisites?: string[];
    outcomes?: string[];
    curriculum?: Curriculum;
}

export const TRAINING_PROJECTS: TrainingProject[] = [
    {
        id: 'aiBasic',
        category: 'ai',
        image: '/images/ai-basic.jpg',
        price: 19000,
        curriculumKey: 'aiBasic',
        duration: '8周',
        level: '入门级',
        maxStudents: 30,
        prerequisites: [],
        outcomes: ['理解AI基础概念', '掌握基本机器学习算法'],
        curriculum: {
            week1: {
                title: '人工智能导论',
                topics: ['AI的历史与发展', '机器学习基础概念', 'Python编程基础']
            },
            week2: {
                title: '数据处理与分析',
                topics: ['数据预处理技术', '探索性数据分析', '数据可视化']
            },
            week3: {
                title: '机器学习基础',
                topics: ['监督学习算法', '无监督学习入门', '模型评估方法']
            },
            week4: {
                title: '深度学习入门',
                topics: ['神经网络基础', '深度学习框架介绍', '简单神经网络实现']
            },
            week5: {
                title: '计算机视觉基础',
                topics: ['图像处理基础', '卷积神经网络', '图像分类实践']
            },
            week6: {
                title: '自然语言处理入门',
                topics: ['文本处理基础', '词向量技术', '简单文本分类']
            },
            week7: {
                title: '强化学习基础',
                topics: ['强化学习概念', 'Q-learning入门', '简单游戏AI实现']
            },
            week8: {
                title: '项目实战',
                topics: ['项目选题与规划', '开发与实现', '结果展示与总结']
            }
        }
    },
    {
        id: 'aiAdvanced',
        category: 'ai',
        image: '/images/ai-advanced.jpg',
        price: 38000,
        curriculumKey: 'aiAdvanced',
        duration: '12周',
        level: '进阶级',
        maxStudents: 20,
        prerequisites: ['aiBasic'],
        outcomes: ['开发复杂AI模型', '实践深度学习技术'],
        curriculum: {
            week1: {
                title: '高级Python与AI框架',
                topics: ['Python高级特性', 'PyTorch深入理解', 'TensorFlow高级应用']
            },
            week2: {
                title: '深度学习高级概念',
                topics: ['神经网络架构设计', '优化器原理', '损失函数设计']
            },
            week3: {
                title: '计算机视觉进阶',
                topics: ['目标检测', '图像分割', '生成对抗网络']
            },
            week4: {
                title: 'NLP高级应用',
                topics: ['Transformer架构', 'BERT模型原理', '大规模语言模型']
            },
            week5: {
                title: '强化学习进阶',
                topics: ['策略梯度方法', 'Actor-Critic架构', '多智能体系统']
            },
            week6: {
                title: '模型部署与优化',
                topics: ['模型压缩技术', '边缘设备部署', '性能优化']
            },
            week7: {
                title: '大规模机器学习',
                topics: ['分布式训练', '模型并行化', '梯度累积']
            },
            week8: {
                title: 'AI系统设计',
                topics: ['系统架构设计', '微服务集成', 'API开发']
            },
            week9: {
                title: 'AI伦理与安全',
                topics: ['AI伦理准则', '模型安全性', '隐私保护']
            },
            week10: {
                title: '前沿技术探索',
                topics: ['元学习', '自监督学习', '神经架构搜索']
            },
            week11: {
                title: '项目规划与开发',
                topics: ['需求分析', '技术选型', '开发实施']
            },
            week12: {
                title: '项目完善与展示',
                topics: ['系统测试', '性能优化', '项目答辩']
            }
        }
    }
];

export const getProjectById = (id: string): TrainingProject | undefined => {
    return TRAINING_PROJECTS.find(project => project.id === id);
};