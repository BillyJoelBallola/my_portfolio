import harmony from "../assets/harmony.jpg";
import sneakerdrop from "../assets/sneaker-drop.png";
import rbim from "../assets/rbim.png";
import linkSharing from "../assets/link_sharing.png";
import gearup from "../assets/gearup.png";
import trackr from "../assets/trackr.png";
import readingRealm from "../assets/reading_realm.png";

const projects = [
  {
    title: "Sneaker Drop",
    description:
      "Sneaker Drop is a minimalist single-page product view showcasing a single sneaker with an add-to-cart feature. Built with ReactJS, TypeScript, Tailwind CSS, and Redux, it demonstrates state management, utility-first styling, and clean UI design in a simple e-commerce flow.",
    image: sneakerdrop,
    tags: ["ReactJS", "Typescript", "Redux", "TailwindCSS"],
    demoURL: "https://sneaker-drop.vercel.app",
  },
  {
    title: "Gear Up",
    description:
      "Gear Up is a sleek, responsive landing page built with ReactJS and Tailwind CSS, showcasing modern UI design and smooth animations. Designed as a portfolio piece, it demonstrates component-driven development, utility-first styling, and a clean user experience ideal for promoting products or services.",
    image: gearup,
    tags: ["ReactJS", "Typescript", "TailwindCSS"],
    demoURL: "https://gear-up-phi.vercel.app",
  },
  {
    title: "Expense Tracker App",
    description:
      "Trackr is a full-stack Progressive Web Application (PWA) designed to help users efficiently monitor and manage their daily expenses. Built with Next.js, the app features a clean, responsive interface and leverages a PostgreSQL database for storing transactional data securely. Users can categorize expenses, view insightful summaries, and access the app across devices—even offline.",
    image: trackr,
    tags: ["NextJS", "Typescript", "Postgres"],
  },
  {
    title: "Reading Realm",
    description:
      "Reading Realm is a web-based digital library platform that allows users to explore and read a wide range of books online. With a simple and user-friendly interface built using ReactJS, the app consumes a RESTful API to fetch and organize content dynamically. It aims to promote reading by providing easy access to literature in a clean and engaging environment.",
    image: readingRealm,
    tags: ["ReactJS", "RestAPI"],
  },
  {
    title: "Links Sharing",
    description:
      "Links Sharing is a personal project that allows users to create and customize their own link-sharing profiles—similar to services like Linktree. Built with ReactJS and styled using TailwindCSS, the application provides a sleek and fast interface where users can manage links to their social media, websites, or other content hubs.",
    image: linkSharing,
    tags: ["ReactJS", "TailwindCSS"],
  },
  {
    title: "Harmony's Kitchen",
    description:
      "Harmony's Kitchen is a promotional website created as a school project to showcase the culinary products and services offered by the fictional business. Built using PHP, MySQL, and jQuery, the site features a responsive layout, product listings, and an admin interface for content management. It simulates a real-world food service site experience.",
    image: harmony,
    tags: ["PHP", "MySQL", "JQUERY"],
  },
  {
    title: "RBIM System",
    description:
      "The RBIM System is a capstone project developed to modernize and replace the existing manual system used in a local municipality. Designed with ReactJS, NodeJS, and MySQL, the system enables efficient record tracking, resident profiling, and barangay document processing. It was submitted to fulfill undergraduate academic requirements.",
    image: rbim,
    tags: ["ReactJS", "NodeJS", "MySQL"],
  },
];

export default projects;
