import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Layout from '../components/Layout'

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
    <Layout>
      <h2 className = "text-center text-pink-500 text-4xl font-medium mb-9">Portal de Serviços</h2>


      <form onSubmit={handleLogin} className="max-w-md mx-auto bg-white p-6 rounded shadow-md space-y-4">
        <input type="text" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"/><br />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
        /><br />
        <button type="submit" className="w-full bg-pink-600 text-white font-semibold py-2 rounded hover:bg-pink-700 transition-colors"
        >Entrar</button>
      </form>
    </Layout>
  )
}

export default Login
