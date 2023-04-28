import styles from '../styles/Trends.module.css';
import Link from 'next/link';

function Trend(props) {
  return (
    <div className={styles.listHashtags}>
      <div className={styles.unHashtag}>
        <p className={styles.titreHashtag}><Link href="/hashtags/hackatweet">#{props.name}</Link></p>
        <div className={styles.totalTweet}>2 tweets !!!! non renvoyé</div>
      </div>
    </div>
  );
}

export default Trend;