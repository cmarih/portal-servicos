import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'

function Solicitacoes() {
  //Estado que vai armazenar as solicitações carregadas
  const [solicitacoes, setSolicitacoes] = useState([])

  // useEffect carrega os dados assim que a página abre
  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem('solicitacoes')) || []
    setSolicitacoes(dadosSalvos)
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <Navbar />
      <h2>Minhas Solicitações</h2>

      {/*Se não houver nenhuma solicitação, mostra uma mensagem */}

      {solicitacoes.length === 0 ? (
        <p>Nenhuma solicitação encontrada. </p>
      ) : (
        //Listar todas as solicitações em pequenos cards
        <ul style={{ listStyle: 'none', padding: 10}}>
          {solicitacoes.map((item) => (
            <li key={item.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '8px'}}>
              <p><strong>Serviço: </strong>{item.servico}</p>
              <p><strong>Nome: </strong>{item.nome}</p>
              <p><strong>Descrição: </strong>{item.descricao}</p> 
            </li>
          ))}
        </ul>
      )}
      
    </div>
  )
}

export default Solicitacoes
