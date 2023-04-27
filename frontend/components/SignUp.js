import styles from '../styles/SignUp.module.css';
function SignUp() {
    return (
      <div className={styles.blockCenter}>
        <img src="./logo.png" alt = "logo" width="50px" className='logo'/>
        <h2 className='white'>Create your Hackatweet account</h2>
        <input type="text" placeholder="Firstname" className={styles.input}/>
        <input type="text" placeholder="Username" className={styles.input}/>
        <input type="password" placeholder="Passeword" className={styles.input}/>
        <input type="submit" value="Sign up" className={styles.btn}/>
      </div>
    );
  }
  
  export default SignUp;