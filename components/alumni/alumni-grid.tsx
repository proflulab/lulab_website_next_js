import React from 'react';
import { AlumniCard } from './alumni-card';
import styles from './alumni-grid.module.css';
import { useRouter } from 'next/navigation';

const MOCK_ALUMNI = [
    {
        name: "张三",
        avatar: "https://img-blog.csdnimg.cn/20201014180756724.png?x-oss-process=image/resize,m_fixed,h_64,w_64",
        title: "全栈工程师",
        company: "Google",
        description: "从Lu Lab毕业后，现在在Google担任全栈工程师，主要负责云服务开发。",
        skills: ["React", "Node.js", "Python", "AWS"],
        linkedin: "https://linkedin.com/in/zhangsan"
    },
    {
        name: "李四",
        avatar: "https://img-blog.csdnimg.cn/20201014180756724.png?x-oss-process=image/resize,m_fixed,h_64,w_64",
        title: "数据科学家",
        company: "Facebook",
        description: "在Facebook工作，专注于大数据分析和机器学习模型的开发。",
        skills: ["Python", "R", "TensorFlow", "SQL"],
        linkedin: "https://linkedin.com/in/lisi"
    },
    {
        name: "王五",
        avatar: "https://img-blog.csdnimg.cn/20201014180756724.png?x-oss-process=image/resize,m_fixed,h_64,w_64",
        title: "移动应用开发者",
        company: "Apple",
        description: "在Apple担任移动应用开发者，负责iOS应用的设计和开发。",
        skills: ["Swift", "Objective-C", "UI/UX Design"],
        linkedin: "https://linkedin.com/in/wangwu"
    },
    {
        name: "赵六",
        avatar: "https://img-blog.csdnimg.cn/20201014180756724.png?x-oss-process=image/resize,m_fixed,h_64,w_64",
        title: "产品经理",
        company: "Amazon",
        description: "在Amazon担任产品经理，负责电子商务平台的产品规划和执行。",
        skills: ["Product Management", "Agile", "Scrum"],
        linkedin: "https://linkedin.com/in/zhaoliu"
    },
    {
        name: "孙七",
        avatar: "https://img-blog.csdnimg.cn/20201014180756724.png?x-oss-process=image/resize,m_fixed,h_64,w_64",
        title: "云架构师",
        company: "Microsoft",
        description: "在Microsoft工作，专注于云计算架构的设计和实施。",
        skills: ["Azure", "AWS", "Cloud Architecture"],
        linkedin: "https://linkedin.com/in/sunqi"
    },
];

export const AlumniGrid: React.FC = () => {
    const router = useRouter();
    return (
        <div className={styles.grid}>
            {MOCK_ALUMNI.map((alumni, index) => (
                <AlumniCard
                    key={index}
                    {...alumni}
                    onClick={() => router.push(`/alumni/${alumni.name}`)}
                />
            ))}
        </div>
    );
}; 