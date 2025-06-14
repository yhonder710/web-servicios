import Imagen from "../../assets/bot2-removebg-preview.png"

export function QueOfrecemos() {
  return (
    <section id="que-ofrecemos" className="w-full flex lg:flex-row-reverse flex-col items-center">
      <section className="lg:w-220 w-full h-full flex flex-col justify-center items-center lg:p-10 p-4 gap-5">
        <div className="w-80 flex justify-center p-2 subTitle">
          <h2 className="text-[#0E6F7C] font-bold text-3xl">Que Ofrecemos</h2>
        </div>
        <div className="lg:w-200 w-full flex flex-col gap-5 justify-center p-4 px-5 subTitle">
          <strong className="text-[#0E6F7C] text-2xl">Nuestro servicios ofrece las siguientes opciones:</strong>

          <p className="descripcion">
            Sabemos que cada negocio es único, por eso nuestras soluciones son personalizables y escalables, adaptándose a tus necesidades específicas sin complicaciones. No importa si estás comenzando o ya tienes una empresa establecida: con nuestra tecnología, podrás ahorrar hasta un 40% en tiempo operativo y redirigir esos esfuerzos hacia lo que realmente impulsa tu negocio: vender más y fidelizar a tus clientes.
          </p>

          <div className="flex flex-col descripcion  gap-3">
            <span>✅ <strong className="text-[#0E6F7C]">Atención al cliente 24/7</strong> – Chatbots y respuestas automatizadas para no perder ninguna oportunidad de venta.</span>
            <span>✅ <strong className="text-[#0E6F7C]">Automatización de ventas y cobros</strong> – Agiliza tus transacciones con sistemas rápidos y seguros.</span>
            <span>✅ <strong className="text-[#0E6F7C]">Análisis de datos y reportes automáticos</strong> – Toma decisiones basadas en información precisa y actualizada.</span>
            <span>✅ <strong className="text-[#0E6F7C]">Gestión inteligente de inventario</strong> – Evita pérdidas, sobrestock o faltantes con alertas en tiempo real.</span>
          </div>

        </div>

      </section>
      <section>
        <img src={Imagen} alt="" className="Imagenes" />
      </section>
    </section>
  )
}
