import { BiLogoGmail } from "react-icons/bi";
import { IconContacts } from "./IconContacts";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";

export function Iconos() {
  return (
    <div className="flex items-center justify-center gap-10">
      <IconContacts icon={<BiLogoGmail size={45} className="iconGmail" />} name="Gmail" />
      <IconContacts icon={<FaFacebookSquare size={45} className="iconFacebook" />} name="Facebook" />
      <IconContacts icon={<FaSquareWhatsapp size={45} className="iconWhatsapp" />} name="WhatsApp" />
      <IconContacts icon={<FaSquareInstagram size={45} className="iconInstagram" />} name="Facebook" />
    </div>
  )
}
