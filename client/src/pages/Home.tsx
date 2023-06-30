import { Fragment } from 'react';
import notepadImg from '../assets/notepad.png';
import userImg from '../assets/user.png';
import briefcaseImg from '../assets/briefcase.png';
import manSmileImg from '../assets/man-smile.png';
import {
  PiPencilLineBold,
  PiChartLineUpBold,
  PiBracketsCurlyBold,
  PiHeartFill,
} from 'react-icons/pi';
import { Link } from 'react-router-dom';

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
        <div>
          <button className="btn">How it works</button>
          <Link className="btn cta-btn" to={'/notes'}>
            See my notes
          </Link>
        </div>
      </section>
      <section className="section--grid section--centered">
        <div className="grid">
          <div>
            <PiPencilLineBold className="grid-icon" />
            <img src={notepadImg} alt="Writing on a notepad" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              eius voluptate distinctio totam id omnis dignissimos voluptates
              aliquam rem corrupti ducimus.
            </p>
          </div>
          <div>
            <PiChartLineUpBold className="grid-icon" />
            <img src={briefcaseImg} alt="Man walking with briefcase" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              eius voluptate distinctio totam id omnis dignissimos voluptates
              aliquam rem corrupti ducimus, ut ullam eligendi nesciunt facere.
            </p>
          </div>
          <div>
            <PiBracketsCurlyBold className="grid-icon" />
            <img src={userImg} alt="PC user on their computer" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              eius voluptate distinctio totam id omnis dignissimos voluptates
              aliquam rem corrupti ducimus, ut ullam.
            </p>
          </div>
          <div>
            <PiHeartFill className="grid-icon" />
            <img src={manSmileImg} alt="Man smiling" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              <br />
              Lorem ipsum dolor sit.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
