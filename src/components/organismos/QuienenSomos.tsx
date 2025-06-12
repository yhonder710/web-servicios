import Imagen from "../../assets/bot-removebg-preview.png"

export function QuienenSomos() {
  return (
    <section className="w-full h-[95vh] flex items-center justify-center px-5">
      <section className="w-220 h-full flex flex-col items-center p-5 mt-5 gap-5">
        <div className="w-80 flex justify-center p-2 subTitle">
          <h2 className="text-[#0E6F7C] font-bold text-3xl">Quienes Somos</h2>
        </div>
        <div className="w-200 flex flex-col gap-3 justify-center p-5 subTitle">
          <strong className="text-[#0E6F7C] text-2xl">¡Bienvenidos a AC Solutions!</strong>
          <p className="descripcion">
            En el vertiginoso mundo del comercio, donde cada segundo cuenta y la satisfacción del cliente es primordial, optimizar las operaciones de tu negocio o tienda puede ser la diferencia entre crecer o quedarte atrás. Nosotros somos tu aliado estratégico: una empresa especializada en automatización de procesos para negocios y tiendas, diseñada para ayudarte a ahorrar tiempo, reducir costos y aumentar tus ventas mediante soluciones tecnológicas inteligentes y adaptables.
          </p>

          <p className="descripcion">
            ¿Te has preguntado cuánto tiempo pierdes en tareas repetitivas como gestión de inventario, facturación, seguimiento de pedidos o atención al cliente? Estos procesos, cuando se realizan de forma manual, no solo consumen recursos valiosos, sino que también están expuestos a errores que pueden costarte dinero y reputación. Por eso, nuestra misión es simplificar y potenciar tu día a día con herramientas que automatizan, integran y optimizan cada aspecto de tu negocio, desde pequeñas tiendas hasta cadenas comerciales.
          </p>

        </div>
      </section>
      <section>
        <img src={Imagen} alt="" className="Imagenes" />
      </section>
    </section>
  )
}
