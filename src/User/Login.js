import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // ログイン処理
  const handleSubmit = async (event) => {
    event.preventDefault();
     console.log(username);
    try {
      const response = await axios.post('/login', {
        username: username,
        password: password
      });
      // ログイン成功時の処理
      console.log('Login successful', response);
      // ここでログイン後のリダイレクトや状態更新を行う
    } catch (error) {
      // エラー発生時の処理
      console.error('There was an error!', error);
    }
  };

  return (
    <form className ="user_body" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">ログイン</button>
    </form>
  );
}

export default Login
