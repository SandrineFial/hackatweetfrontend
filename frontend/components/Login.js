import styles from '../styles/Login.module.css';
import SignUp from './SignUp';
import SignIn from './SignIn';

function Login() {
  return (
    <div className={styles.flex}>
      <div className={styles.fondimg}> 
        {/*<img src="./fond.png" alt = "fond"/>*/}
      </div>
      <div className={styles.blockLogin}>
        <img src="./logo.png" alt = "logo" width="50px" className='logo'/>
        <h1 className="white">See what's happening</h1>
        <h2 className="white">Join Hackatweet today.</h2>
        <button className="btnblue">Sign Up</button>
        <p className="white txtpetit">Already have an account?</p>
        <button className="btnblack">Sign In</button>
      </div>
      <SignIn/>
      <SignUp/>
    </div>
  );
}

export default Login;