
import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    // 会員登録処理
    function handleSubmit(event) {
      event.preventDefault();
      console.log(username);
      axios.post('/signup', {
        username: username,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      })
      .then(response => {
        // 登録成功時の処理
        console.log('Registration successful', response);
      })
      .catch(error => {
        // エラー発生時の処理
        console.error('There was an error!', error);
      });
    }
  
    return (
      <form className ="user_body" onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          {/* labelタグのテキストを修正 */}
          <label>Password Confirmation:</label>
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        
        <button type="submit">会員登録</button>
      </form>
    );
  }

export default Signup
