import type { ReactNode } from "react"

interface Props {
  icon: ReactNode
  text: string
}

export function BtnPrimary({ icon, text }: Props) {
  return (
    <button className="border-1 p-1 px-2 rounded-[5px] text-[#0AFFFF]">
      <a href="#" className="flex items-center gap-1">
        {icon}
        <strong>{text}</strong>
      </a>
    </button>
  )
}
