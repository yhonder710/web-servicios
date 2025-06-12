export function Naybar() {
  return (
    <nav className="flex justify-between items-center px-2.5">
      <strong>Inicio</strong>
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
        <button>Ws</button>
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
