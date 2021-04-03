import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './styles.css';
import api from '../../services/api'

import heroesImg from '../../assets/heroes.png'
import logoimg from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'

export default function Logon() {
  const history = useHistory();
  const [id, setId] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', { id })
      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile')

    } catch (err) {
      alert("Falha no login, tente novamente. ", err)
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoimg} alt="be the hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua id"
            value={id}
            onChange={e => setId(e.target.value)} />

          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>

      </section>

      <img src={heroesImg} alt="heroes" />
    </div>
  );
}