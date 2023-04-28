import styles from '../styles/Pages.module.css';
import Trends from './Trends';
import Tweet from './Tweet';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEgg } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/user';
import Login from './Login';

function Hashtag({ hashtag }) {
  const BACK_END = 'https://hackatweet-backend-ac9g.vercel.app';
  //const BACK_END = "http://localhost:3000";
  const user = useSelector((state) => state.user.value);
  const [listeTweets, setListeTweets] = useState([]);
  const [listeHashtag, setListeHashtag] = useState([]);

  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!user.token) {
    return <Login />; // retourner page accueil
  }

  let trends = [];
  let tweets = [];
  useEffect(() => {
    fetch(BACK_END + '/hashtags')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const listHash = data.hashtags;
          listHash.map((hash) => {
            trends.push(<Trends name={hash} key={hash._id} />);
          });
          setListeHashtag(trends);
        }
      });
  }, []);

  useEffect(() => {
    if (hashtag) {
      fetch(`${BACK_END}/hashtags/${encodeURIComponent(hashtag)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            const listTwt = data.tweets;
            const fetchedTweets = listTwt.map((twt) => (
              <Tweet
                content={twt.content}
                author={twt.author.username}
                email={twt.author.email}
                key={twt._id}
                like={twt.likes.length}
              />
            ));
            setListeTweets(fetchedTweets);
          }
        });
    }
  }, [hashtag]);


  return (
    <div className={styles.container}>
      <div className={styles.logoLeft}>
        <div>
          <Link href="/">
            <img src="./logo.png" alt="logo" width="50px" className="logo" />
          </Link>
        </div>
        <div className="userInfos">
          <FontAwesomeIcon
            icon={faEgg}
            className="eggs"
            size="2x"
            onClick={handleClick}
          />
          {showPopup && (
            <div className={styles.popup}>
            <button onClick={handleLogout}>Logout</button>
            </div>
          )}
          <div>
            <span className={styles.nameTweet}>{user.username}</span>
            <br />
            <span className="grisUserName">@{user.email}</span>
          </div>
        </div>
      </div>
      <div className={styles.borderLeft}>
        <h2 className={styles.titreNoBold}>Hashtag</h2>
        <div className={styles.searchHashtag}>
          <input value="#hashtag" type="text" />
          </div>
    {listeTweets}
  </div>
  <div className={styles.borderLeft}>
    <h2 className={styles.titreNoBold}>Trends</h2>
    {listeHashtag}
  </div>
</div>
);
}

export default Hashtag;