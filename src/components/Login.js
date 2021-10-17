import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import LogoutButton from './LogoutButton';
import { Form, Input, Checkbutton } from 'react-validation';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const cred = { username: user, password: pass };

  const handleChange = (event, state) => {
    state(event.target.value);
  };

  const handleSubmit = (event) => {
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

  return (
    <section>
      <Form className="form" onSubmit={handleSubmit}>
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
      </Form>
      <LogoutButton cred={cred} />
    </section>
  );
}
