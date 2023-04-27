import styles from '../styles/Pages.module.css';
import Trends from './Trends';
import Tweet from './Tweet';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEgg } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';

function Hashtag() {
  let trends = []
  //useEffect()  
  fetch('https://hackatweet-backend-ac9g.vercel.app/hashtags')
  .then(response => response.json())  
  .then(
    data => {
      if(data) {
        console.log(data);
        const listHash = data.hashtags
        listHash.map( hash => {  
          trends.push(<Trends name={hash}/>)
        } )
     }
    }
  ) 
  
  return (
    <div className={styles.container}>
      <div className={styles.logoLeft}>
        <div><Link href="/"><img src="./logo.png" alt = "logo" width="50px" className='logo'/></Link></div>
        <div className='userInfos'>
          <FontAwesomeIcon icon={faEgg} className='eggs' size="2x"/> 
          <div>
            <span className={styles.nameTweet}>John</span><br/>
            <span className='grisUserName'>@JohnCenna</span>
          </div>
        </div>
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
        {trends}
      </div>
    </div>
  );
}

export default Hashtag;
