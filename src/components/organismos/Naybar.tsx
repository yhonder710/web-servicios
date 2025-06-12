import logo from '../../assets/diseño-de-logotipo-con-letra-k.webp'
import { BtnPrimary } from '../atomos/BtnPrimary'

export function Naybar() {
  return (
    <nav className="flex justify-between items-center px-2.5 py-1 bg-[#0E6F7C]">
      <picture>
        <a href="#">
          <img src={logo} alt="Logo" className=' w-10 h-auto object-cover rounded-[6px]' />
        </a>
      </picture>
      <ul className="flex gap-5">
        {
          link.map(link => (
            <li key={link.name}>
              <a href={link.to}>{link.name}</a>
            </li>
          ))
        }
      </ul>
      <div className="flex gap-3">
        <BtnPrimary />
        <button>Email</button>
      </div>
    </nav>
  )
}

const link = [
  { name: "Quienes somos", to: "quienes-somos", },
  { name: "Que ofrecemos", to: "que-ofrecemos", },
  { name: "Ventajas del servicio", to: "ventaja-del-servicion", },
  { name: "Planes del servicio", to: "planes-del-servicio", },
  { name: "Contactanos", to: "contactanos", }
]
