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
import { TextAreaEmoji } from 'react-textarea-emoji'; /*
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-textarea-emoji/dist/index.css';*/
// si connecté affiche la home
// sinon la page de connexion
function Home() {
  //const BACK_END = "https://hackatweet-backend-ac9g.vercel.app"
  const BACK_END = "http://localhost:3000"
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
        let hashtags = [] // recup dans le msg les hashtags
        const pattern = /#[a-z]+/gi
        if(pattern.test(newTweet)) {
          hashtags = newTweet.match(pattern) // crée un array
          //hashtags.map(data => data.split(' ').filter(v=> v.startsWith('#')))
          const newHAsh = []
          hashtags.map(dt => {
            console.log(dt)
            newHAsh.push(dt)
            // return newHAsh.push(dt.filter(v=> v.startsWith('#'))); // supp le #
          }) 
          console.log(newHAsh)
        } 
        
        fetch(BACK_END+'/tweets', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: data.id, content: newTweet, hashtags: hashtags})
        })
        .then(response => response.json())  
        .then(
          twt => {
            console.log(twt)
            const tweetN = <Tweet content={twt.content} author={user.username} 
              email={user.email} key={twt} like={0}/>
            setListeTweets([...listeTweets, tweetN]);
            setNewTweet(''); // efface le input
            setTotalCaracteres(0);
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
          <textarea placeholder="What's up?" className={styles.inputTweet} maxLength="280" value={newTweet}
            onChange={(e) => { setTotalCaracteres(e.target.value.length); setNewTweet(e.target.value); } }>
          </textarea>
{/*
          <TextAreaEmoji
        style={{
          position: 'fixed',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        textAreaStyle={{
          fontSize: '20pt',
        }}/> */}

          <p className={styles.alignRight}>
            <span className={styles.totCaracteres}>{totalCaracteres}/280</span>
            <button className={styles.btnTweet} onClick={() => tweetNew(user.username) }>Tweet</button>
          </p>
        </div>
        <div className='listeTweets'>
          {listeTweets}
        </div>
      </div>
      <div className={styles.borderLeft}>
        <h2 className={styles.titreNoBold}>Trends</h2>
        {listeHashtag}
      </div>
    </div>
  );
}

export default Home;
