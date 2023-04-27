import styles from '../styles/SignUp.module.css';
function SignIn() {
    return (
      <div className={styles.blockCenter}>
        <img src="./logo.png" alt = "logo" width="50px" className='logo'/>
        <h2 className='white'>Connect to Hackatweet</h2>
        <input type="text" placeholder="Username" className={styles.input}/>
        <input type="password" placeholder="Passeword" className={styles.input}/>
        <input type="submit" value="Sign in" className={styles.btn}/>
      </div>
    );
  }
  
  export default SignIn;