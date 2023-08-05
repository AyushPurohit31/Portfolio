import {
    ECerti,
    StoreMate,
    javascript,
    html,
    kautilya,
    avm,
    nitk,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    github,
    figma,
    firebase,
    bootstrap,
    c,
    cpp,
    canva,
    express,
    netlify,
    postman,
    python,
    vscode,
    instagram,
    linkedin,
    facebook,
    gmail,
    link,
    chatapp,
    crypthunt,
    ayushportfolio,
    mui,
    CodeGPT
  } from "../assets";
  
  const educations = [
    {
      title: "Secondary education",
      company_name: "A.V.M School, Chhapar, Rajasthan",
      icon: avm,
      iconBg: "#FFFF",
      date: "2008 - 2017",
      points: [
        "RBSE 10th - 97.33% ",
      ],
    },
    {
      title: "Senior secondary education",
      company_name: "Kautilya academy, Sikar, Rajasthan",
      icon: kautilya,
      iconBg: "#FFFF",
      date: "2018 - 2019",
      points: [
        "RBSE 12th - 92.80%",
      ],
    },
    {
      title: "B.tech",
      company_name: "NITK Surathkal, Karnataka",
      icon: nitk,
      iconBg: "#FFFF",
      date: "2020 - 2024",
      points: [
        "Persuing Electrical and Electronics Engineering",
      ],
    },
  ];
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "tech",
      title: "Skills",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  export const contacts = [
    {
      id: "github",
      title: "Github",
      icon: github,
      link : "https://github.com/AyushPurohit31"
    },
    {
      id: "linkedIn",
      title: "LinkedIn",
      icon: linkedin,
      link : "https://www.linkedin.com/in/ayushpurohit31/"
    },
    {
      id: "gmail",
      title: "Gmail",
      icon: gmail,
      link : "mailto:ayushpurohit140@gmail.com"
    },
    {
      id: "insta",
      title: "Insta",
      icon: instagram,
      link : "https://www.instagram.com/ayushpurohit11/"
    },
    {
      id: "facebook",
      title: "Facebook",
      icon: facebook,
      link : "https://www.facebook.com/ayush.purohit.3914/"
    },
  ];

  const Jobs = [{
    name : "BeakInterview.Com",
    role : "Full Stack MERN development intern",
    date : "May 2023 - June-2023",
    tags: [
      {
        name: "react",
        icon: reactjs,
      },
      {
        name: "javascript",
        icon: javascript,
      },
      {
        name: "mui",
        icon: mui,
      },
      {
        name: "mongodb",
        icon: mongodb,
      },
    ],
  }]
  
  const webd = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "MUI",
      icon: mui,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Github",
      icon: github,
    },
    {
      name: "VsCode",
      icon: vscode,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "Netlify",
      icon: netlify,
    },
    {
      name: "Canva",
      icon: canva,
    },
    {
      name: "Figma",
      icon: figma,
    },
  ];

  const lang = [
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Javascript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    }
  ];
  
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "Personal website to showcase my work.",
      tags: [
        {
          name: "react",
          icon: reactjs,
        },
        {
          name: "javascript",
          icon: javascript,
        },
        {
          name: "Tailwind",
          icon: tailwind,
        },
      ],
      image: ayushportfolio,
      links : [
        {
          icon : github,
          src : "https://github.com/AyushPurohit31/Portfolio"
        },
      ],
    },
    {
      name: "StoreMate",
      description:
        " This is a MERN stack application to efficiently manage inventory, and billing operations in stores/shops.",
      tags: [
        {
          name: "react",
          icon: reactjs,
        },
        {
          name: "javascript",
          icon: javascript,
        },
        {
          name: "Tailwind",
          icon: tailwind,
        },
        {
          name: "expressJs",
          icon: express,
        },
        {
          name: "NodeJs",
          icon: nodejs,
        },
        {
          name: "Mongodb",
          icon: mongodb,
        },
      ],
      image: StoreMate,
      links : [
        {
          icon : link,
          src : "https://storemate.netlify.app/"
        },
        {
          icon : github,
          src : "https://github.com/AyushPurohit31/StoreClient"
        },
      ],
    },
    {
      name: "Crypt-Hunt",
      description:
        "API-based web-app that allows users to checkout any info about cryptocurrency like 24hr price change, marketcap, 24hr 1month and 1year price graph.",
      tags: [
        {
          name: "react",
          icon: reactjs,
        },
        {
          name: "javascript",
          icon: javascript,
        },
        {
          name: "mui",
          icon: mui,
        },
        {
          name: "firebase",
          icon: firebase,
        },
      ],
      image: crypthunt,
      links : [
        {
          icon : link,
          src : "https://crypt-hunt.netlify.app/"
        },
        {
          icon : github,
          src : "https://github.com/AyushPurohit31/Crypt-Hunt"
        },
      ],
    },
    {
      name: "Chat-App",
      description:
        "Full stack MERN chat app where any ony can register and chat with other registered users. Both one-on-one and group-chat feature implemented.",
      tags: [
        {
          name: "react",
          icon: reactjs,
        },
        {
          name: "javascript",
          icon: javascript,
        },
        {
          name: "expressJs",
          icon: express,
        },
        {
          name: "NodeJs",
          icon: nodejs,
        },
        {
          name: "Mongodb",
          icon: mongodb,
        },
      ],
      image: chatapp,
      links : [
        {
          icon : link,
          src : "https://web-whatschat.onrender.com/"
        },
        {
          icon : github,
          src : "https://github.com/AyushPurohit31/MERN-ChatApp"
        },
      ],
    },
    {
      name: "ChatGPT",
      description:
        "this is a clone website of chatgpt powered by OpenAi's GPT-3 model text-davinci-003 API.",
      tags: [
        {
          name: "react",
          icon: reactjs,
        },
        {
          name: "javascript",
          icon: javascript,
        },
        {
          name: "Css",
          icon: css,
        },
      ],
      image: CodeGPT,
      links : [
        {
          icon : link,
          src : "https://code-gpt-henna.vercel.app/"
        },
        {
          icon : github,
          src : "https://github.com/AyushPurohit31/CodeGPT"
        },
      ],
    },

    {
      name: "E-Certificate-Generator",
      description:
        "This is a feature which I developed for a EdTech platform. It can be used to send certificate pdf to given email and with your name.",
      tags: [
        {
          name: "react",
          icon: reactjs,
        },
        {
          name: "javascript",
          icon: javascript,
        },
        {
          name: "Express",
          icon: express,
        },
        {
          name: "Node",
          icon: nodejs,
        },
      ],
      image: ECerti,
      links : [
        {
          icon : github,
          src : "https://github.com/AyushPurohit31/Certificate-generator"
        },
      ],
    },
    
  ];
  
  export {educations,lang, tools, webd, projects, Jobs};