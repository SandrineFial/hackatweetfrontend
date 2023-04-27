import { useDispatch } from 'react-redux';
import { login } from '../reducers/user';
import styles from '../styles/SignUp.module.css';
import { useState } from 'react';

function SignUp() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://hackatweet-backend-ac9g.vercel.app/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          handleSignIn(username, password);
          dispatch(login({ username, token: data.token }));
          setUsername('');
          setEmail('');
          setPassword('');
        }
      });
  };

  const handleSignIn = (username, password) => {
    fetch('https://hackatweet-backend-ac9g.vercel.app/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username, token: data.token }));
        }
      });
  };

  return (
    <div className={styles.blockCenter}>
      <img src="./logo.png" alt="logo" width="50px" className="logo" />
      <h2 className="white">Créez votre compte Hackatweet</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Prénom"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Adresse e-mail"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="S'inscrire" className={styles.btn} />
      </form>
    </div>
  );
}

export default SignUp;
