type Level = "Experto" | "Avanzado" | "Intermedio" | "Principiante";

export interface Skilltype {
  name: string;
  url: string;
  level: Level;
}

const skills: Skilltype[] = [
  {
    name: "CSS",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    level: "Avanzado",
  },
  {
    name: "HTML",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png",
    level: "Experto",
  },
  {
    name: "JAVASCRIPT",
    url: "https://www.svgrepo.com/show/353925/javascript.svg",
    level: "Avanzado",
  },
  {
    name: "REACT",
    url: "https://www.svgrepo.com/show/354259/react.svg",
    level: "Intermedio",
  },
  {
    name: "REACT-NATIVE",
    url: "https://www.svgrepo.com/show/354259/react.svg",
    level: "Principiante",
  },
  {
    name: "REDUX",
    url: "https://www.svgrepo.com/show/303557/redux-logo.svg",
    level: "Intermedio",
  },
  {
    name: "TAILWIND",
    url: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg",
    level: "Intermedio",
  },
  {
    name: "TYPESCRIPT",
    url: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
    level: "Avanzado",
  },
  {
    name: "EXPRESS",
    url: "https://www.svgrepo.com/show/353724/express.svg",
    level: "Avanzado",
  },
  {
    name: "NODEJS",
    url: "https://www.svgrepo.com/show/303658/nodejs-1-logo.svg",
    level: "Intermedio",
  },
  {
    name: "POSTGRSQL",
    url: "https://www.svgrepo.com/show/354200/postgresql.svg",
    level: "Intermedio",
  },
  {
    name: "SEQUELIZE",
    url: "https://www.svgrepo.com/show/354333/sequelize.svg",
    level: "Intermedio",
  },
];

export default skills;
