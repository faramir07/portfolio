import cv from "../../assets/cv Miguel Linares.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import miguel from "../../assets/miguel.png";

AOS.init();
AOS.refresh();

function About() {
  interface Info {
    text: string;
    count: string;
  }

  const info: Info[] = [
    { text: "Años de Experiencia", count: "1.7" },
    { text: "Proyectos Completados", count: "05" },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Sobre <span className="text-cyan-600">Mi</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">Mi Introducción</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p
                className="text-justify leading-7 w-11/12 mx-auto"
                data-aos="zoom-out-down"
                data-aos-duration="800"
              >
                Siempre me ha gustado el mundo del IT, y por mi cuenta he
                aprendido a manejar diferentes herramientas como wordpress, wix,
                pero no se compara con la programación, una vez que lo aprendí
                me enamore perdidamente y es lo que quiero hacer por el resto de
                mi vida, me gusta trabajar en equipo en ambientes divertidos,
                productivos, con personas que le apuntan a mejorar y a prender.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info?.map((info: Info, i: number) => (
                  <div key={i} data-aos="fade-up" data-aos-duration="2000">
                    <h3 className="md:text-4xl font-semibold text-white">
                      {info.count}
                      <span className="text-cyan-600 ">+</span>
                    </h3>
                    <span className="md:text-base text-xs">{info.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                download="cv Miguel Linares.pdf"
              >
                <button className="btn-primary">Descargar CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div
              className="lg:w-96 h-full relative sm:w-10/12 max-w-sm aboutImg"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="2000"
            >
              <img
                src={miguel}
                alt="Miguel"
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
