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
        <h1 className="white">Découvrez ce qui se passe</h1>
        <h2 className="white">Rejoignez Hackatweet aujourd'hui.</h2>
        <button className="btnblue" onClick={showSignUpModal}>
          S'inscrire
        </button>
        <p className="white txtpetit">Vous avez déjà un compte ?</p>
        <button className="btnblack" onClick={showSignInModal}>
          Se connecter
        </button>
      </div>

      <Modal
        title="S'inscrire"
        visible={isSignUpVisible}
        onCancel={handleSignUpCancel}
        footer={null}
      >
        <SignUp />
      </Modal>

      <Modal
        title="Se connecter"
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
