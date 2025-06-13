

export function CardPlanesBasic() {
  return (
    <article className="w-100  rounded-2xl text-center p-2 subTitle px-5">
      <header>
        <h3 className="text-4xl text-[#0E6F7C] shadowCardTitle font-bold py-3">Basic</h3>
      </header>

      <section className="flex flex-col text-left mb-2">
        <strong className="text-3xl text-[#0E6F7C]">Apartir de:</strong>
        <span className="text-[20px]">Costo: 60$ </span>
        <span className="text-[20px]">Mantenimiento: 20$ <strong>mes</strong></span>
        <p className="py-1">Pequeñas tiendas o emprendedores que necesitan automatizar tareas básicas.</p>
      </section>

      <section className="flex flex-col text-left gap-1 bg-[#0E6F7C] rounded-[10px] p-2">
        <span>📌 <strong>Gestión de inventario básico:</strong> Alertas de stock bajo y actualización automática.</span>
        <span>📌 <strong>Recordatorios automatizados:</strong> Mensajes para pagos pendientes o renovación de servicios.</span>
        <span>📌 <strong>Respuestas automáticas en WhatsApp/Redes Sociales:</strong> Para consultas frecuentes (horarios, precios, etc.).</span>
        <span>📌 <strong>Generación de informes mensuales:</strong> Ventas básicas y movimientos de stock.</span>
        <span>📌 <strong>Soporte por correo electrónico.</strong></span>
        <strong className="py-2"> Ideal para quienes recién comienzan con la automatización.</strong>
      </section>

      <button className="py-5">Pedir Ya</button>

    </article>
  )
}

export function CardPlanesPro() {
  return (
    <article className="w-100  rounded-2xl text-center p-2 subTitle px-5">
      <header>
        <h3 className="text-4xl text-[#0E6F7C] shadowCardTitle font-bold py-3">Pro</h3>
      </header>

      <section className="flex flex-col text-left mb-4">
        <strong className="text-3xl text-[#0E6F7C]" >Apartir de:</strong>
        <span className="text-[20px]">Costo: 80$</span>
        <span className="text-[20px]">Mantenimiento: 35$ <strong>mes</strong></span>
        <p className="py-2"> Tiendas medianas o locales con mayor volumen de operaciones.</p>
      </section>

      <section className="flex flex-col text-left gap-1 bg-[#0E6F7C] rounded-[10px] p-2">
        <strong>⭐ incluye todo el Plan Básico +</strong>
        <span>⭐ <strong>CRM básico:</strong> Registro automatizado de clientes (compras frecuentes, datos de contacto).</span>
        <span>⭐ <strong>Reservas y citas automáticas:</strong> Integración con Google Calendar o WhatsApp Business.</span>
        <span>⭐ <strong>Chatbot avanzado:</strong> Para pedidos, consultas de promociones y seguimiento de envíos.</span>
        <span>⭐ <strong>Sincronización con herramientas externas:</strong> Excel, Google Sheets o plataformas de e-commerce simples.</span>
        <strong className="py-2">Optimiza tiempo en atención al cliente y ventas recurrentes.</strong>
      </section>

      <button className="py-5">Pedir Ya</button>

    </article>
  )
}

export function CardPlanesPremiun() {
  return (
    <article className="w-100  rounded-2xl text-center p-2 subTitle px-5">
      <header>
        <h3 className="text-4xl text-[#0E6F7C] shadowCardTitle font-bold py-3">Premiun</h3>
      </header>

      <section className="flex flex-col text-left mb-4">
        <strong className="text-3xl text-[#0E6F7C]">Apartir de:</strong>
        <span className="text-[20px]">Costo: 110$</span>
        <span className="text-[20px]">Mantenimiento: 45$ <strong>mes</strong></span>
        <p className="py-2">Negocios con múltiples canales de venta (físico, online, redes sociales).</p>
      </section>

      <section className="flex flex-col text-left gap-1 bg-[#0E6F7C] rounded-[10px] p-2">
        <strong>🚀 incluye planes anteriores +</strong>
        <span>🚀 <strong>Integración con ERP/Marketplaces:</strong> Conexión con Mercado Libre, Shopify, etc.</span>
        <span>🚀 <strong>Análisis predictivo:</strong> Recomendaciones de compra basadas en historial de ventas.</span>
        <span>🚀 <strong>Personalización profunda:</strong> Flujos de trabajo adaptados a procesos específicos del negocio.</span>
        <span>🚀 <strong>Asistencia 24/7 con IA:</strong> Para resolver consultas complejas de clientes fuera de horario.</span>
        <span>🚀 <strong>Reportes detallados + dashboard en tiempo real.</strong></span>
        <strong className="py-2"> Todo en uno para escalar operaciones y reducir costos operativos.</strong>
      </section>


      <button className="py-5">Pedir Ya</button>

    </article>
  )
}
