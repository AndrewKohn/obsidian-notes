import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';

interface Props {
  filePath: string;
}

const MarkdownPage: React.FC<Props> = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    axios
      .get(`http://localhost:3002/${encodeURIComponent(filePath)}`)
      .then(res => {
        const { content } = res.data;
        setMarkdownContent(content);
      })
      .catch(error => {
        console.error('Error retrieving markdown file:', error);
      });
  }, [filePath]);

  return (
    <section>
      <ReactMarkdown remarkPlugins={[breaks]}>{markdownContent}</ReactMarkdown>
    </section>
  );
};

export default MarkdownPage;
