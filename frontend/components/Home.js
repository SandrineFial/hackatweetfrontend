import styles from '../styles/Pages.module.css';
import Trends from './Trends';
import Tweet from './Tweet';
import Link from 'next/link';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useSelector } from 'react-redux';
import Login from './Login';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../reducers/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEgg } from '@fortawesome/free-solid-svg-icons'

// si connecté affiche la home
// sinon la page de connexion
function Home() {
  const user = useSelector((state) => state.user.value);
  console.log('User in home', user)
 
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  const handleLogout = () => {
    dispatch(logout());
  };


  if (!user.token) {
    return <Login />;
  }


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
          <div>
            <span className={styles.nameTweet}>{user.username}</span><br/>
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
