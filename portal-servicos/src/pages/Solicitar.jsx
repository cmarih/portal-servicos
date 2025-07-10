import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Solicitacoes from './Solicitacoes';

//componente principal
function Solicitar() {

  //Pega o serviço enviado da rota anterior (Dashboard)
  const location = useLocation();
  const servicoSelecionado = location.state?.servico || {}

  //Criar estados para armazenar do formulário
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')

  //Função de chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault() //Evita recarregar a página

    //Monta um objeto com a nova solicitação
    const novaSolicitacao = {
      id: Date.now(), //Gera um ID único com base na data/hora atual
      nome, // Nome digitado no formulário
      descricao, // Descrição da solicitação
      servico: servicoSelecionado.title || 'Não Informado', //Nome do serviço selecionado anteriormente
    }

    //Busca do localStorage de todas as solicitaçãoes salvas (ou começa com um array vazio)
    const solicitacoesSalvas = JSON.parse(localStorage.getItem('solicitacoes')) || []
    
    //Adiciona a nova solicitação à lista
    solicitacoesSalvas.push(novaSolicitacao)

    //Salva tudo de volta no localStorage
    localStorage.setItem('solicitacoes', JSON.stringify(solicitacoesSalvas))

    //Exibe confirmação e limpa os campos do formulário
    alert('Solicitação enviada com sucesso!')
    setNome('')
    setDescricao('')
  }

  return (
    <div style={{ padding: 20 }}>
      <Navbar />
      <h2>Solicitação de Serviço</h2>
      {/*Exibe o nome do serviço vindo da página anterior*/}
      <p>Serviço: <strong>{servicoSelecionado.title || 'Nenhum serviço selecionado'}</strong></p>

      {/*Formulário de preenchimento e envio de solicitação */}
      <form onSubmit={handleSubmit} style={{marginTop:20}}>
        <div>
          <label>Nome: </label><br/>
          <input  type='text' value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>

        <div>
          <label>Descrição: </label><br/>
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        </div>

        <button type="submit" style={{marginTop: 10}}>Enviar Solicitação</button>
      </form>

    </div>
  )
}

export default Solicitar
