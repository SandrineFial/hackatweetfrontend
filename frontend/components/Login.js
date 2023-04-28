import { useState } from 'react';
import styles from '../styles/Login.module.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Modal } from 'antd';

function Login() {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isSignInVisible, setIsSignInVisible] = useState(false);

  const showSignUpModal = () => {
    setIsSignUpVisible(true);
  };

  const showSignInModal = () => {
    setIsSignInVisible(true);
  };

  const handleSignUpCancel = () => {
    setIsSignUpVisible(false);
  };

  const handleSignInCancel = () => {
    setIsSignInVisible(false);
  };

  return (
    <div className={styles.flex}>
      <div className={styles.fondimg}></div>
      <div className={styles.blockLogin}>
        <img src="./logo.png" alt="logo" width="50px" className="logo" />
        <h1 className="white">See what's happening</h1>
        <h2 className="white">Join Hackatweet today.</h2>
        <button className="btnblue" onClick={showSignUpModal}>
          Sign Up
        </button>
        <p className="white txtpetit">Already have an account?</p>
        <button className="btnblack" onClick={showSignInModal}>
          Sign In
        </button>
      </div>

      <Modal 
        className="modalStyle"
        visible={isSignUpVisible}
        onCancel={handleSignUpCancel}
        footer={null}
      >
        <SignUp />
      </Modal>

      <Modal 
        className="modalStyle"
        visible={isSignInVisible}
        onCancel={handleSignInCancel}
        footer={null}
      >
        <SignIn />
      </Modal>
    </div>
  );
}

export default Login;
