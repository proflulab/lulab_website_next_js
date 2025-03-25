/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-02-06 10:10:40
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-02-06 12:11:40
 * @FilePath: /lulab_website_next_js/components/LoadingSpinner.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
export function LoadingSpinner() {
    return (
        <div className="flex justify-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
    );
}