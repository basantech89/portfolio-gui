import trainerImg from './assets/images/trainer.png';
import workImg from './assets/images/work.png';
import michiganImg from './assets/images/michi.png';
import dukeImg from './assets/images/duke.png';
import gcpImg from './assets/images/gcp.jpg';
import ossImg from './assets/icons/team.png';

const greeting = {
  title: "Hi all 🙌 I'm Basant",
  subTitle: "I am a Full Stack Software Developer 🚀 " +
    "having experience with React / Node and some other cool libraries and frameworks",
  subTitle2: "various flavors of linux i.e RedHat, Arch, Kali",
  subTitle3: "also a trainer and have trained 500+ professors / students on various IT technologies",
  resumeLink: "https://docs.google.com/document/d/19bj7jiU_GRKqbxR6iCwBzxX6gD1GK4qiG0K3luaC7O0/edit?usp=sharing",
};

const socialMediaLinks = {
  github: "https://github.com/basantech89",
  linkedin: "http://www.linkedin.com/in/basant-soni-942581103",
  gmail: "basantech89@gmail.com",
  medium: "https://medium.com/@basantech89",
  facebook: "https://www.facebook.com/basantrocks"
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
    "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "⚡ Integration of third party services such as Firebase/ Google Cloud Platform / Digital Ocean"
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ]
};

const achievementSection = {
  title: "Achievements And Certifications 🏆 ",
  // subtitle: "Certifications Award Letters and Some Cool Stuff that i have done !",
  achivementsCards: [
    {
      title: "Advanced Styling with Responsive Design",
      description: "an online non-credit course authorized byUniversity of Michiganand offered through Coursera",
      image: michiganImg,
      footerLink: [
        { name: "Certificate", url: "https://www.coursera.org/account/accomplishments/certificate/NZ2LSJPHZSH2" },
        { name: "Course", url: "https://www.coursera.org/learn/responsivedesign?specialization=web-design" },
      ]
    },
    {
      title: "Java Programming: Solving Problems with Software",
      description: "an online non-credit course authorized by University of Michigan, offered through Coursera",
      image: dukeImg,
      footerLink: [
        { name: "Certificate", url: "https://www.coursera.org/account/accomplishments/certificate/JUUXDF2NHT63" },
        { name: "Course", url: "https://www.coursera.org/learn/java-programming?specialization=java-programming" },
      ]
    },
    {
      title: "Google Cloud Platform Fundamentals: Core Infrastructure",
      description: "an online non-credit course authorized by University of Michig, offered through Coursera",
      image: gcpImg,
      footerLink: [
        { name: "Certificate", url: "https://www.coursera.org/account/accomplishments/certificate/LDT84D8XCH38" },
        { name: "Course", url: "https://www.coursera.org/learn/gcp-fundamentals" },
      ]
    },
  ]
};

const experienceSection = {
  title: "Experience",
  subtitle: "STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
  blogs: [
    // {
    //   icon: ossImg,
    //   url: "https://pesto.teh",
    //   date: 'NOV 2019 - PRESENT',
    //   title: "Engineering Fellow",
    //   skills: "React | Node | Javascript",
    //   detail: "Added functionality to show rectangles on google map and Fixed a bug in latest build"
    // },
    {
      icon: ossImg,
      url: "https://github.com/fullstackreact/google-maps-react",
      date: 'DEC 2019 - JAN 2019',
      title: "Open Source Contributor @Google Maps React",
      skills: "React | Javascript",
      detail: "Added functionality to show rectangles on google map and Fixed a bug in the latest build"
    },
    {
      icon: workImg,
      url: "https://www.janelaaj.com",
      date: 'MAY 2019 - NOV 2019',
      title: "Full stack developer @Jan Elaaj",
      skills: "React | Node | Adobe Photoshop | Google Cloud Platform",
      detail: "Built 2 websites from scratch, designed graphics and implemented logging in the server using ​Google Cloud Stackdriver Logging"
    },
    {
      icon: trainerImg,
      url: "http://www.jicsindia.com/",
      date: 'JUNE 2017 - JAN 2017',
      title: "IT Trainer @JICS",
      skills: "Linux | Netwroking | Ethical Hacking",
      detail: "Configured PXE, TFTP, and DNSMASQ servers to automate the installation of Linux OS on multiple PCs " +
        "at same time, trained 30+ students on Linux and Cybersecurity"
    },
    {
      icon: workImg,
      url: "http://techvictus.com",
      date: 'SEP 2016 - FEB 2017',
      title: "Virtualization engineer @Techvictus",
      skills: "Virtualization | Linux | CyberSecurity",
      detail: "Implemented Saas-based server-client architecture to virtualize desktop application and wrote shell " +
        "scripts to automate it. Trained 500+ professors / students on various IT topics"
    }
  ]
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi ?, my inbox is open for all",
  number: "+91-9529593182",
  email_address: "basantech89@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, achievementSection, experienceSection, contactInfo };
