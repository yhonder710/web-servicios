import { AiOutlineShoppingCart } from "react-icons/ai";

export function BtnCard() {
  return (
    <button className="btnCard">
      <a href="#" className="flex items-center gap-1">
        <AiOutlineShoppingCart size={32} />
        <strong>Pedir Ya</strong>
      </a>
    </button>
  )
}
