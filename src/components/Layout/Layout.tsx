import { Link, Outlet } from 'react-router-dom'
import { invoke } from '@tauri-apps/api/tauri'
import './Layout.scss'

function Layout(): JSX.Element {
  return (
    <section className="flex gap-4 ">
      <nav className="bg-slate-600">
        <ul className="h-screen flex flex-col gap-4 items-center p-4 text-white group group-hover:text-black">
          <li className="hover:text-slate-900">
            <Link to="/">Inicio</Link>
          </li>
          <li className="hover:text-slate-900">
            <Link to="/">Compras</Link>
          </li>
          <li className="hover:text-slate-900">
            <Link to="/">Reportes</Link>
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
