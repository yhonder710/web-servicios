import logo from '../../assets/diseño-de-logotipo-con-letra-k.webp'
import { BtnPrimary } from '../atomos/BtnPrimary'

import { FaSquareWhatsapp } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { Menu } from '../moleculas/Menu';
import { MenuResponsive } from '../moleculas/MenuResponsive';


export function Naybar() {
  const [activeMenu, setActiveMenu] = useState<boolean>(false)

  const handleClickeMenu = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <nav className="flex justify-between items-center px-2.5 py-1.5 bg-[#0E6F7C] relative ">
      <picture>
        <a href="#">
          <img src={logo} alt="Logo" className=' w-10 h-auto object-cover rounded-[6px]' />
        </a>
      </picture>
      <Menu />
      <MenuResponsive active={activeMenu} />
      <div className="flex gap-3">
        <BtnPrimary icon={<FaSquareWhatsapp size={32} />} text='Whatsapp' />
        <BtnPrimary icon={<BiLogoGmail size={32} />} text='Email' />
      </div>
      <button onClick={handleClickeMenu} className='block lg:hidden cursor-pointer'>
        <IoMenu size={45} color='#fff' />
      </button>
    </nav>
  )
}
