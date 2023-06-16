import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import MarkdownPage from './components/MarkDownPage';
import PageNotFound from './pages/PageNotFound';

interface ObsidianPage {
  fileName: string;
  filePath: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<string[] | undefined>(undefined);
  const [obsidianPages, setObsidianPages] = useState<ObsidianPage[]>([]);

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
      const getObsidianFiles = data.map((path: string) => {
        const filePath: string = updateFilePath(path);
        const fileName: string = getFileName(filePath);

        return { fileName: fileName, filePath: filePath };
      });

      setObsidianPages(getObsidianFiles);
    }
  }, [data]);

  const updateFilePath = (filePath: string) => {
    if (filePath.includes('\\')) {
      return filePath.replace(/\\/g, '/');
    }
    return filePath;
  };

  const getFileName = (filePath: string) => {
    const reversedFilePath = filePath.split('').reverse().slice(3);
    let fileName = '';

    for (let i = 0; i < reversedFilePath.length; i++) {
      if (reversedFilePath[i] === '/') break;
      fileName += reversedFilePath[i];
    }

    fileName = fileName.split('').reverse().join('');

    return fileName;
  };

  const mdRoutes = obsidianPages.map(
    (obsidianPage: ObsidianPage, key: number) => {
      return (
        <Route
          key={key}
          path={`/${obsidianPage.fileName}`}
          element={<MarkdownPage key={key} filePath={obsidianPage.filePath} />}
        />
      );
    }
  );

  const mdLinks = obsidianPages.map(
    (obsidianPage: ObsidianPage, key: number) => {
      const filePath: string[] = obsidianPage.filePath.split('/');
      const folderPath: string[] = filePath.splice(0, filePath.length - 1);

      return {
        folderPath: folderPath,
        link: (
          <Link key={key} to={obsidianPage.fileName}>
            <p>{obsidianPage.fileName}</p>
          </Link>
        ),
      };
    }
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home links={mdLinks} />} />
        {obsidianPages ? mdRoutes.map((route: JSX.Element) => route) : ''}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default App;
