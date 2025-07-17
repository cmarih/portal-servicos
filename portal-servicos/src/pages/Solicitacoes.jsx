import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

function Solicitacoes() {
  const [solicitacoes, setSolicitacoes] = useState([])

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem('solicitacoes')) || []
    setSolicitacoes(dadosSalvos)
  }, [])

  return (
    <Layout>
      <h2 className="text-center text-pink-500 text-4xl font-medium mb-6">
        Minhas Solicitações
      </h2>

      {solicitacoes.length === 0 ? (
        <p className="text-center text-gray-600">
          Nenhuma solicitação encontrada.
        </p>
      ) : (
        <ul className="flex flex-col gap-6 px-6 max-w-4xl mx-auto w-full">
          {solicitacoes.map((item) => (
            <li
              key={item.id}
              className="w-full border border-gray-300 p-5 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
            >
              <p className="mb-2">
                <strong className="text-pink-600">Serviço:</strong> {item.servico}
              </p>
              <p className="mb-2">
                <strong className="text-gray-800">Nome:</strong> {item.nome}
              </p>
              <p className="text-gray-700">
                <strong className="text-gray-800">Descrição:</strong> {item.descricao}
              </p>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  )
}

export default Solicitacoes