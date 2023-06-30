import { useEffect } from 'react';
import '../index.css';

interface Props {
  links: {
    folderPath: string[];
    link: JSX.Element;
  }[];
}

const Notes = ({ links }: Props) => {
  let prevPath: string[] = [''];

  useEffect(() => scroll({ top: 0, left: 0, behavior: 'smooth' }), [links]);

  return (
    <section className="section--centered">
      <h2>O(n)otes</h2>
      <ul>
        {links.map(
          (link: { folderPath: string[]; link: JSX.Element }, key: number) => {
            if (JSON.stringify(link.folderPath) !== JSON.stringify(prevPath)) {
              prevPath = link.folderPath;
              const folder = prevPath[prevPath.length - 1];

              return (
                <div key={key}>
                  <hr />
                  <p>
                    {prevPath.length > 1
                      ? prevPath.slice(0, prevPath.length - 1).join('/') + '/'
                      : prevPath.slice(0, prevPath.length - 1).join('/')}
                    <span className="folder-name">{folder}</span>
                    {'/'}
                  </p>
                  <li key={key}>{link.link}</li>
                </div>
              );
            }

            return <li key={key}>{link.link}</li>;
          }
        )}
      </ul>
    </section>
  );
};

export default Notes;
