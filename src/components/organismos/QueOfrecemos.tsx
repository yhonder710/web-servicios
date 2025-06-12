import Imagen from "../../assets/bot2-removebg-preview.png"

export function QueOfrecemos() {
  return (
    <section className="w-full h-[100vh] flex flex-row-reverse items-center">
      <section className="w-220 h-full flex flex-col items-center p-10 gap-5">
        <div className="w-80 flex justify-center p-2 subTitle">
          <h2 className="text-[#0E6F7C] font-bold text-3xl">Que Ofrecemos</h2>
        </div>
        <section className="w-200 flex flex-col gap-5 justify-center p-4 px-5 subTitle">
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
        </section>
      </section>
      <section>
        <img src={Imagen} alt="" className="Imagenes" />
      </section>
    </section>
  )
}
