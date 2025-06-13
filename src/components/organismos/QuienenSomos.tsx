import Imagen from "../../assets/bot-removebg-preview.png"

export function QuienenSomos() {
  return (
    <section id="quienes-somos" className="w-full lg:h-[90vh] lg:flex-row flex-col flex items-center justify-center lg:px-5 px-0">
      <section className="lg:w-250 w-full h-full flex flex-col justify-center items-center p-5 mt-5 gap-5">
        <div className="lg:w-150 w-full flex justify-center p-2 subTitle">
          <h2 className="text-[#0E6F7C] font-bold text-4xl">Quienes Somos</h2>
        </div>
        <div className="lg:w-230 w-full flex flex-col gap-3 justify-center p-5 subTitle">
          <strong className="text-[#0E6F7C] text-3xl">¡Bienvenidos a AC Solutions!</strong>
          <p className="descripcion">
            En el vertiginoso mundo del comercio, donde cada segundo cuenta y la satisfacción del cliente es primordial, optimizar las operaciones de tu negocio o tienda puede ser la diferencia entre crecer o quedarte atrás. Nosotros somos tu aliado estratégico: una empresa especializada en automatización de procesos para negocios y tiendas, diseñada para ayudarte a ahorrar tiempo, reducir costos y aumentar tus ventas mediante soluciones tecnológicas inteligentes y adaptables.
          </p>

          <p className="descripcion">
            ¿Te has preguntado cuánto tiempo pierdes en tareas repetitivas como gestión de inventario, facturación, seguimiento de pedidos o atención al cliente? Estos procesos, cuando se realizan de forma manual, no solo consumen recursos valiosos, sino que también están expuestos a errores que pueden costarte dinero y reputación. Por eso, nuestra misión es simplificar y potenciar tu día a día con herramientas que automatizan, integran y optimizan cada aspecto de tu negocio, desde pequeñas tiendas hasta cadenas comerciales.
          </p>

        </div>
      </section>
      <section className="lg:mb-0 mb-5">
        <img src={Imagen} alt="" className="Imagenes" />
      </section>
    </section>
  )
}
