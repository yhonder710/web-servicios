import { CardPlanesBasic, CardPlanesPremiun, CardPlanesPro } from "../moleculas/CardPlanes";

export function PlanesDelServicio() {
  return (
    <section id="planes-del-servicio" className="w-full h-full flex flex-col items-center p-5 gap-5">
      <div className="w-80 flex justify-center p-2 subTitle">
        <h2 className="text-[#0E6F7C] font-bold text-3xl">Planes del Servicio</h2>
      </div>

      <div className="w-full lg:flex-row flex flex-col lg:gap-5 gap-10 lg:justify-between items-start justify-center p-5 lg:px-10 px-0">
        <CardPlanesBasic />
        <CardPlanesPro />
        <CardPlanesPremiun />
      </div>
    </section>
  )
}
