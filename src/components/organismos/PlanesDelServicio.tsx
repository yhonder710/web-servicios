import { CardPlanesBasic, CardPlanesPremiun, CardPlanesPro } from "../moleculas/CardPlanes";

export function PlanesDelServicio() {
  return (
    <section className="w-full h-full flex flex-col items-center p-10 gap-5">
      <div className="w-80 flex justify-center p-2 subTitle">
        <h2 className="text-[#0E6F7C] font-bold text-2xl">Planes del Servicio</h2>
      </div>

      <div className="w-full flex gap-5 items-start justify-between p-5 px-10">
        <CardPlanesBasic />
        <CardPlanesPro />
        <CardPlanesPremiun />
      </div>
    </section>
  )
}
