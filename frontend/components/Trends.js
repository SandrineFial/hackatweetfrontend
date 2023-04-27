import styles from '../styles/Trends.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

function Trend() {
  return (
    <div className={styles.listHashtags}>
      <div className={styles.unHashtag}>
        <p className={styles.titreHashtag}><Link href="/hashtags/hackatweet">#hackatweet</Link></p>
        <div className={styles.totalTweet}>2 tweets</div>
      </div>
      <div className={styles.unHashtag}>
        <p className={styles.titreHashtag}><Link href="/hashtags/first">#first</Link></p>
        <div className={styles.totalTweet}>5 tweets</div>
      </div>
    </div>
  );
}

export default Trend;