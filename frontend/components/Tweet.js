import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEgg, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';

function Tweet(props) {
  const time = moment(props.timestamp, "YYYYMMDD").fromNow();
  return (
    <div className={styles.blockTweet}>
        <div><FontAwesomeIcon icon={faEgg} className='eggs' size="2x"/> <span className={styles.nameTweet}>{props.author}</span>
         <span className='grisTweetName'>@{props.email} . {time}</span></div>
        <div className={styles.textTweet}>{props.content}</div>
        <div><FontAwesomeIcon icon={faHeart} className={styles.iconPointor}/> <span>{props.like}</span> 
        <FontAwesomeIcon icon={faTrashCan} className={styles.iconPointor}/></div>
    </div>
  );
}

export default Tweet;