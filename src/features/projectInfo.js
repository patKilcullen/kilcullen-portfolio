import  balderdashPic from '../BalderdashPic.png'
import EZStackPic from '../EZ-StackPic.png'
import GraceShopperPic from '../Grace-ShopperPic.png'
// import JuniorPhasePic from './juniorPhasePic.png'


 import javascriptIcon from "../javascriptLogo.png";
 import reactIcon from "../reactLogo.png";
 import reduxIcon from "../reduxLogo.png";
 import postgresIcon from "../postgreSQLLogo.png";
 import htmlIcon from "../htmlLogo.png";
 import cssIcon from "../cssLogo.png";
 import nodeSVG from "../node-js.svg";
 import materialIcon from "../materialUILogo.png";
 import sequelizeIcon from "../sequelize.svg";
 import expressIcon from "../expressLogo.png";
 import jwtIcon from "../jwtLogo.png"
 import socketIOIcon from "../socketIO.png"
import awsLogo from "../awsLogo.png"

export const projects = [
  {
    name: "Balderdash",
    description: "An interactive word game to play alone or with friends.",
    about:
      "I based this app off the somewhat obscure word game also called Balderdash. Played alone, a user can see how many definition they can guess correctly out of a certain number. Played with others, one user sees the correct definition of the word, and the others have to guess. \n This app is currently under development. It was built as a challenge to see what I could build in a single weekend. It's current state was built in that time frame, but I look forward to adding to it.",
    code: "https://github.com/patKilcullen/Balderdash",
    demo: "https://www.youtube.com/watch?v=CF5TT-MY4oY",
    tech: "Node.js, PostgreSQL, Express, React, Redux",
    tech2: [
      { symbole: javascriptIcon, name: "JavaScript" },
      { symbole: reactIcon, name: "React" },
      { symbole: reduxIcon, name: "Redux" },
      { symbole: socketIOIcon, name: "Socket.io" },
      { symbole: awsLogo, name: "AWS" },
      { symbole: postgresIcon, name: "PostgreSQL" },
      { symbole: htmlIcon, name: "HTML" },
      { symbole: cssIcon, name: "CSS" },
      { symbole: nodeSVG, name: "Node" },
      { symbole: materialIcon, name: "MaterialUI" },
      { symbole: sequelizeIcon, name: "Sequelize" },
      { symbole: expressIcon, name: "Express" },
      { symbole: jwtIcon, name: "JWT" },
    ],
    pic: balderdashPic,
    align: "left",
  },

  {
    name: "EZ-Stack",
    description: "An app that connects freelancers to clients.",
    about:
      "I worked extensively with my group to build this highly functional, sleek app from start to finish. I played an important role in the ideation of the app's many features, I put a lot of time into the database schema, which icluded 7 models, I spent most of my time implementing info from the database in React components, and I aided in the site's design. ",
    code: "https://github.com/patKilcullen/EZ-Stack",
    demo: "https://youtu.be/4eurtRFDq0s",
    tech: "Node.js, PostgreSQL, Express, React, Redux, Material UI, CSS, Cloudinary, JWT",
    tech2: [
      { symbole: javascriptIcon, name: "JavaScript" },
      { symbole: reactIcon, name: "React" },
      { symbole: reduxIcon, name: "Redux" },
      { symbole: jwtIcon, name: "JWT" },
      { symbole: postgresIcon, name: "PostgreSQL" },
      { symbole: htmlIcon, name: "HTML" },
      { symbole: cssIcon, name: "CSS" },
      { symbole: nodeSVG, name: "Node" },
      { symbole: materialIcon, name: "Material UI" },
      { symbole: sequelizeIcon, name: "Sequelize" },
      { symbole: expressIcon, name: "Express" },
    ],
    pic: EZStackPic,
    align: "right",
  },
  {
    name: "Grace-Shopper",
    description: "The All-In-One E-Commerce Platform.",
    about:
      "My first substantial group project. I spent ample time working out the authentication features of the app, as well as the cart feature, which was the first time I worked extensively with a through table.",
    code: "https://github.com/patKilcullen/Grace-Shopper1",
    demo: "https://www.youtube.com/watch?v=lmXfjCeO7IA",
    tech: "Node.js, PostgreSQL, Express, React, Redux, Tailwind CSS, JWT",
    tech2: [
      { symbole: javascriptIcon, name: "JavaScript" },
      { symbole: reactIcon, name: "React" },
      { symbole: reduxIcon, name: "Redux" },
      { symbole: postgresIcon, name: "PostgreSQL" },
      { symbole: htmlIcon, name: "HTML" },
      { symbole: cssIcon, name: "CSS" },
      { symbole: nodeSVG, name: "Node" },
      { symbole: materialIcon, name: "Material UI" },
      { symbole: sequelizeIcon, name: "Sequelize" },
      { symbole: expressIcon, name: "Express" },
    ],
    pic: GraceShopperPic,
    align: "left",
  },

  // {
  //   name: "Full Stack App",
  //   description: "This was the first full stack app I ever made!",
  //   about:
  //     "It may not look like much, but I was proud of my first full stack CRUD app. I received the highest grade in my cohort of 60+ students, and my instructor described it as the 'Best project I have seen yet!' I put a lot of effort into it and thoroughly searched for and eliminated many bugs.",
  //   code: "https://github.com/patKilcullen/jpfp-template-V2-a",
  //   demo: "https://youtu.be/yNKRxSyjyG8",
  //   tech: "Node.js, PostgreSQL, Express, React, Redux, CSS",
  //   pic: JuniorPhasePic,
  //   align: "right",
  // },
];