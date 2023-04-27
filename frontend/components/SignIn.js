import { useDispatch } from 'react-redux';
import { login } from '../reducers/user';
import styles from '../styles/SignUp.module.css';
import { useState } from 'react';

function SignIn() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    

    fetch('https://hackatweet-backend-ac9g.vercel.app/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from server:', data); 
        if (data.result) {
          dispatch(login({ username, token: data.token }));
        } else {
          console.log('Error:', data.error); 
        }
      })
      .catch((error) => {
        console.log('Fetch error:', error); 
      });
  };

  return (
    <div className={styles.blockCenter}>
      <img src="./logo.png" alt="logo" width="50px" className="logo" />
      <h2 className="white">Connect to Hackatweet</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
      >
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Passeword"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Sign in" className={styles.btn}/>
      </form>
    </div>
  );
}

export default SignIn;
