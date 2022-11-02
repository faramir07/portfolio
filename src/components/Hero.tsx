import IonIcon from "@reacticons/ionicons"

function Hero() {

  type socialType = ['logo-github', 'logo-linkedin']

  const socialMedia: socialType = ['logo-github', 'logo-linkedin']

  return (
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center">
        <img src="" alt="miguel" className="md:w.11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              HOLA!
              <br />
            </span>
            Mi Nombre es <span>Miguel Linares</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">Fullstack Developer</h4>
          <button className="btn-primary mt-4">Contáctame</button>
          <div className="mt-8 text-3xl flex item-center md:justify-start justifi-center gap-5">
            {
              socialMedia?.map(social => (
                <div key={social} className="text-gray-600 hover:text-white cursor-pointer">
                  <IonIcon name={social}></IonIcon>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero