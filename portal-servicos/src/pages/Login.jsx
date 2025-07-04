import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (usuario && senha) {
      navigate('/dashboard')
    } else {
      alert('Preencha usuário e senha')
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Portal de Serviços</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} /><br />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login
