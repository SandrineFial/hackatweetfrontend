import styles from '../styles/Pages.module.css';
import Trends from './Trends';
import Tweet from './Tweet';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEgg } from '@fortawesome/free-solid-svg-icons'

function Hashtag() {
  return (
    <div className={styles.container}>
      <div className={styles.logoLeft}>
        <div><Link href="/"><img src="./logo.png" alt = "logo" width="50px" className='logo'/></Link></div>
        <div><FontAwesomeIcon icon={faEgg} className='eggs' size="2x"/> <span className={styles.nameTweet}>John</span><br/>
          <span className='grisTweetName'>@JohnCenna</span></div>
      </div>
      <div className={styles.borderLeft}>
        <h2 className={styles.titreNoBold}>Hashtag</h2>
        <div className={styles.searchHashtag}>
          <input value="#hashtag" type="text" />
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

export default Hashtag;
