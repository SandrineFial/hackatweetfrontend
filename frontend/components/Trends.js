import { useEffect, useState } from 'react';
import styles from '../styles/Trends.module.css';
import Link from 'next/link';

function Trend() {
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    fetch('https://hackatweet-backend-ac9g.vercel.app/tweets')
      .then((response) => response.json())
      .then((data) => {
        const hashtagCount = {};
        data.tweets.forEach((tweet) => {
          tweet.hashtags.forEach((hashtag) => {
            if (hashtagCount[hashtag]) {
              hashtagCount[hashtag]++;
            } else {
              hashtagCount[hashtag] = 1;
            }
          });
        });

        const sortedHashtags = Object.entries(hashtagCount).sort((a, b) => b[1] - a[1]);
        setHashtags(sortedHashtags);
      });
  }, []);

  return (
    <div className={styles.listHashtags}>
      {hashtags.map(([name, count]) => (
        <div className={styles.unHashtag} key={name}>
          <p className={styles.titreHashtag}>
            <Link href={`/hashtags/${name}`}>#{name}</Link>
          </p>
          <div className={styles.totalTweet}>{count} tweets</div>
        </div>
      ))}
    </div>
  );
}

export default Trend;
