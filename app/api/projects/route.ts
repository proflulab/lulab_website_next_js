/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-01-09 02:38:19
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-01-10 01:37:22
 * @FilePath: /lulab_website_next_js/app/api/projects/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL as string);

export async function GET() {
    try {
        const result = await sql`
      SELECT slug, title, subtitle, category, image, duration, level, max_students AS "maxStudents", description
      FROM projects
    `;
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}