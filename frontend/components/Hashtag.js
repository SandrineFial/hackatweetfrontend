import styles from '../styles/Hashtag.module.css';
import Trends from './Trends';
import Link from 'next/link';
function Hashtag() {
  return (
    <div className="container">
      <div>
        <img src="./logo.png" alt = "logo" width="50px" className='logo'/>
      </div>
      <div>
        <h2>Hashtag</h2>
      </div>
      <div>
        <h2>Trends</h2>
        <Trends/>
      </div>
    </div>
  );
}

export default Hashtag;
