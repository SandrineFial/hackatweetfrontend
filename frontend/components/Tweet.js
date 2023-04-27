import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEgg, faTrashCan } from '@fortawesome/free-solid-svg-icons'

function Tweet() {
  return (
    <div className={styles.blockTweet}>
        <div><FontAwesomeIcon icon={faEgg} className='eggs' size="2x"/> <span className={styles.nameTweet}>John</span> <span className='grisTweetName'>@JohnCenna . a few seconds</span></div>
        <div className={styles.textTweet}>Description <a href="/hashtags/lienhastag">#lienhastag</a></div>
        <div><FontAwesomeIcon icon={faHeart} className={styles.iconPointor}/> <span>1</span> <FontAwesomeIcon icon={faTrashCan} className={styles.iconPointor}/></div>
    </div>
  );
}

export default Tweet;