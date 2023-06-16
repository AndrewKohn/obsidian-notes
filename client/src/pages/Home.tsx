interface Props {
  links: {
    folderPath: string[];
    link: JSX.Element;
  }[];
}

const Home = ({ links }: Props) => {
  let prevPath: string[] = [''];

  return (
    <section>
      <h1>HOME PAGE</h1>
      <ul>
        {links.map(
          (link: { folderPath: string[]; link: JSX.Element }, key: number) => {
            if (JSON.stringify(link.folderPath) !== JSON.stringify(prevPath)) {
              prevPath = link.folderPath;

              return (
                <div key={key}>
                  <hr />
                  <p className="folder-name">{prevPath.join('/') + '/'}</p>
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

export default Home;
