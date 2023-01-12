import self from "../img/self.png";
import mock1 from "../img/mock1.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(230,10,10)", "rgb(51,46,46)"];

export let colors1 = ["rgb(0,240,84)", "rgb(24,38,220)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Hemant",
  lastName: "Kr Singh",
  initials: "hemant2742", 
  position: "a Frontend  Developer,Competetive Programmer",
  selfPortrait: self, 
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🧑‍💻",
      text: " Pre-final Year CSE Undergrad",
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
      link: "https://docs.google.com/document/d/127Uop45LG-TWmEL-OBHjUR1L7KzINdTLpwCRx3YJkpU/edit?usp=sharing",
      icon: "	fa fa-file-pdf-o",
      label: "resume",
    },
    {
     link:"https://www.codechef.com/users/hemant2742" ,
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
      "Git",
      "Github",
      "Bootstrap",
      "Html5",
      "CSS3",
      "Figma",
    ],
    exposedTo: ["nodejs", "adobe illustrator"],
  },

  WorkingExperience: [
    {
      Organisation: "Frontend Developer Intern @ Unicompiler",
      Period: " May 2022-Aug 2022",
    },
    {
      Organisation: "President @ Evolution:UIET Coding Club",
      Period: " June 2020-Present",
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
      live: "https://uietdocs.com", 
      source: "https://github.com/hemant2742/UIETDocs",
      image: mock1,
    },
  ],
};
