import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";


export let colors = ["rgb(230,10,10)", "rgb(51,46,46)"];

export let colors1 = ["rgb(0,240,84)", "rgb(24,38,220)"];


export const info = {
  firstName: "Hemant",
  lastName: "Kr Singh",
  initials: "hemant2742",
  position: "a Full-stack Developer,Competetive Programmer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🧑‍💻",
      text: "Software Enginner @ Clearout.io"
    },
    {
      emoji: "🏫",
      text: "UIET, Kanpur University",
    },
    {
      emoji: "📧",
      text: "shemant820@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/hemant2742",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/hemant2742/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "mailto:shemant820@gmail.com",
      icon: "	fa fa-envelope",
      label: "contactme",
    },
    {
      link: "https://drive.google.com/file/d/1qeKgzDRDcTOMtgPlsoM7BQr-ApIA4_uI/view?usp=sharing",
      icon: "	fa fa-file-pdf-o",
      label: "resume",
    },
    {
      link: "https://www.codechef.com/users/hemant2742",
      icon: "fa fa-code",
      label: "codechef",
    },
  ],
  bio: "Hello! I'm Hemant Kr Singh. I'm a Pre-final Year student at UIET,Kanpur University. I have good knowlege I have worked as a Frotend devloper Intern at Unicompiler,!",
  skills: {
    proficientWith: [
      "Javascript",
      "C++",
      "Data Structure and Algorithms",
      "React.js",
      "Node.js",
      "Express.js",
      "AWS",
      "MongoDB",
      "Redux",
      "Git",
      "Github",
      "Bootstrap",
      "Html5",
      "CSS3",
      "Figma",
    ],
    exposedTo: ["adobe illustrator"],
  },

  WorkingExperience: [
    {
      Organisation: "SDE Intern @ Clearout.io",
      Period: " July 2023-Present",
    },
  ],
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "Badminton",
      emoji: "🏸",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
  ],
  portfolio: [
    {
      title: "UIET DOCS",
      live: "https://uietdocs.in",
      source: "https://github.com/hemant2742/UIETDocs",
      image: mock1,
    },
    {
      title: "RANDOM QUOTE GENERATOR",
      live: "https://uietdocs.com",
      source: "https://github.com/hemant2742/UIETDocs",
      image: mock2,
    },
  ],
};
