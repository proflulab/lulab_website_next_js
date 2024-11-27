/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-11-27 22:43:15
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-11-28 01:17:53
 * @FilePath: /lulab_website_next_js/app/[locale]/cases/page.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

'use client'
import { useTranslations } from 'next-intl'
import styles from './cases.module.css'
import Image from 'next/image'
import { useState } from 'react'

interface CaseGuest {
    date: string
    name: string
    title: string
    company: string
    avatar?: string
}

// 按年份组织的案例数据
const casesData: CaseGuest[] = [
    {
        date: '2024.1.9',
        name: '朱峰',
        title: '创始人/CEO',
        company: '星站',
        avatar: '/images/guests/zhufeng.jpg'
    },
    {
        date: '2023.12.20',
        name: '张俊熹',
        title: '合伙人',
        company: '信天创投',
        avatar: '/images/guests/zhangjunxi.jpg'
    },
    {
        date: '2023.11.16',
        name: '霍太稳',
        title: '创始人/CEO',
        company: '极客邦科技'
    },
    {
        date: '2023.10.31',
        name: '朱立平',
        title: '创始人/CEO',
        company: 'BT学院'
    },
    {
        date: '2023.10.18',
        name: '后显慧',
        title: '创始人/CEO',
        company: '三节课'
    },
    {
        date: '2022.3.20',
        name: '申华章',
        title: '创始人/CEO',
        company: '一土学校'
    },
    {
        date: '2022.11.10',
        name: '罗剑',
        title: '创始人/CEO',
        company: '火花思维'
    },
    {
        date: '2021.9.23',
        name: '肖永泉',
        title: '创始人/CEO',
        company: '当乐网'
    },
    {
        date: '2021.9.23',
        name: '冯伟男',
        title: '创始人/CEO',
        company: 'Dr.Next'
    },
    {
        date: '2021.9.23',
        name: '阮玫',
        title: '资深创业者',
        company: '游戏行业'
    },
    {
        date: '2020.2.15',
        name: '金开元',
        title: '创始人/CEO',
        company: '楼下取'
    },
    {
        date: '2020.12.23',
        name: '张天泽',
        title: '创始人/CEO',
        company: '零氪科技'
    }
];

export default function CasesPage() {
    const t = useTranslations('Cases')
    const [searchTerm, setSearchTerm] = useState('')

    // 搜索过滤函数
    const filteredGuests = casesData.filter(guest => {
        const searchValue = searchTerm.toLowerCase()
        return (
            guest.name.toLowerCase().includes(searchValue) ||
            guest.company.toLowerCase().includes(searchValue) ||
            guest.title.toLowerCase().includes(searchValue)
        )
    })

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>{t('pastCaseGuests')}</h1>

                {/* 搜索框 */}
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder={t('searchPlaceholder')}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button
                            className={styles.clearButton}
                            onClick={() => setSearchTerm('')}
                            aria-label="Clear search"
                        >
                            ×
                        </button>
                    )}
                </div>

                <div className={styles.guestGrid}>
                    {filteredGuests.length > 0 ? (
                        filteredGuests.map((guest, index) => (
                            <div key={index} className={styles.guestCard}>
                                <div className={styles.cardHeader}>
                                    {guest.avatar ? (
                                        <Image
                                            src={guest.avatar}
                                            alt={guest.name}
                                            width={64}
                                            height={64}
                                            className={styles.avatar}
                                        />
                                    ) : (
                                        <div className={styles.avatarPlaceholder}>
                                            {guest.name[0]}
                                        </div>
                                    )}
                                    <div className={styles.headerInfo}>
                                        <h3 className={styles.guestName}>{guest.name}</h3>
                                        <p className={styles.guestCompany}>{guest.company}</p>
                                    </div>
                                </div>
                                <div className={styles.cardBody}>
                                    <p className={styles.guestTitle}>{guest.title}</p>
                                    <time className={styles.guestDate}>{guest.date}</time>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noResults}>
                            {t('noResults')}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
} 
