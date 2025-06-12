import { Iconos } from "../moleculas/Iconos";

export function Contactanos() {
  return (
    <section className="w-full h-full flex flex-col  items-center p-10 gap-10">
      <div className="w-50 flex border-2 border-[#373B41] rounded-3xl justify-center p-2">
        <h2 className="text-[#0E6F7C] font-bold text-2xl">Contactanos</h2>
      </div>
      <section className="w-150 flex border-2 border-[#373B41] rounded-3xl justify-center p-4">
        <Iconos />
      </section>
    </section>
  )
}
