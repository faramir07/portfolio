import { ProjectType } from './utility';
import projects from './utility'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';

function Project() {
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-simibold">
          Mis <span className="text-cyan-600">Proyectos</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Mis obras impresionantes</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto item-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            768:{
              slidesPerView: 2,
            }
          }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}>
            {
              projects?.map((projects: ProjectType, i: number) => (
                <SwiperSlide key={i}>
                  <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                    <img src={projects.img} alt={projects.name} className='rounded-lg'/>
                    <h3 className='text-xl my-4'>{projects.name}</h3>
                    <div className='flex gap-3'>
                      <a href={projects.gitUrl} target='_blank' className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
            
          </Swiper>
        </div>
        <div className='lg:block hidden'>
          <img src="" alt="Miguel" className='h-96'/>
        </div>
      </div>
    </section>
  )
}

export default Project