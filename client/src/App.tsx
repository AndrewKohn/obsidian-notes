import { useEffect, useState } from 'react';
import axios from 'axios';
import MarkdownPage from './components/MarkDownPage';

const App: React.FC = () => {
  const [data, setData] = useState<any>(undefined);
  const [obsidianPages, setObsidianPages] = useState<string[]>([]);

  // Initial get.  Retrieves file paths.
  useEffect(() => {
    axios
      .get('http://localhost:3000/')
      .then(res => {
        const contents = res.data.files;
        console.log(typeof contents);
        setData(contents);
      })
      .catch(error => {
        console.error('Error retrieving file list:', error);
      });
  }, []);

  // Returns a filepath string & stores into array.
  useEffect(() => {
    if (data !== undefined) {
      const updatedFilePath = data.map((filePath: string) => {
        if (filePath.includes('\\')) {
          return filePath.replace(/\\/g, '/');
        }
        return filePath;
      });
      setObsidianPages(updatedFilePath);
    }
  }, [data]);

  return (
    <main>
      <h1>H1 TITLE</h1>
      {obsidianPages.map((filePath: string) => (
        // <MarkdownPage key={filePath} filePath={filePath} />
        <p key={filePath}>{filePath}</p>
      ))}
    </main>
  );
};

export default App;
