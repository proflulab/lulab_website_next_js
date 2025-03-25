/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-01-05 18:55:42
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-01-05 20:30:01
 * @FilePath: /lulab_website_next_js/app/[locale]/bootcamp/checkout/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import React from 'react';
import '../globals.css';

export default async function CheckoutLayout({
  children,
  params: { }
}: {
  children: React.ReactNode
  params: { locale: string };
}) {
  return (
    <main className="flex flex-col min-h-screen">
      {children}
    </main>
  )
}
