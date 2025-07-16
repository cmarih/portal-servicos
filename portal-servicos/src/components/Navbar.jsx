import { FaHome, FaInfoCircle, FaEnvelope, FaBars } from 'react-icons/fa'
import { useState } from 'react'

function Navbar({ onMenuChange }) {
  const [menuAberto, setMenuAberto] = useState(false)

    const toggleMenu = () => {
      const novoValor = !menuAberto
      setMenuAberto(novoValor)
      if (onMenuChange) onMenuChange(novoValor)
    }



  return (
    <nav className="w-full bg-gray-50 border-b border-pink-300 fixed top-0 left-0 z-50">
      <div className="px-6 py-5 flex flex-wrap flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div className="flex items-center gap-6">

        {/* Botão hambúrguer (visível no mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-pink-600 text-xl"
          >
            <FaBars />
          </button>
        <ul className="hidden md:flex gap-4 text-sm">
          <li><a href="/dashboard" className="text-gray-600 hover:text-pink-600 text-lg ">Dashboard</a></li>
          <li><a href="/solicitar" className="text-gray-600 hover:text-pink-600 text-lg">Solicitar Serviço</a></li>
          <li><a href="/solicitacoes" className="text-gray-600 hover:text-pink-600 text-lg">Minhas solicitações</a></li>
        </ul>
        {/* “Sair” alinhado à direita */}

        </div>
        <div className="hidden md:block">
          <a href="/" className="text-pink-600 hover:text-gray-600 text-lg font-medium">
              Sair
          </a>
        </div>
      </div>
      {/* Menu mobile - aparece abaixo quando ativado */}
      {menuAberto && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-sm">
          <li><a href="/dashboard" className="text-gray-600 hover:text-pink-600 text-lg ">Dashboard</a></li>
          <li><a href="/solicitar" className="text-gray-600 hover:text-pink-600 text-lg">Solicitar Serviço</a></li>
          <li><a href="/solicitacoes" className="text-gray-600 hover:text-pink-600 text-lg">Minhas solicitações</a></li>
          <li><a href="/" className="text-pink-600 hover:text-gray-600 text-lg font-medium">Sair</a></li>
        </ul>
      )}

    </nav>
  )
}

export default Navbar