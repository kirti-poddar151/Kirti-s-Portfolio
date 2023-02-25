// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Kirti",
  middleName: "",
  lastName: "Poddar",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/kirti-poddar151",
    },
    {
      image: "fa-free-code-camp",
      url: "https://leetcode.com/kirti_poddar151/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/kirti_poddar151/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kirti-poddar/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/kirtipoddar10",
    },
    {
        image: "fa-codepen",
        url: "https://auth.geeksforgeeks.org/user/kirtipoddar151/practice/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/kirtipoddar.jpeg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kirtipoddar.jpeg"),
  imageSize: 375,
  message:
    "My name is Kirti Poddar. I'll be graduating from VIT Bhopal University in 2024 with a Bachelor's degree in Computer Science and Engineering. I am a self-driven and motivated Computer Science student. I have ability to work in team environments, and strong attention to detail. I am looking for an IT-related internship with a forward-moving company.",
  resume: "https://drive.google.com/file/d/1oczWBYU3q6xtEf2yqPEG_1Tg3QzHgsrr/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "kirti-poddar151", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Achievements",
  message:
    "I am incredibly proud to have been a member of Kisaan Pro, the team that achieved 2nd runner up position at the SMART INDIA HACKATHON 2022, held at MIT ADT University, Pune. Our project, which combined both hardware and software elements, was innovative and caught the judges' attention, leading us to this prestigious position of 2nd runner up at the national level. The recognition and prize money of 50k that we received are a testament to our dedication and hard work. Kisaan Pro's remarkable achievement at this prestigious competition is a reminder that with determination, hard work, and collaboration, we can overcome any challenge and achieve great success.",
  images: [
    { 
      img: require("../editable-stuff/achi.jpeg"), 
      label: "SMART INDIA HACKATHON 2022", 
      paragraph: "NATIONAL RUNNER UP, Government of India" 
    },
    { 
      img: require("../editable-stuff/achi2.jpeg"), 
      label: "SMART INDIA HACKATHON 2022", 
      paragraph: "Winning prize money of 50k" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Figma", value: 70 },
    { name: "Java", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C++", value: 90},
    { name: "JavaScript", value: 60 },
    { name: "React", value: 60 },
    { name: "HTML/CSS", value: 65 },
    { name: "Canva", value: 95 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Graphic Designing opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "kirtipoddar151@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'UI Designer',// Here Add Company Name
      companylogo: require('../assets/img/kisaan.png'),
      date: 'Feb 2022 – Present',
    },
    {
      role: 'Mentee Microsoft Engage’2022',
      companylogo: require('../assets/img/microsoft.png'),
      date: 'March 2022 – July 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };