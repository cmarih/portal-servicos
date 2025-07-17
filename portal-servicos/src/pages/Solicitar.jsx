import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Layout from '../components/Layout'

function Solicitar() {
  const location = useLocation()
  const servicoSelecionado = location.state?.servico || {}

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const novaSolicitacao = {
      id: Date.now(),
      nome,
      descricao,
      servico: servicoSelecionado.title || 'Não Informado',
    }

    const solicitacoesSalvas = JSON.parse(localStorage.getItem('solicitacoes')) || []
    solicitacoesSalvas.push(novaSolicitacao)
    localStorage.setItem('solicitacoes', JSON.stringify(solicitacoesSalvas))

    alert('Solicitação enviada com sucesso!')
    setNome('')
    setDescricao('')
  }

  return (
    <Layout>
      <h2 className="text-center text-pink-500 text-4xl font-medium mb-4">
        Solicitação de Serviço
      </h2>

      <p className="text-center text-gray-700 mb-6">
        Serviço selecionado:{' '}
        <strong className="text-pink-600">
          {servicoSelecionado.title || 'Nenhum serviço selecionado'}
        </strong>
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-2x1 mx-auto bg-white p-6 rounded shadow-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className='flex justify-center'>
          <button
            type="submit"
            className="bg-pink-600 text-white font-semibold px-5 py-2 rounded hover:bg-pink-700 transition-colors">
            Enviar Solicitação
          </button>
        </div>
      </form>
    </Layout>
  )
}

export default Solicitar