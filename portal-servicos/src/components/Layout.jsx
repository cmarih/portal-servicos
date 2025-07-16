import { useState } from 'react'
import Navbar from './Navbar'

function Layout({ children }) {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <>
      <Navbar onMenuChange={setMenuAberto} />
      <main className={`px-6 max-w-7xl mx-auto transition-all duration-300 ${menuAberto ? 'mt-[280px]' : 'mt-[100px]'}`}>
        {children}
      </main>
    </>
  )
}

export default Layout