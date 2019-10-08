import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('')

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { email })

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard')
  }

  return (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos cumque quos aliquam.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL</label>
        <input
          type="email"
          id="email"
          placeholder="Seu email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button className="btn" type="submit"> Entrar </button>
      </form>
    </>
  )
}