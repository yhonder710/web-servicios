import Imagen from "../../assets/ventajas-removebg-preview.png"

export function VentajasDeServicio() {
  return (
    <section className="w-full flex items-center">
      <section className="w-220 h-full flex flex-col items-center p-10 gap-8">
        <div className="w-80 flex justify-center p-2 subTitle">
          <h2 className="text-[#0E6F7C] font-bold text-2xl">Ventajas del servicio</h2>
        </div>
        <div className="w-200 flex flex-col gap-3 justify-center p-4 px-5 subTitle">
          <strong className="text-[#0E6F7C] text-2xl">Muchos negocios de ventas enfrentan:</strong>

          <div className="flex flex-col text-[18px]  gap-2 text-center">
            <span>Pérdida de tiempo en tareas repetitivas <strong className="text-[#0E6F7C]">(</strong>gestión de clientes, facturación, seguimiento de pedidos<strong className="text-[#0E6F7C]">)</strong>.</span>
            <span>Errores humanos en procesos manuales.</span>
            <span>Falta de análisis de datos para tomar decisiones estratégicas.</span>
            <span>Dificultad para escalar por falta de sistemas eficientes.</span>
          </div>

          <strong className="text-[#0E6F7C] text-[20px]">→ Nuestra solución: Automatización inteligente adaptada a cada negocio.</strong>

          <p className="descripcion">
            <strong className="text-[#0E6F7C] text-[20px]">Misión: </strong>
            Para impulsar el crecimiento de los negocios, es clave implementar herramientas de automatización accesibles, escalables y personalizadas. Estas soluciones optimizan procesos, reducen costos y mejoran la eficiencia, adaptándose a las necesidades específicas de cada empresa. Al automatizar tareas repetitivas, las organizaciones pueden enfocarse en estrategias de expansión e innovación, mientras la escalabilidad de las herramientas garantiza que crezcan junto con el negocio. Así, la automatización se convierte en un aliado estratégico para aumentar la productividad y acelerar el desarrollo sostenible.
          </p>
        </div>
      </section>
      <section>
        <img src={Imagen} alt="" className="Imagenes" />
      </section>
    </section>
  )
}
