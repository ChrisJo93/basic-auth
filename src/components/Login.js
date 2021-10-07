import React from 'react';
import './login.css';

export default function Login() {
  return (
    <section className="login_form_container">
      <form className="login_form_container">
        <input
          type="text"
          label="username"
          value=""
          placeholder="username"
          className="login_input"
        />
        <input
          type="text"
          label="password"
          value=""
          placeholder="password"
          className="login_input"
        />
      </form>
    </section>
  );
}
