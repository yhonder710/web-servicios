import { FaSquareWhatsapp } from "react-icons/fa6";


export function BtnPrimary() {
  return (
    <button className="border-1 p-1 rounded-[5px] text-white">
      <a href="#" className="flex items-center gap-1">
        <FaSquareWhatsapp size={30} />
        <strong>Whatsapp</strong>
      </a>
    </button>
  )
}
