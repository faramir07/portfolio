import { Skilltype } from "./utility";
import skills from "./utility";

function Skills() {
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Mis <span className="text-cyan-600">Habilidades</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Mis Conocimientos</p>
      </div>
      <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
        {skills?.map((skill: Skilltype, i: number) => (
          <div
            key={i}
            className=" text-black hover:text-red-600 border-2 border-cyan-600 relative min-w-[14rem] max-w-[14rem] bg-gray-400 p-10 rounded-xl"
          >
            <div className="flex items-center justify-center rounded-full">
              <div className=" flex justify-center items-center flex-col m--10">
                <span className="text-1xl justify-center items-center py-1">
                  {skill.name}
                </span>
                <img className="h-2/4 w-2/4" src={skill.url} alt={skill.name} />
                <span className="text-1xl justify-center items-center py-1">
                  {skill.level}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
