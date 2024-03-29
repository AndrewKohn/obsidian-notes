import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { updateFilePath } from './utils/updateFilePath';
import { getFileName } from './utils/getFileName';
import Home from './pages/Home';
import MarkdownPage from './components/MarkDownPage';
import PageNotFound from './pages/PageNotFound';
import NavBar from './components/NavBar/NavBar';
import Notes from './pages/Notes';
import About from './pages/About';
import './index.css';

interface ObsidianPage {
  fileName: string;
  filePath: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<string[] | undefined>(undefined);
  const [obsidianPages, setObsidianPages] = useState<ObsidianPage[]>([]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  // Initial get.  Retrieves file paths.
  useEffect(() => {
    axios
      .get('http://68.47.47.44:59641/')
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

  const mdRoutes = obsidianPages.map(
    (obsidianPage: ObsidianPage, key: number) => {
      return (
        <Route
          key={key}
          path={`/notes/${obsidianPage.fileName}`}
          element={<MarkdownPage key={key} filePath={obsidianPage.filePath} />}
        />
      );
    }
  );

  const mdLinks = obsidianPages.map(
    (obsidianPage: ObsidianPage, key: number) => {
      const filePath: string[] = obsidianPage.filePath.split('/');
      const folderPath: string[] = filePath.splice(1, filePath.length - 2);

      return {
        folderPath: folderPath,
        link: (
          <Link
            key={key}
            to={`/notes/${obsidianPage.fileName}`}
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }
          >
            <p>{obsidianPage.fileName}</p>
          </Link>
        ),
      };
    }
  );

  return (
    <Fragment>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes links={mdLinks} />} />
          {obsidianPages ? mdRoutes.map((route: JSX.Element) => route) : ''}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </Fragment>
  );
};

export default App;
