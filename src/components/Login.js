import React from 'react';
import { useState } from 'react';
import './login.css';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleChange = (e, state) => {
    state(e.target.value);
  };

  const handleSubmit = (event) => {
    console.log(user, pass);

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
