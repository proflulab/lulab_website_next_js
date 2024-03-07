// pages/agreement.html/index.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';

interface AgreementProps {
    agreementContent: string;
}

const AgreementPage: React.FC<AgreementProps> = ({ agreementContent }) => {
    return (
        <div style={{ margin: '0 300px' }}> {/* 设置左右边距 */}
            <ReactMarkdown>{agreementContent}</ReactMarkdown>
        </div>
    );
};

export const getStaticProps: GetStaticProps<AgreementProps> = async () => {
    const filePath = path.join(process.cwd(), 'public', 'Agreement.md');

    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Parse markdown content using gray-matter
    const { content } = matter(fileContent);

    return {
        props: {
            agreementContent: content,
        },
    };
};

export default AgreementPage;
