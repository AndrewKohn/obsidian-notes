import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';

interface MarkdownPageProps {
  filePath: string;
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    axios
      .get(`http://localhost:3000/file/${encodeURIComponent(filePath)}`)
      .then(res => {
        const { content } = res.data;
        setMarkdownContent(content);
      })
      .catch(error => {
        console.error('Error retrieving markdown file:', error);
      });
  }, [filePath]);

  return (
    <div>
      <ReactMarkdown remarkPlugins={[breaks]}>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPage;
