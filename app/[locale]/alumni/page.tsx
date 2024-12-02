/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-12-02 17:23:17
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-02 17:44:29
 * @FilePath: /lulab_website_next_js/app/[locale]/alumni/page.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
"use client";

import React from 'react';
import { AlumniGrid } from '@/components/alumni/alumni-grid';
import { AlumniFilter } from '@/components/alumni/alumni-filter';
import styles from './alumni.module.css';

const AlumniPage = () => {

    return (
        <div className={styles.container}>
            <AlumniFilter />
            <AlumniGrid />
        </div>
    );
};

export default AlumniPage; 