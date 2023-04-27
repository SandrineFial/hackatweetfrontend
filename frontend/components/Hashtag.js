import styles from '../styles/Pages.module.css';
import Trends from './Trends';
import Link from 'next/link';
function Hashtag() {
  return (
    <div className="container">
      <div className={styles.logoLeft}>
        <Link href="/"><img src="./logo.png" alt = "logo" width="50px" className='logo'/></Link>
      </div>
      <div className={styles.borderLeft}>
        <h2 className={styles.titreNoBold}>Hashtag</h2>
      </div>
      <div className={styles.borderLeft}>
        <h2 className={styles.titreNoBold}>Trends</h2>
        <Trends/>
      </div>
    </div>
  );
}

export default Hashtag;
