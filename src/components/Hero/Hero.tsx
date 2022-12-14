import IonIcon from "@reacticons/ionicons";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
AOS.refresh();

function Hero() {
  type socialType = ["logo-github", "logo-linkedin"];

  const socialMedia: socialType = ["logo-github", "logo-linkedin"];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div
        className="flex-1 flex items-center justify-center"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img src="" alt="miguel" className="md:w.11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span
              className="text-cyan-600 md:text-6xl text-5xl"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="2000"
            >
              HOLA!
              <br />
            </span>
            Soy{" "}
            <span
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              Miguel Linares
            </span>
          </h1>
          <h4
            className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            Fullstack Developer
          </h4>
          <a
            href="#contact"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2000"
          >
            <button className="btn-primary mt-4">Contáctame</button>
          </a>
          <div
            className="mt-8 text-3xl flex item-center md:justify-start justifi-center gap-5"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1300"
          >
            {socialMedia?.map((social, i: number) => (
              <div
                key={i}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <IonIcon name={social}></IonIcon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
