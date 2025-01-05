/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-01-05 20:11:09
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-01-05 20:12:46
 * @FilePath: /lulab_website_next_js/app/[locale]/(main)/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Navbar from '@/components/navbar/navbar';
import { Footer } from '@/components/footer';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}