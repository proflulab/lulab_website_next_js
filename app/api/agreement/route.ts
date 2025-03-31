import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'md/Agreement.md');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContent);

    return NextResponse.json({ content });
  } catch {
    return NextResponse.json({ error: '无法读取协议文件' }, { status: 500 });
  }
}