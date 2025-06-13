import { IoPersonSharp } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";
import { AiFillTrophy } from "react-icons/ai";
import { AiFillCreditCard } from "react-icons/ai";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

interface Props {
  active: boolean
}

export function MenuResponsive({ active }: Props) {

  const classNaybarResponsive = active
    ? 'menuResponsive on'
    : 'menuResponsive '

  return (
    <ul className={`${classNaybarResponsive} flex lg:hidden py-3`}>
      {
        link.map(link => (
          <li key={link.name}>
            <a href={link.to} className='text-[20px] flex items-center gap-1 justify-center hover:text-[#b6b6b6] '>{link.icon} {link.name}</a>
          </li>
        ))
      }
    </ul>
  )
}

const link = [
  { name: "Quienes somos", to: "#quienes-somos", icon: <IoPersonSharp /> },
  { name: "Que ofrecemos", to: "#que-ofrecemos", icon: <FaHandHoldingUsd /> },
  { name: "Ventajas del servicio", to: "#ventajas-de-servicio", icon: <AiFillTrophy /> },
  { name: "Planes del servicio", to: "#planes-del-servicio", icon: <AiFillCreditCard /> },
  { name: "Contactanos", to: "#contactanos", icon: <MdOutlineConnectWithoutContact /> }
]
