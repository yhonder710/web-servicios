import type { ReactNode } from "react"

interface IconType {
  icon: ReactNode
  name: string
}

export function IconContacts({ icon, name }: IconType) {
  return (
    <div className="iconContact">
      <span>
        {icon}
      </span>
      {name}
    </div>
  )
}
