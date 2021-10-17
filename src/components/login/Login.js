import React from 'react';
import { useState } from 'react';
import './login.css';
import axios from 'axios';
import { LogoutButton } from '../LogoutButton';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleChange = (event, state) => {
    state(event.target.value);
  };

  const handleSubmit = (event) => {
    const cred = { username: user, password: pass };

    axios
      .post('http://localhost:5000/api/auth/login', cred)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    setUser('');
    setPass('');

    event.preventDefault();
  };

  // const logout = (event) => {
  //   axios
  //     .post('http://localhost:5000/api/auth/logout')
  //     .then((response) => {
  //       console.log('logged out', response);
  //     })
  //     .catch((err) => {
  //       console.log('problem logging out');
  //     });
  // };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          label="username"
          value={user}
          placeholder="username"
          className="login_input"
          onChange={(e) => handleChange(e, setUser)}
        />
        <input
          type="text"
          label="password"
          value={pass}
          placeholder="password"
          className="login_input"
          onChange={(e) => handleChange(e, setPass)}
        />
        <button className="button" type="submit">
          Submit
        </button>
        <LogoutButton />
      </form>
    </section>
  );
}
