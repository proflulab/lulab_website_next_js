import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import styles from './alumni-card.module.css';

interface AlumniCardProps {
    name: string;
    avatar: string;
    title: string;
    company: string;
    description: string;
    skills: string[];
    linkedin?: string;
}

export const AlumniCard: React.FC<AlumniCardProps & { onClick: () => void }> = ({
    name,
    avatar,
    title,
    company,
    description,
    skills,
    onClick
}) => {
    return (
        <Card className={styles.card} onClick={onClick}>
            <CardHeader className={styles.cardHeader}>
                <Image
                    src={avatar}
                    alt={name}
                    width={80}
                    height={80}
                    className={styles.avatar}
                />
                <div className={styles.headerInfo}>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.company}>{company}</p>
                </div>
            </CardHeader>
            <CardBody>
                <p className={styles.description}>{description}</p>
                <div className={styles.skills}>
                    {skills.map((skill, index) => (
                        <span key={index} className={styles.skill}>
                            {skill}
                        </span>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
};