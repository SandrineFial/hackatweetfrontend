import styles from '../styles/Pages.module.css';
import Trends from './Trends';
import Tweet from './Tweet';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEgg } from '@fortawesome/free-solid-svg-icons'
// si connecté affiche la home
// sinon la page de connexion
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logoLeft}>
        <div><Link href="/"><img src="./logo.png" alt = "logo" width="50px" className='logo'/></Link></div>
        <div className='userInfos'>
          <FontAwesomeIcon icon={faEgg} className='eggs' size="2x"/> 
          <div>
            <span className={styles.nameTweet}>John</span><br/>
            <span className='grisUserName'>@JohnCenna</span>
          </div>
        </div>
      </div>
      <div className={styles.borderLeft}>
        <h2 className={styles.titreNoBold}>Home</h2>
        <div className={styles.addTweet}>
          <textarea value="" placeholder="What's up?" className={styles.inputTweet}></textarea>
          <p className={styles.alignRight}>
            <span className={styles.totCaracteres}>0/280</span>
            <button className={styles.btnTweet}>Tweet</button>
          </p>
        </div>
        <Tweet/>
        <Tweet/>
      </div>
      <div className={styles.borderLeft}>
        <h2 className={styles.titreNoBold}>Trends</h2>
        <Trends/>
      </div>
    </div>
  );
}

export default Home;
