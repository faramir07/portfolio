import dogs from "../../assets/dogs-min.jpg";
import qatarbets from "../../assets/qatarbets-min.jpg";
import native from "../../assets/native-min.png";
import portafolio from "../../assets/portafolio-min.jpg";
import somosAwaq from "../../assets/somosawaqpage-min.jpg";

export interface ProjectType {
  name: string;
  gitUrl?: string;
  img: string;
  pageUrl?: string;
}

const projects: ProjectType[] = [
  {
    name: "Pi Dogs",
    gitUrl: "https://github.com/faramir07/PI-Dogs-main",
    img: `${dogs}`,
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
    img: `${portafolio}`,
  },
  {
    name: "SomosAwaq",
    pageUrl: "https://somosawaq.org",
    img: `${somosAwaq}`,
  },
];

export default projects;
