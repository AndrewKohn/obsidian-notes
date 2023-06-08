import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkDown from 'react-markdown';
import breaks from 'remark-breaks';

const App = () => {
  const [example, setExample] = useState<any>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('../../obsidian/test.md');
      const data = response.data;
      setExample(data);
    };

    fetchData();
  }, []);

  // useEffect(() => console.log(example), [example]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`../obsidian`);
  //     const data = response.data;
  //     console.log(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <main>
      <h1>H1 TITLE</h1>
      {example !== undefined ? (
        <ReactMarkDown remarkPlugins={[breaks]} children={example} />
      ) : (
        ''
      )}
    </main>
  );
};

export default App;
