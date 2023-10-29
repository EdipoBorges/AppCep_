import React, { useState } from 'react';
import Menu from "../Componentes/Menu";
import { DivForm, TitlePage } from "../Estilos/Estilo";
import axios from "axios";

function Contato() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
  });
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleCepChange(e) {
    const novoCep = e.target.value;
    setCep(novoCep);
    
    if (novoCep.length === 8) { // O CEP brasileiro possui 8 dígitos
      // Realizar uma requisição à API ViaCEP
      axios.get(`https://viacep.com.br/ws/${novoCep}/json`)
        .then(response => {
          const data = response.data;
          setEndereco({
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
          });
        })
        .catch(error => {
          console.log('CEP não encontrado: ' + error);
        });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Envie os dados do formulário, incluindo nome, email, mensagem e os campos de endereço (rua, bairro, cidade, estado)
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Mensagem:', mensagem);
    console.log('CEP:', cep);
    console.log('Endereço:', endereco);
  }

  return (
    <>
      <Menu />
      <TitlePage>Contato</TitlePage>
      <DivForm>
        <h2>Entre em Contato</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep" value={cep} onChange={handleCepChange} />
          </div>
          <div>
            <label htmlFor="rua">Rua:</label>
            <input type="text" id="rua" name="rua" value={endereco.rua} readOnly />
          </div>
          <div>
            <label htmlFor="bairro">Bairro:</label>
            <input type="text" id="bairro" name="bairro" value={endereco.bairro} readOnly />
          </div>
          <div>
            <label htmlFor="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" value={endereco.cidade} readOnly />
          </div>
          <div>
            <label htmlFor="estado">Estado:</label>
            <input type="text" id="estado" name="estado" value={endereco.estado} readOnly />
          </div>
          <div>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="4" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </DivForm>
    </>
  );
}

export default Contato;
