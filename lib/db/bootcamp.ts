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
    subtitle: string;
    category: string;
    image: string;
    duration: string;
    level: string;
    maxStudents: number;
    prerequisites?: string[];
    outcomes?: string[];
    description: string;
    curriculum: WeekContent[];
    slug: string;
}

export const getProjectById = (id: string): BootcampProject | undefined => {
    return BOOTCAMP_PROJECTS.find(project => project.id === id);
};

export const BOOTCAMP_PROJECTS: BootcampProject[] = [
    {
        id: '49b14a0a-83ab-4332-9837-7d50c24fb394',
        category: '编程',
        slug: 'python',
        title: 'Python编程入门',
        subtitle: '从零开始学习Python编程',
        image: '/images/about/lab-origin.png',
        description: '本训练营旨在帮助初学者快速掌握Python编程基础，包括数据类型、控制流、函数与面向对象编程，为后续更高级的编程学习奠定基础。',
        duration: '4周',
        level: 'level1',
        maxStudents: 25,
        outcomes: ['掌握Python基本语法', '能够编写简单的Python程序'],
        prerequisites: [
            '具备基础计算机操作能力',
            '可以每天投入至少1小时学习',
            '对编程有浓厚兴趣'
        ],
        curriculum: [
            {
                id: 'week1',
                title: 'Python基础与环境配置',
                topics: [
                    'Python语言简介',
                    '安装与配置Python开发环境',
                    '数据类型与变量',
                    '基本输入输出操作',
                    '简单的运算与条件判断'
                ],
                goals: [
                    '完成Python环境的安装与配置',
                    '理解基本数据类型与变量的使用',
                    '能够编写简单的条件判断程序'
                ],
                description: '本周主要帮助学员熟悉Python开发环境和基本编程语法，为后续学习做准备。',
                date: '第1周'
            },
            {
                id: 'week2',
                title: '控制流与函数',
                topics: [
                    '循环结构：for与while',
                    '列表与元组的操作',
                    '函数的定义与调用',
                    '参数与返回值',
                    '模块与库的导入'
                ],
                goals: [
                    '掌握循环结构与函数的基本使用',
                    '理解列表与元组的概念并能进行简单操作',
                    '能够编写模块化的Python程序'
                ],
                description: '本周将深入学习Python的控制流结构与函数，帮助学员掌握程序逻辑的构建。',
                date: '第2周'
            },
            {
                id: 'week3',
                title: '文件操作与面向对象编程',
                topics: [
                    '文件的读写操作',
                    '异常处理机制',
                    '类与对象',
                    '封装、继承与多态',
                    '项目实战：简单的学生管理系统'
                ],
                goals: [
                    '掌握文件的读写与异常处理',
                    '理解面向对象编程的基本概念',
                    '完成一个小型项目，综合运用所学知识'
                ],
                description: '本周重点是学习文件操作与面向对象编程，学员将通过项目实战巩固所学知识。',
                date: '第3周'
            },
            {
                id: 'week4',
                title: '项目实战与总结',
                topics: [
                    '项目实战：个人记账系统',
                    '代码优化与重构',
                    '常见问题调试与解决',
                    '课程总结与未来学习建议'
                ],
                goals: [
                    '独立完成一个完整的Python项目',
                    '掌握代码优化与重构的基本技巧',
                    '总结所学内容，明确未来的学习方向'
                ],
                description: '最后一周将通过项目实战和总结，帮助学员回顾所学内容，并指导未来的学习与实践。',
                date: '第4周'
            }
        ]
    },
    {
        id: '6ac3d223-9d51-4103-853a-6566996a496b',
        category: 'Web开发',
        slug: 'web',
        title: 'Web前端开发训练营',
        subtitle: '全面掌握HTML、CSS与JavaScript',
        image: '/images/about/lab-origin.png',
        description: '本训练营旨在帮助学员全面掌握Web前端开发的基础知识与核心技能，包括HTML、CSS、JavaScript的使用，最终能够独立完成基础的Web项目。',
        duration: '6周',
        level: 'level1',
        maxStudents: 20,
        outcomes: ['熟练使用HTML、CSS和JavaScript', '能够开发基础的Web页面'],
        prerequisites: [
            '具备基础计算机操作能力',
            '对Web开发有兴趣',
            '可以每天投入至少2小时学习'
        ],
        curriculum: [
            {
                id: 'week1',
                title: 'HTML与CSS基础',
                topics: [
                    'HTML基本结构与标签',
                    'CSS样式与布局',
                    '响应式设计基础',
                    '开发工具的使用'
                ],
                goals: [
                    '掌握HTML的基本标签与语义',
                    '理解CSS的样式与布局',
                    '能够编写简单的静态网页'
                ],
                description: '本周主要学习HTML与CSS的基础知识，完成一个简单的网页布局。',
                date: '第1周'
            },
            {
                id: 'week2',
                title: 'JavaScript基础',
                topics: [
                    'JavaScript语法与数据类型',
                    'DOM操作与事件处理',
                    '常用函数与对象',
                    '项目实战：简单的动态网页'
                ],
                goals: [
                    '掌握JavaScript的基本语法与DOM操作',
                    '能够为网页添加交互效果',
                    '完成一个简单的动态网页项目'
                ],
                description: '本周将学习JavaScript的核心语法与交互功能，学员将完成一个小型动态网页项目。',
                date: '第2周'
            }
        ]
    }
];
