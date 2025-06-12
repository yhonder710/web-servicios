interface Props {
  title: string
}

export function CardPlanes({ title }: Props) {
  return (
    <article className="w-80 h-100 border-2 rounded-2xl text-center p-2">
      <header>
        <h3 className="text-4xl font-bold">{title}</h3>

      </header>
    </article>
  )
}
