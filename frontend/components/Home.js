import styles from '../styles/Pages.module.css';
import Trends from './Trends';
import Tweet from './Tweet';
import Link from 'next/link';
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
  //console.log('User in home', user)
  
  const [listeTweets, setListeTweets] = useState([]);
  const [listeHashtag, setListeHashtag] = useState([]);
  const [totalCaracteres, setTotalCaracteres] = useState(0);
  const [newTweet, setNewTweet] = useState('');

  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  //console.log(user)
  if (!user.token) {
    return <Login />; // retourner page accueil
  }

  let trends = []
  let tweets = []
  useEffect(() => {
<<<<<<< HEAD
    fetch(BACK_END+'/hashtags')
    .then(response => response.json())  
    .then(
      data => {
        if(data) {
          //console.log(data);
          const listHash = data.hashtags
          listHash.map( (hash, kle) => {  
            trends.push(<Trends name={hash} key= {kle}/>)
          } )
          setListeHashtag(trends)
      }
      }
    ) 
=======
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
>>>>>>> 99bfb9cb59302d4107f3cba78a18c0aa3ef60e59
  }, []);
  

  useEffect(() => {
    fetch(BACK_END+'/tweets')
    .then(response => response.json())  
    .then(
      data => {
        if(data) {
          //console.log(data);
          const listTwt = data.tweets
          listTwt.map( (twt, kle) => {  
            tweets.push(<Tweet content={twt.content} author={twt.author.username} 
              email={twt.author.email} key={kle} like={twt.likes.length}/>)
          } )
          setListeTweets(tweets)
      }
      }
    ) 
  }, []);
  const tweetNew = (username) => { // ajoute un new Tweet
    const userNom = username
    fetch(BACK_END+'/users/'+userNom, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data=> { 
      if(data.result) {
        const hashtags = [] // recup dans le msg les hashtags
        fetch(BACK_END+'/tweets', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: data.id, content: newTweet, hashtags: hashtags})
        })
        .then(response => response.json())  
        .then(
          data => {
            console.log(data)
            setListeTweets([...listeTweets, data])
        })
      }
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.logoLeft}>
        <div><Link href="/"><img src="./logo.png" alt = "logo" width="50px" className='logo'/></Link></div>
        <div className='userInfos'>
          <FontAwesomeIcon icon={faEgg} className='eggs' size="2x" onClick={handleClick}/> 
          {showPopup && (
          <div className={styles.popup}>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
        <div>
          <span className={styles.nameTweet}>{user.username}</span><br/>
          <span className='grisUserName'>@{user.email}</span>
        </div>
        </div>
      </div>
      <div className={styles.borderLeft}>
        <h2 className={styles.titreNoBold}>Home</h2>
        <div className={styles.addTweet}>
          <textarea placeholder="What's up?" className={styles.inputTweet} maxLength="280" 
            onChange={(e) => { setTotalCaracteres(e.target.value.length); setNewTweet(e.target.value); } }>
          </textarea>
          <p className={styles.alignRight}>
            <span className={styles.totCaracteres}>{totalCaracteres}/280</span>
            <button className={styles.btnTweet} onClick={() => tweetNew(user.username) }>Tweet</button>
          </p>
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

export default Home;
