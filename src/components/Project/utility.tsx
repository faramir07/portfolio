import Dogs from "../../assets/Dogs.png";
import qatarbets from "../../assets/qatarbets.png";
import native from "../../assets/native.png";

export interface ProjectType {
  name: string;
  gitUrl: string;
  img: string;
}

const projects: ProjectType[] = [
  {
    name: "Pi Dogs",
    gitUrl: "https://github.com/faramir07/PI-Dogs-main",
    img: `${Dogs}`,
  },
  {
    name: "Qatarbets-web",
    gitUrl: "https://github.com/nachoaar/qatarbets-frontend",
    img: `${qatarbets}`,
  },
  {
    name: "Qatarbets-native",
    gitUrl: "https://github.com/nachoaar/qatarbets-reactnative",
    img: `${native}`,
  },
  {
    name: "Portafolio",
    gitUrl: "https://github.com/faramir07/portfolio.git",
    img: "",
  },
];

export default projects;
