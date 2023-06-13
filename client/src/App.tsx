import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MarkdownPage from './components/MarkDownPage';
import PageNotFound from './pages/PageNotFound';

const App: React.FC = () => {
  const [data, setData] = useState<string[] | undefined>(undefined);
  const [obsidianPages, setObsidianPages] = useState<string[]>([]);

  // Initial get.  Retrieves file paths.
  useEffect(() => {
    axios
      .get('http://localhost:3000/')
      .then(res => {
        const contents = res.data.files;
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

  // Get file name from file path
  const markdownRoutes = obsidianPages.map((filePath: string, key: number) => {
    const reversedFilePath = filePath.split('').reverse().slice(3);
    let fileName = '';

    for (let i = 0; i < reversedFilePath.length; i++) {
      if (reversedFilePath[i] === '/') break;
      fileName += reversedFilePath[i];
    }

    fileName = fileName.split('').reverse().join('');

    return (
      <Route
        key={key}
        path={`/${fileName}`}
        element={<MarkdownPage key={filePath} filePath={filePath} />}
      />
    );
  });

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        {obsidianPages ? markdownRoutes.map((route: JSX.Element) => route) : ''}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default App;
