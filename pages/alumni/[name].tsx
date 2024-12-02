/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-12-02 18:35:52
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-02 18:35:56
 * @FilePath: /lulab_website_next_js/pages/alumni/[name].tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import React from 'react';
import { useRouter } from 'next/router';

const AlumniDetailPage: React.FC = () => {
    const router = useRouter();
    const { name } = router.query;

    // Fetch or use static data to display detailed information about the alumni
    // For now, just display the name
    return (
        <div>
            <h1>Details for {name}</h1>
            {/* Add more detailed information here */}
        </div>
    );
};

export default AlumniDetailPage; 