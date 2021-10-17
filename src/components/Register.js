import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleChange = (e, state) => {
    state(e.target.value);
    console.log(user, pass);
  };

  const handleSubmit = (event) => {
    console.log(user, pass);
    const cred = { username: user, password: pass };

    axios
      .post('http://localhost:5000/api/auth/register', cred)
      .then((response) => {
        console.log('made it', response);
      })
      .catch((err) => {
        console.log('problem in client get', err);
      });
    setUser('');
    setPass('');

    event.preventDefault();
  };

  return (
    <section>
      <form className="login_form_container" onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
