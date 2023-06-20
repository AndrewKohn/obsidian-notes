import { Fragment } from 'react';
import notepadImg from '../assets/notepad.png';
import userImg from '../assets/user.png';
import briefcaseImg from '../assets/briefcase.png';

const Home = () => {
  return (
    <Fragment>
      <section className="section--home">
        <h1>O(n)otes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe
          recusandae eaque dolorum temporibus, tempora voluptatum sit autem cum
          porro, impedit maiores, cumque fuga. Distinctio totam dignissimos
          vitae quod vel?
        </p>
      </section>
      <section className="section--grid section--centered">
        <div className="grid">
          <div>
            <img src={notepadImg} alt="Writing on a notepad" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              eius voluptate distinctio totam id omnis dignissimos voluptates
              aliquam rem corrupti ducimus, ut ullam eligendi nesciunt facere in
              iusto soluta beatae.
            </p>
          </div>
          <div>
            <img src={briefcaseImg} alt="Man walking with briefcase" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              eius voluptate distinctio totam id omnis dignissimos voluptates
              aliquam rem corrupti ducimus, ut ullam eligendi nesciunt facere in
              iusto soluta beatae.
            </p>
          </div>
          <div>
            <img src={userImg} alt="PC user on their computer" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              eius voluptate distinctio totam id omnis dignissimos voluptates
              aliquam rem corrupti ducimus, ut ullam eligendi nesciunt facere in
              iusto soluta beatae.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
