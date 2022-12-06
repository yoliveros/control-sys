import { Link, Outlet } from 'react-router-dom'
import { invoke } from '@tauri-apps/api/tauri'
import './Layout.scss'

function Layout(): JSX.Element {
  return (
    <section className="flex gap-4">
      <nav className="bg-slate-600">
        <ul className="h-screen flex flex-col items-center text-white">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/compras">Compras</Link>
          </li>
          <li>
            <Link to="/reportes">Reportes</Link>
          </li>
          <li className="mt-auto">
            <a href="#" onClick={() => invoke('close_window')}>
              Salir
            </a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </section>
  )
}

export default Layout
