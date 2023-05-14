import { useEffect, useState } from 'react';
import axios from 'axios';
import MarkDown from './components/MarkDown';

const App = ({}) => {
  const [example, setExample] = useState<any>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`../obsidian/test 2.md`);
      const data = response.data;
      setExample(data);
    };

    fetchData();
  }, []);

  useEffect(() => console.log(example), [example]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`../obsidian`);
      const data = response.data;
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>H1 TITLE</h1>
      {example !== undefined ? <MarkDown mdElement={example} /> : ''}
    </main>
  );
};

export default App;
