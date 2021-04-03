import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './styles.css';
import api from '../../services/api'

import logoimg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'

export default function NewIncident() {
  const history = useHistory();
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    }
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })
      history.push('/profile');
    } catch (error) {
      alert("Falha ao cadastrar caso. ", error)
    }
  }

  return (
    <div className="newincident-container">
      <div className="content">
        <section>
          <img src={logoimg} alt="be the hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Titulo do caso" />

          <textarea value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição" />

          <input value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Valor em reais" />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}