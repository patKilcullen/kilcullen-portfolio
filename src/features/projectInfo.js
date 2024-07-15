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


import React from "react";

const BalderdashDescription = (
  <div>
    <p>
      <strong>Balderdash</strong>, a game based on the card/board game of the
      same name, is a personal project that I built entirely by myself. I
      couldn’t find a digital version of the game, so I thought building
      something new would be a fun challenge.
    </p>
    <p>
      In the game, a player gets a random, unusual word and its definition.
      Other players can only see the word, and they write their own definitions
      for it. Players then guess the right word and earn points in various ways.
    </p>
    <p>
      I built it using the <strong>PERN</strong> (PostgreSQL, Express, React,
      Node) stack and utilized additional technology like{" "}
      <strong>Socket.io, OpenAI, and AWS</strong>.
    </p>
    <p>
      I first developed APIs to get random words and definitions and built the
      basic game logic for a single-player version of the game. Then I built
      databases and modified the logic to incorporate multiple players, and I
      employed Socket.io to make live updates between multiple users. I built
      out the logic, React components, and sockets for each consecutive stage of
      the game, one stage at a time. I designed the UI to be as intuitive as
      possible and mimic an actual card game where people hold cards in their
      hands (the idea is they hold their phones instead of cards).
    </p>
    <p>
      I used OpenAI to solve a problem that couldn’t be solved previously. If a
      player wrote a definition that they felt accurately defined a word, but
      wasn’t the exact definition, they could ask AI if it was a fitting
      definition. I set up the AI to respond yes or no, and if the answer was
      correct, the player earned a point. I also used AWS to store words and
      definitions from APIs that were fitting for the game, so they could be
      used in a final product.
    </p>
    <p>
      Balderdash was the first large project I built entirely by myself. There
      are definitely a few things I would do differently if I were to build it
      today, now that I know more about software development, but it was a great
      learning experience and I am proud of what I created.
    </p>
  </div>
);

const EZStackDescription = (
  <div>
    <p>
      I collaborated with a team of like-minded developers to build{" "}
      <strong>EZ-Stack</strong>, a sleek web application that connected
      freelance web developers with clients, enabling them to seamlessly
      collaborate on projects. Our collaborative efforts were tightly woven as
      we conceptualized EZ-Stack's diverse array of features and decided the
      steps we would each take to begin and complete the project.
    </p>
    <p>
      EZ-Stack was structured with distinct client and freelancer interfaces. My
      primary focus was on the client side, which I generally worked on with one
      or two other developers. When working independently, I made a point to
      consistently align my intentions, procedures, and modifications with my
      teammates, ensuring a unified vision. Likewise, I remained readily
      available to engage in discussions about challenges and questions my
      teammates were encountering.
    </p>
    <p>
      I also worked closely with teammates through paired programming,
      navigating through intricate challenges step by step, meticulously
      documenting each progression. Whenever either of us had an idea on how to
      solve a problem, we would explain our reasoning behind it and work through
      it step by step, even if we may have been skeptical of its effectiveness.
      This led to a lot of breakthroughs.
    </p>
    <p>
      The most important aspect of EZ-Stack wasn’t the client side or the
      freelancer side, it was where they met and interacted. As I worked closely
      with one or two developers on the client side, we kept in touch with those
      working on the freelancer side. Their functionality often mirrored each
      other, and that allowed us to offer valuable help even if we were
      unfamiliar with that part of the code. We were clear about what was needed
      from either side and how they would ultimately interact at each step of
      the freelancing process. That communication, willingness to help, and the
      understanding that we were all in it together, working for a common goal,
      helped EZ-Stack to come together in one highly functional piece.
    </p>
  </div>
);





export const projects = [
  {
    name: "Balderdash",
    description: "An interactive word game to play alone or with friends.",
    about: BalderdashDescription,
    // "Balderdash, a game based on the card/board game of the same name, is a personal project that I built entirely by myself. I couldn’t find a digital version of the game, so I thought building something new would be a fun challenge. In the game, a player gets a random, unusual word and its definition. Other players can only see the word, and they write their own definitions for it. Players then guess the right word and earn points in various ways. I built it using the PERN (PostgreSQL, Express, React, Node) stack and utilized additional technology like Socket.io, OpenAI, and AWS.  I first developed APIS to get random words and definitions and built the basic game logic for a single-player version of the game. Then I built databases and modified the logic to incorporate multiple players, and I employed Socket.io to make live updates between multiple users. I build out the logic, React components, and sockets for each consecutive stage of the game, one stage at a time. I designed the UI to be as intuitive as possible and mimic an actual card game where people hold cards in their hands (the idea is they hold their phones instead of cards).  I used OpenAI to solve a problem that couldn’t be solved previously. If a player wrote a definition that they felt accurately defined a word, but wasn’t the exact definition, they could ask AI if it was a fitting definition. I set up the AI to respond yes or no, and if the answer was correct, the player earned a point. I also used AWS to store words and definitions from APIS that were fitting for the game, so they could be used in a final product. Balderdash was the first large project I built entirely by myself. There are definitely a few things I would do differently if I were to build it today, now that I know more about software development, but it was a great learning experience and I am proud of what I created.",
    // "I based this app off the somewhat obscure word game also called Balderdash. Played alone, a user can see how many definition they can guess correctly out of a certain number. Played with others, one user sees the correct definition of the word, and the others have to guess. \n This app is currently under development. It was built as a challenge to see what I could build in a single weekend. It's current state was built in that time frame, but I look forward to adding to it.",
    code: "https://github.com/patKilcullen/Balderdash",
    demo: "https://www.youtube.com/watch?v=CF5TT-MY4oY",
    youTubeCode: "CF5TT-MY4oY",
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
    about: EZStackDescription,
      // "I worked extensively with my group to build this highly functional, sleek app from start to finish. I played an important role in the ideation of the app's many features, I put a lot of time into the database schema, which icluded 7 models, I spent most of my time implementing info from the database in React components, and I aided in the site's design. ",
    code: "https://github.com/patKilcullen/EZ-Stack",
    demo: "https://youtu.be/4eurtRFDq0s",
    youTubeCode: "4eurtRFDq0s",
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
    youTubeCode: "lmXfjCeO7IA",
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