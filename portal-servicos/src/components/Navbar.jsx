import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Simula logout
    navigate('/')
  }

  const linkStyle = {
    marginRight: '20px',
    textDecoration: 'none',
    color: 'blue'
  }

  return (
    <nav style={{ padding: '15px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
      <Link to="/solicitar" style={linkStyle}>Solicitar Serviço</Link>
      <Link to="/solicitacoes" style={linkStyle}>Minhas Solicitações</Link>
      <button onClick={handleLogout} style={{ marginLeft: '40px' }}>Sair</button>
    </nav>
  )
}

export default Navbar
