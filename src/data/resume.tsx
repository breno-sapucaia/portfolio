import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Breno Sapucaia",
  initials: "BS",
  url: "https://brenosapucaia.com",
  location: "São Paulo, Brazil",
  locationLink: "https://www.google.com/maps/place/sao+paulo",
  description:
    "Software Engineer at [hotglue](https://www.linkedin.com/company/hotglue/posts/?feedView=all) | Python, Node, React, AWS",

  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Typescript",
    "Postgres",
    "Docker",
    "AWS",
    "GraphQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@brenosapucaia.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/brenosapucaia",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/breno-sapucaia/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:brenoss.magalhaes@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "hotglue",
      href: "https://hotglue.xyz",
      badges: [],
      start: "Dec 2021",
      end: "Present",
      location: "Gaithersburg, Maryland, United States · Remote",
      title: "Fullstack Engineer",
      logoUrl:
        "/hotglue_logo.jpeg",
      milestones: [
        {
          title: "Fullstack Engineer",
          start: "Mar 2023",
          end: "Present",
          description:
            "Working with serverless applications using AWS Lambda, Python, and Node.js. Handling data storage services, primarily S3 and MongoDB, to store, retrieve, and manipulate data. Collaborating with cross-functional teams, such as developers, designers, and stakeholders, to deliver high-quality software solutions.",
        },
        {
          title: "Frontend Engineer",
          start: "Dec 2021",
          end: "Mar 2023",
          description:
            "Working with the hotglue team remotely in a PaaS that uses technologies such as NextJs and Material-UI to front-end it and Chalice and Python for the back-end all that operating using AWS Cloud",
        },
      ],
    },
    {
      company: "Adalo",
      href: "https://www.adalo.com/",
      badges: [],
      start: "May 2021",
      end: "Oct 2021",
      title: "Software Engineer",
      logoUrl:
        "/adalo.jpeg",

      milestones: [
        {
          title: "Software Engineer",
          start: "May 2021",
          end: "Oct 2021",
          description:
            "Development and maintenance of Adalo, a no-code platform for building progressive web and mobile applications. My main role here was to be a problem solver, working in a team of Brazilians that was outsourced to the company focusing on bug fixes of the PaaS mainly. It was very difficult since everything was very generic once the app was an app maker from UI to APIs. My experience with Adalo helped me to sharpen my debug skills and patience. Technologies: React, Node, Redux, Jest, PostgreSQL and Heroku.",
        },
      ],
    },
    {
      company: "edecoração",
      href: "https://www.edecoracao.com.br/",
      badges: [],
      start: "Feb 2021",
      end: "May 2021",
      title: "Junior Software Developer",
      logoUrl: "/edecoracao_logo.jpeg",
      milestones: [
        {
          title: "Junior Software Developer",
          start: "Feb 2021",
          end: "May 2021",
          description:
            "Worked as a Junior Software Developer Main responsibility was development and maintenance of a .NET ERP platform. Utilized DDD, MVVM, Layers, Dependency Injection (Ninject), and Inversion of Control patterns, all within an agile SCRUM framework/culture. Also contributed to front-end development using React.js.",
        },
        {
          title: "Intern",
          start: "May 2019",
          end: "Feb 2021",
          description:
            "Giving maintaining a .NET ERP platform which has DDD, MVVM, Layers, Dependecy Injection (Ninject), Inversion of Control as patterns beeing aplicated followed by the agile SCRUM framework/culture.",
        },
      ],
    },
  ],
  education: [
    {
      school: "FIAP",
      href: "https://www.fiap.com.br/",
      degree: "Technology degree in Systems Analysis and Development",
      logoUrl: "/fiap.webp",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Portfolio Template",
      href: "https://github.com/brenosapucaia/portfolio-template",
      dates: "2024 - Present",
      active: true,
      description:
        "An open-source portfolio template built with Next.js, TypeScript, and TailwindCSS. Designed to help developers showcase their work and experience.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/brenosapucaia/portfolio-template",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack the Valley",
      dates: "2019",
      location: "Toronto, Canada",
      description:
        "Developed a real-time collaboration tool for developers using WebRTC and React.",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/brenosapucaia/hack-the-valley",
        },
      ],
    },
  ],
}
