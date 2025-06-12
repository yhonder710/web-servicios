import logo from '../../assets/diseño-de-logotipo-con-letra-k.webp'
import { BtnPrimary } from '../atomos/BtnPrimary'

import { FaSquareWhatsapp } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

import { IoPersonSharp } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";
import { AiFillTrophy } from "react-icons/ai";
import { AiFillCreditCard } from "react-icons/ai";
import { MdOutlineConnectWithoutContact } from "react-icons/md";



export function Naybar() {
  return (
    <nav className="flex justify-between items-center px-2.5 py-1.5 bg-[#0E6F7C]">
      <picture>
        <a href="#">
          <img src={logo} alt="Logo" className=' w-10 h-auto object-cover rounded-[6px]' />
        </a>
      </picture>
      <ul className="flex gap-5 text-[#e9e6e6]">
        {
          link.map(link => (
            <li key={link.name}>
              <a href={link.to} className='text-[20px] flex items-center gap-1 justify-center hover:text-[#b6b6b6]'>{link.icon} {link.name}</a>
            </li>
          ))
        }
      </ul>
      <div className="flex gap-3">
        <BtnPrimary icon={<FaSquareWhatsapp size={32} />} text='Whatsapp' />
        <BtnPrimary icon={<BiLogoGmail size={32} />} text='Email' />
      </div>
    </nav>
  )
}

const link = [
  { name: "Quienes somos", to: "#", icon: <IoPersonSharp /> },
  { name: "Que ofrecemos", to: "#", icon: <FaHandHoldingUsd /> },
  { name: "Ventajas del servicio", to: "#", icon: <AiFillTrophy /> },
  { name: "Planes del servicio", to: "#", icon: <AiFillCreditCard /> },
  { name: "Contactanos", to: "#", icon: <MdOutlineConnectWithoutContact /> }
]
