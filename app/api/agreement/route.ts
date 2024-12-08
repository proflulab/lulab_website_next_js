import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'md/Agreement.md');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return NextResponse.json({ content, data });
    } catch (error) {
        return NextResponse.json({ error: error instanceof Error ? error.message : 'Failed to load agreement content' }, { status: 500 });
    }
}
