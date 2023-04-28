import styles from '../styles/Pages.module.css';
import Trends from './Trends';
import Tweet from './Tweet';
import Link from 'next/link';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Login from './Login';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEgg } from '@fortawesome/free-solid-svg-icons'
// si connecté affiche la home
// sinon la page de connexion
function Home() {
  const BACK_END = "https://hackatweet-backend-ac9g.vercel.app"
  //const BACK_END = "http://localhost:3000"
  const user = useSelector((state) => state.user.value);
  console.log('User in home', user)
  
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

  console.log(user)
  if (!user.token) {
    return <Login />; // retourner page accueil
  }

  let trends = []
  let tweets = []
  useEffect(() => {
    fetch(BACK_END + '/hashtags')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          const listHash = data.hashtags;
          const trends = listHash.map((hash) => (
            <Trends name={hash} key={hash} />
          ));
          setListeHashtag(trends);
        }
      });
  }, []);
  

  useEffect(() => {
    fetch(BACK_END+'/tweets')
    .then(response => response.json())  
    .then(
      data => {
        if(data) {
          console.log(data);
          const listTwt = data.tweets
          listTwt.map( twt => {  
            tweets.push(<Tweet content={twt.content} author={twt.author.username} email={twt.author.email} key = {twt._id} like={twt.likes.length}/>)
          } )
          setListeTweets(tweets)
      }
      }
    ) 
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.logoLeft}>
        <div><Link href="/"><img src="./logo.png" alt = "logo" width="50px" className='logo'/></Link></div>
        <div className='userInfos'>
          <FontAwesomeIcon icon={faEgg} className='eggs' size="2x" onClick={handleClick}/> 
          {showPopup && (
          <div className={styles.popup}>
            <button onClick={handleLogout}>Se déconnecter</button>
          </div>
        )}
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
      </div>
      <div className={styles.borderLeft}>
        <h2 className={styles.titreNoBold}>Trends</h2>
        <Trends/>
      </div>
    </div>
  );
}

export default Home;
