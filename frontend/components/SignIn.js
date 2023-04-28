import { useDispatch } from 'react-redux';
import { login } from '../reducers/user';
import styles from '../styles/SignUp.module.css';
import { useState } from 'react';

function SignIn() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    

    //const BACK_END = "https://hackatweet-backend-ac9g.vercel.app"
    const BACK_END = "http://localhost:3000"
    fetch(BACK_END+'/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from server:', data);
        console.log('Token from server:', data.token)
        if (data.result) {
          dispatch(login({ username, email: data.email, token: data.token }));
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
