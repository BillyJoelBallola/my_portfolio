import {
  SiHtml5,
  SiPhp,
  SiCss3,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";
import { RiReactjsLine, RiNodejsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";

export const skills = [
  {
    name: "HTML",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    name: "PHP",
    icon: <SiPhp />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "ReactJS",
    icon: <RiReactjsLine />,
  },
  {
    name: "NodeJS",
    icon: <RiNodejsLine />,
  },
  {
    name: "MySQL",
    icon: <GrMysql />,
  },
  {
    name: "Github",
    icon: <SiGithub />,
  },
];
