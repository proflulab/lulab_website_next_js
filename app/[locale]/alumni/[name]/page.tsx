"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardBody, Button, Divider } from "@nextui-org/react";
import styles from './page.module.css';

const AlumniDetailPage = ({
    params
}: {
    params: { name: string }
}) => {
    // In a real application, you would fetch the alumni data based on the name
    // For now, we'll use mock data
    const alumniData = {
        name: params.name,
        avatar: "https://img-blog.csdnimg.cn/20201014180756724.png",
        title: "Senior Software Engineer",
        company: "Google",
        description: "Experienced software engineer with a passion for building scalable applications.",
        skills: ["React", "Node.js", "Python", "AWS"],
        linkedin: "https://linkedin.com/in/example",
        education: "Computer Science, Stanford University",
        experience: [
            {
                role: "Senior Software Engineer",
                company: "Google",
                period: "2020 - Present",
                description: "Leading development of cloud infrastructure projects."
            },
            {
                role: "Software Engineer",
                company: "Facebook",
                period: "2018 - 2020",
                description: "Worked on React-based web applications."
            }
        ]
    };

    return (
        <div className={styles.container}>
            <Card className={styles.profileCard}>
                <CardBody>
                    <div className={styles.header}>
                        <Image
                            src={alumniData.avatar}
                            alt={alumniData.name}
                            width={150}
                            height={150}
                            className={styles.avatar}
                        />
                        <div className={styles.headerInfo}>
                            <h1 className={styles.name}>{alumniData.name}</h1>
                            <p className={styles.title}>{alumniData.title}</p>
                            <p className={styles.company}>{alumniData.company}</p>
                            <p className={styles.education}>{alumniData.education}</p>
                        </div>
                    </div>

                    <Divider className={styles.divider} />

                    <section className={styles.section}>
                        <h2>About</h2>
                        <p>{alumniData.description}</p>
                    </section>

                    <section className={styles.section}>
                        <h2>Experience</h2>
                        {alumniData.experience.map((exp, index) => (
                            <div key={index} className={styles.experienceItem}>
                                <h3>{exp.role}</h3>
                                <p className={styles.company}>{exp.company}</p>
                                <p className={styles.period}>{exp.period}</p>
                                <p>{exp.description}</p>
                            </div>
                        ))}
                    </section>

                    <section className={styles.section}>
                        <h2>Skills</h2>
                        <div className={styles.skills}>
                            {alumniData.skills.map((skill, index) => (
                                <span key={index} className={styles.skill}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    {alumniData.linkedin && (
                        <Button
                            color="primary"
                            className={styles.linkedinButton}
                            as="a"
                            href={alumniData.linkedin}
                            target="_blank"
                        >
                            Connect on LinkedIn
                        </Button>
                    )}
                </CardBody>
            </Card>
        </div>
    );
};

export default AlumniDetailPage; 