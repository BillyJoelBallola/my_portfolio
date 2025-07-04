import diary from "../assets/memories.jpg";
import harmony from "../assets/harmony.jpg";
import sms from "../assets/info-system.jpg";
import rbim from "../assets/rbim.png";
import linkSharing from "../assets/link_sharing.png";
import trackr from "../assets/trackr.png";
import pluma from "../assets/pluma.png";
import readingRealm from "../assets/reading_realm.png";

const projects = [
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
    title: "Pluma",
    description:
      "Pluma is a modern, minimalist note-taking web application crafted for productivity and ease of use. Developed with Next.js and TypeScript, it allows users to create, edit, and manage their notes seamlessly. The application also uses PostgreSQL for persistent data storage and is designed with a sleek UI to enhance the user experience.",
    image: pluma,
    tags: ["NextJS", "Typescript", "Postgres"],
  },
  {
    title: "Links Sharing",
    description:
      "Links Sharing is a personal project that allows users to create and customize their own link-sharing profiles—similar to services like Linktree. Built with ReactJS and styled using TailwindCSS, the application provides a sleek and fast interface where users can manage links to their social media, websites, or other content hubs.",
    image: linkSharing,
    tags: ["ReactJS", "TailwindCSS"],
  },
  {
    title: "Memories Diary Website",
    description:
      "Memories is a personal online diary application developed using PHP, jQuery, HTML, and CSS. It allows users to securely log their daily thoughts and activities, with options to categorize and search entries. The application offers a nostalgic and user-centric design, ideal for maintaining a digital journal with ease and privacy.",
    image: diary,
    tags: ["PHP", "SQL", "JQUERY"],
  },
  {
    title: "Harmony's Kitchen",
    description:
      "Harmony's Kitchen is a promotional website created as a school project to showcase the culinary products and services offered by the fictional business. Built using PHP, MySQL, and jQuery, the site features a responsive layout, product listings, and an admin interface for content management. It simulates a real-world food service site experience.",
    image: harmony,
    tags: ["PHP", "MySQL", "JQUERY"],
  },
  // {
  //   title: "School Information System",
  //   description:
  //     "This School Information System is a comprehensive academic records management platform developed using Flask (Python), HTML, CSS, and MySQL. It handles student information, grades, and class schedules. The system aims to improve administrative workflows and ensure organized recordkeeping for educational institutions.",
  //   image: sms,
  //   tags: ["HTML", "CSS", "PYTHON", "MySQL"],
  // },
  {
    title: "RBIM System",
    description:
      "The RBIM System is a capstone project developed to modernize and replace the existing manual system used in a local municipality. Designed with ReactJS, NodeJS, and MySQL, the system enables efficient record tracking, resident profiling, and barangay document processing. It was submitted to fulfill undergraduate academic requirements.",
    image: rbim,
    tags: ["ReactJS", "NodeJS", "MySQL"],
  },
];

export default projects;
