import { Contactanos } from "../organismos/Contactanos";
import { PlanesDelServicio } from "../organismos/PlanesDelServicio";
import { QueOfrecemos } from "../organismos/QueOfrecemos";
import { QuienenSomos } from "../organismos/QuienenSomos";
import { VentajasDeServicio } from "../organismos/VentajasDeServicio";

export function HomeTemplate() {
  return (
    <>
      <QuienenSomos />
      <QueOfrecemos />
      <VentajasDeServicio />
      <PlanesDelServicio />
      <Contactanos />
    </>
  )
}
