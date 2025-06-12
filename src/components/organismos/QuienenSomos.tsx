import Imagen from "../../assets/image somos.jpg"

export function QuienenSomos() {
  return (
    <section className="w-full h-[95vh] flex items-center px-5">
      <section className="w-220 h-full flex flex-col items-center p-10 gap-10">
        <div className="w-80 flex justify-center p-2 subTitle">
          <h2 className="text-[#0E6F7C] font-bold text-2xl">Quienes Somos</h2>
        </div>
        <section className="w-200 flex justify-center p-4 subTitle">
          <p className="descripcion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, a totam iste deserunt molestias laborum cum! Est, reiciendis soluta non aspernatur voluptatibus eum quas. At illum iusto id veniam consectetur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste eius eos animi in temporibus inventore, quia atque autem totam quam repudiandae reiciendis magnam earum voluptatem quaerat? Sapiente, maxime veniam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex dolorem similique officia illo veritatis fuga beatae doloribus, deserunt, amet quibusdam non! Laborum sit eos fuga autem, commodi molestiae dignissimos.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius impedit iste veniam neque recusandae sed harum, minima animi culpa, perferendis a quos cupiditate aspernatur, praesentium fugit beatae velit reiciendis at.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eos maxime magnam quibusdam et, aspernatur fugiat voluptas ratione, quod veniam autem consequuntur commodi aliquam ex dolorum possimus voluptate itaque. Officiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique inventore iusto libero cum quae doloremque dolorum sunt voluptate explicabo, laboriosam labore atque earum enim recusandae odio nulla officia officiis!
          </p>
        </section>
      </section>
      <section>
        <img src={Imagen} alt="" className="Imagenes" />
      </section>
    </section>
  )
}
