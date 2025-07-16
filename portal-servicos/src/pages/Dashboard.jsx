import { useEffect, useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

function Dashboard() {
  const [servicos, setServicos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    async function carregarServicos() {
      try {
        const response = await api.get('/posts?_limit=6') // Pega 6 itens
        setServicos(response.data)
      } catch (error) {
        console.error('Erro ao carregar serviços:', error)
      } finally {
        setCarregando(false)
      }
    }
    carregarServicos()
  }, [])

  const handleSolicitar = (servico) => {
    navigate('/solicitar', { state: { servico } })
  }

  return (
    <Layout>
      <h2 className="text-center text-pink-500 text-4xl font-medium mb-9">
        Serviços Disponíveis
      </h2>

      {carregando ? (
        <p className="text-gray-600 text-center">Carregando serviços...</p>
      ) : (
        <div className="flex flex-wrap gap-5 justify-center items-stretch">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="flex flex-col justify-between border border-gray-300 rounded-lg p-4 w-[250px] min-h-[320px] shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-medium mb-2">{servico.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{servico.body}</p>
              <button
                onClick={() => handleSolicitar(servico)}
                className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                Solicitar
              </button>
            </div>
          ))}
        </div>
      )}
    </Layout>
  )
}

export default Dashboard