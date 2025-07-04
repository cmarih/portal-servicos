import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Solicitar from './pages/Solicitar'
import Solicitacoes from './pages/Solicitacoes'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/solicitar" element={<Solicitar />} />
      <Route path="/solicitacoes" element={<Solicitacoes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
