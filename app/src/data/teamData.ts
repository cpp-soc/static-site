const teamData = [
  // Hill Family Fellows (2025, 2024, etc.)
  {
    name: "Maxwell Caron",
    year: "Senior",
    program: "Computer Information Systems",
    role: "Student Operations Manager",
    description:
      "Gained valuable experience with the Student Data Center by participating in extracurricular competition teams such as CPTC and CCDC, as well as being involved in clubs like SWIFT. This role allowed hands-on work with the infrastructure of the SDC while also exploring a passion for cybersecurity within the SOC.",
    picture: "https://www.cpp.edu/cba/digital-innovation/img/mxwellcro.jpg",
    media: {
      linkedin: "https://www.linkedin.com/in/maxwell-caron",
    },
    group: "SDC",
    teamYear: 2025,
  },
  {
    name: "Marshall Ung",
    year: "Senior",
    program: "Computer Engineering",
    role: "Student Operations Manager",
    description:
      "Manages the underlying infrastructure used to provide clubs and classrooms compute power that supports student learning. Prior to this position, competed in cybersecurity competitions such as CPTC and CCDC. Plans to pursue a career in consulting, either offensive or defensive.",
    picture:
      "https://www.cpp.edu/cba/digital-innovation/img/marshall-j-ung.jpg",
    media: {
      linkedin: "https://www.linkedin.com/in/marshall-j-ung/",
    },
    group: "SDC",
    teamYear: 2025,
  },
  {
    name: "Roman Arreguin",
    year: "Junior",
    program: "Computer Information Systems",
    role: "Student Operations Manager",
    description:
      "Roman Arreguin is a third-year Computer Information Systems major and as a Part-Time Student Operations Manager for both the Student Security Operations Center (SOC) as well as at the Mitchell C. Hill Student-Run Data Center (SDC), is a part of the Hill Family Fellows. In this role, he helps operate the SIEM system within the SOC with the ultimate goal of protecting and supporting the SDC. Through this role, Roman has developed hands-on skills using professional-grade security tools in a real-world environment with tools such as Splunk and Proxmox. After graduation, he plans to work as a security/SOC analyst.",
    picture:
      "https://www.cpp.edu/cba/digital-innovation/img/roman_arreguin_headshot.jpg",
    media: {
      linkedin: "https://www.linkedin.com/in/roman-arreguin-8962b230b/",
    },
    group: "SOC",
    teamYear: 2025,
  },

  {
    name: "Eric Heng",
    year: "Senior",
    program: "Computer Information Systems",
    role: "Student Operations Manager",
    description:
      "Manages infrastructure projects, explores information technology, and contributes to the organization's growth. Enjoys gaining hands-on experience with virtualization, server management, and enterprise security information event management software that are rarely accessible in traditional classroom settings. Plans to pursue a career in networking.",
    picture: "https://www.cpp.edu/cba/digital-innovation/img/erichen2.png",
    media: {
      linkedin: "https://www.linkedin.com/in/eric-heng-631468w/",
    },
    group: "SOC",
    teamYear: 2025,
  },
  {
    name: "Nich Rosen",
    year: "Senior",
    program: "Computer Information Systems",
    role: "Student Operations Manager",
    description:
      "Leads SOC operations, oversees the configuration, maintenance, and operation of industry-grade SIEM systems and other cybersecurity tools within the SOC. Leads and organizes hands-on training initiatives with the goal of broadening cybersecurity learning opportunities and expanding access for all CPP students. Passionate about threat detection and incident response and aims to pursue a career as a SOC analyst after graduation.",
    picture:
      "https://www.cpp.edu/cba/digital-innovation/img/nich_rosen_headshoteditjpg.jpg",
    media: {
      linkedin: "https://www.linkedin.com/in/nichrosen/",
    },
    group: "SOC",
    teamYear: 2025,
  },

  {
    name: "Tommy Phao",
    year: "Senior",
    program: "Computer Information Systems",
    role: "Security Engineer",
    description:
      "From starting as a SOC Volunteer in Spring 2024 to rebuilding the SOC alongside the Student Operations Manager!",
    picture:
      "https://www.cpp.edu/cba/information-assurance/img/student/tommy.jpg",
    media: {
      linkedin: "https://www.linkedin.com/in/thomasphao/",
    },
    group: "SOC",
    teamYear: 2025,
  },
  // Existing entries below...
  {
    name: "Joseph Shin",
    year: "MS",
    program: "Information Security",
    role: "Director of SOC",
    description:
      "Graduate student in the Masters in Information Security program and current director of the SOC. Hill Family Fellow. Member of SWIFT since 2023, participated in the National DOE CyberForce Cybersecurity Competition and in the National Centers of Academic Excellence in Cybersecurity (NCAE-C) national competition where the team obtained 2nd place nationally. Learning to deploy and manage an industry recognized SIEM platform called Splunk to monitor the Student Data Center for security events. Used this experience to teach and share knowledge of Splunk to other student volunteers at the SOC and created a Splunk Lab for newcomers to get practical experience using Splunk.",
    picture: "https://calpolysoc.org/assets/2024-team/director.jpg",
    media: {
      linkedin: "https://www.linkedin.com/in/hsshin95/",
      github: "https://github.com/Sh0bra",
    },
    group: "SOC",
    teamYear: 2024,
  },
  {
    name: "Drake Huffman",
    year: "Junior",
    program: "Computer Information Systems",
    role: "Security Engineer Lead",
    description:
      "My time working for the Student Security Operations Center's managing team has been incredibly fulfilling. I've had the opportunity to help mentor and guide our volunteers through their Cyber career journey. Our work has resulted in our volunteers and alumni securing internships and job offers from top tech companies. Contributing to the success of others has been an extremely rewarding experience.",
    picture: "https://calpolysoc.org/assets/2024-team/security-engineer-lead.jpg",
    media: {
      linkedin: "https://www.linkedin.com/in/drakehuffman/",
    },
    group: "SOC",
    teamYear: 2024,
  },
  {
    name: "Kenneth Cher",
    year: "Senior",
    program: "Computer Information Systems",
    role: "Security Engineer",
    description:
      "Hi everyone, my name is Kenneth and I am one of the Security Operation Center student employees. I have been in a SOC environment using SIEMs before, and want to help students gain SOC skills too!. I have experience from multiple internships in cybersecurity and Cal Poly Pomona's Student SOC has helped me improve my skills and achieving my goal of becoming a cybersecurity engineer.",
    picture: "https://calpolysoc.org/assets/2024-team/1707181149301.jpg",
    media: {
      linkedin: "https://www.linkedin.com/in/kenneth-cher/",
    },
    group: "SOC",
    teamYear: 2024,
  },
    {
    name: "Justin Sulivan-Pascual",
    year: "",
    program: "Computer Information Systems",
    role: "Director of Mitchell Hill Data Center",
    description:
      "",
    picture: "https://media.licdn.com/dms/image/v2/D5603AQFdDQlfQMvR7Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697516013554?e=1762387200&v=beta&t=ulNC1stKHlvvQYN-rEfjds2xls86Du8lMgxbLWHMmQk",
    media: {
      linkedin: "https://www.linkedin.com/in/justinsp/",
    },
    group: "SOC",
    teamYear: 2024,
  },
    {
    name: "Rachel Decastro",
    year: "",
    program: "Computer Information Systems",
    role: "Director of Mitchell Hill Data Center",
    description:
      "Working as a director for the Mitchell C. Hill Student Data Center (SDC) has been an incredible experience thus far. Being exposed to real networking equipment hands-on and working with others as a team has helped me solidify my love for the field and give back to others by teaching what I've learned. I get to spend my time creating infrastructure that serves a real, higher purpose of being used by clubs and competition teams, troubleshooting real-life issues, and working towards my passion to grow my skills.",
    picture: "https://media.licdn.com/dms/image/v2/D5603AQFpJOmB7hDZow/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730597761670?e=1762387200&v=beta&t=D8xI219TAppHifk_zBmBoVXVPc75rWGmNt9z1k1Qksg",
    media: {
      linkedin: "https://www.linkedin.com/in/rachel-decastro/",
    },
    group: "SDC",
    teamYear: 2024,
  },
  {
    name: "Derrick Tran",
    year: "Senior",
    program: "Computer Information Systems",
    role: "Director of SDC, Hill Family Fellow",
    description:
      "Senior student in Computer Information Systems program and the current director of the SDC. Hill Family Fellow. SWIFT club member since 2021 and affiliated with the SDC since then. In 2023 worked at Google/Mandiant in an internship as red team consultant intern. Recently competed in the Global Collegiate Penetration Testing Competition and the National Collegiate Cyber Defense Competition where the team obtained 2nd place nationally. Helps with administrative responsibilities of the SDC, making sure critical systems are up to date. Mentors volunteers about IT infrastructure.",
    picture: "https://www.cpp.edu/cba/digital-innovation/img/derrick-tran.png",
    media: {},
    group: "SDC",
    teamYear: 2024,
  },
  {
    name: "Eric Heng",
    year: "Junior",
    program: "Computer Information Systems",
    role: "Vice President of Outreach",
    description: "",
    picture: "https://calpolysoc.org/assets/2024-team/vp-outreach.jpg",
    media: {
      linkedin: "https://www.linkedin.com/in/eric-heng-86261a194/",
    },
    group: "SOC",
    teamYear: 2024,
  },
  {
    name: "Thomas Phao",
    year: "Junior",
    program: "Computer Information Systems",
    role: "Webmaster",
    description: "Responsible for maintaining Web Infrastructure and Development. Building SOC Static Site and Wiki!",
    picture: "https://calpolysoc.org/assets/2024-team/webmaster.jpg",
    media: {
      linkedin: "https://www.linkedin.com/in/thomasphao/",
      github: "https://github.com/xdkaine",
    },
    group: "SOC",
    teamYear: 2024,
  },
  // SDC Leadership History
  {
    name: "Aina Keagy",
    year: "SDC Lead",
    program: "",
    role: "SDC Lead",
    description:
      "SDC Leadership 2017-2018. Currently at Twitch - Senior Privacy Manager.",
    picture: "/assets/stockavatar.jpg",
    media: {},
    group: "SDC",
    teamYear: 2018,
  },
  {
    name: "Kyle Keagy",
    year: "SDC Lead",
    program: "",
    role: "SDC Lead",
    description:
      "SDC Leadership 2018-2019. Currently at Cyderes - Practice Director for Microsoft Identity.",
    picture: "/assets/stockavatar.jpg",
    media: {},
    group: "SDC",
    teamYear: 2019,
  },
  {
    name: "Jonathan Hernandez",
    year: "SDC Lead",
    program: "",
    role: "SDC Lead",
    description:
      "SDC Leadership 2019-pandemic. Currently at UCLA - Programmer Analyst.",
    picture: "/assets/stockavatar.jpg",
    media: {},
    group: "SDC",
    teamYear: 2020,
  },
  // SOC Leadership History
  {
    name: "Juan Ortega",
    year: "SOC Lead",
    program: "",
    role: "SOC Lead",
    description:
      "SOC Leadership prior to 2017/18. (Unconfirmed, needs verification)",
    picture: "/assets/stockavatar.jpg",
    media: {},
    group: "SOC",
    teamYear: 2017,
  },
  {
    name: "K Singh",
    year: "SOC Lead",
    program: "",
    role: "SOC Lead",
    description:
      "SOC Leadership 2018-2019 (with Carlos Marquez). Now at Mandiant as Senior Incident Response Consultant. Formerly at CrowdStrike.",
    picture: "/assets/stockavatar.jpg",
    media: {},
    group: "SOC",
    teamYear: 2019,
  },
  {
    name: "Carlos Marquez",
    year: "SOC Lead",
    program: "",
    role: "SOC Lead",
    description:
      "SOC Leadership 2018-2019 (with K Singh). Currently at CrowdStrike as Security Engineer (prodsec).",
    picture: "/assets/stockavatar.jpg",
    media: {},
    group: "SOC",
    teamYear: 2019,
  },
  {
    name: "K Singh",
    year: "SOC Lead",
    program: "",
    role: "SOC Lead",
    description:
      "SOC Leadership 2019-pandemic. Now at Mandiant as Senior Incident Response Consultant.",
    picture: "/assets/stockavatar.jpg",
    media: {},
    group: "SOC",
    teamYear: 2020,
  },
  {
    name: "Jensen",
    year: "",
    program: "",
    role: "Student Director",
    description: "SOC Leadership pandemic-??? Now at NBCUniversal.",
    picture: "/assets/stockavatar.jpg",
    media: {},
    group: "SOC",
    teamYear: 2021,
  },
];

export default teamData;
