import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

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
  // Envia o serviço via state para a próxima página
  navigate('/solicitar', { state: { servico } })
  }


  return (
    <div style={{ padding: 20 }}>
      <Navbar />
      <h2>Serviços Disponíveis</h2>

      {carregando ? (
        <p>Carregando serviços...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {servicos.map((servico) => (
            <div key={servico.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '250px' }}>
              <h3>{servico.title}</h3>
              <p>{servico.body}</p>
              <button onClick={() => handleSolicitar(servico)}>Solicitar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dashboard
