import { CardPlanes } from "../moleculas/CardPlanes";

export function PlanesDelServicio() {
  return (
    <section className="w-full h-full flex flex-col items-center p-10 gap-10">
      <div className="w-80 flex justify-center p-2 subTitle">
        <h2 className="text-[#0E6F7C] font-bold text-2xl">Planes del Servicio</h2>
      </div>

      <div className="w-300 flex gap-3 items-center justify-between p-5 px-10 subTitle">
        <CardPlanes title="Basic" />
        <CardPlanes title="Pro" />
        <CardPlanes title="Premiun" />
      </div>
    </section>
  )
}
