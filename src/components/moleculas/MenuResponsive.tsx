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
    ? 'gap-5 text-[#e9e6e6] flex lg:hidden absolute flex-col bg-[#0E6F7C] w-full bottom-[calc(-270px)] left-0 py-5 rounded-b-3xl tr'
    : 'gap-5 text-[#e9e6e6] flex lg:hidden absolute flex-col bg-[#0E6F7C] w-full top-[calc(-280px)] left-0 py-5 rounded-b-3xl '

  return (
    <ul className={classNaybarResponsive}>
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
  { name: "Quienes somos", to: "#", icon: <IoPersonSharp /> },
  { name: "Que ofrecemos", to: "#", icon: <FaHandHoldingUsd /> },
  { name: "Ventajas del servicio", to: "#", icon: <AiFillTrophy /> },
  { name: "Planes del servicio", to: "#", icon: <AiFillCreditCard /> },
  { name: "Contactanos", to: "#", icon: <MdOutlineConnectWithoutContact /> }
]
