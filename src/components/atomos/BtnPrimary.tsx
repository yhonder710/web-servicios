import type { ReactNode } from "react"

interface Props {
  icon: ReactNode
  text: string
}

export function BtnPrimary({ icon, text }: Props) {
  return (
    <button className="">
      <a href="#" className="flex items-center gap-1">
        {icon}
        <strong>{text}</strong>
      </a>
    </button>
  )
}
