import dissertation from "./components/dissertation.pdf";

const logotext = "Tyler Liddell";
const meta = {
    title: "Tyler Liddell",
    description: " Tyler Liddell's personal website. A place to showcase my work and share my thoughts.",
};

const introdata = {
    title: "Hello!",
    description: `I am an aspiring NLP and Artificial Intelligence researcher.`,
    your_img_url: "./images/tyler.JPG",
};

const dataabout = {
    title: "About my self",
    aboutme: `I am a recent graduate with a Master's degree in Computer Science from City St. George's University of London. While I am most passionate about NLP and AI research, I also just good old fashioned software development. I enjoy learning new programming skills by jumping head first into a project. I am currently searching for PhD and/or research assistant opportunities. Feel free to contact me if you have any questions or would like to discuss potential collaborations.`,
};

const skills = [
    {
      name: "Python",
      description: "Proficient in Python, with experience in building machine learning models, data preprocessing pipelines, and NLP applications using libraries like PyTorch, NLTK, and Spacy."
    },
    {
      name: "Java",
      description: "Strong Java programming skills, with experience in developing object-oriented applications, game development, and implementing data structures and algorithms."
    },
    {
      name: "C++",
      description: "Solid understanding of C++ programming language, with experience in writing efficient and performant code for various applications."
    },
    {
      name: "JavaScript",
      description: "Proficient in JavaScript, with experience in building web applications using frameworks like React and libraries like jQuery."
    },
    {
      name: "SQL",
      description: "Strong knowledge of SQL, with experience in designing and querying databases for various applications."
    },
    {
      name: "Haskell",
      description: "Familiarity with functional programming concepts and the Haskell language, with experience in writing concise and expressive code."
    },
    {
      name: "PHP",
      description: "Basic knowledge of PHP, with experience in building server-side web applications and integrating with databases."
    }
  ];

const hobbies = [{
        name: "Ultra Running",
        description: `Ultra running has become a passion of mine over the past few years. 
        I love the challenge of pushing my limits and exploring new trails. 
        So far I have ran The Lap and the Lakes in a day in the Lake District. 
        UTMB Snowdonia 50k and 100k. Next up will most likely be something on the east coast of the US.`,
    },
    {
        name: "Trekking and Photography",
        description: `I love the feeling of being on the trail living out of my backpack for long periods of time. So far I have 
        hiked the TMB, AV 1, and a large section of the JMT. Next up something on the east coast of the US. 
        I also like taking mediocre pictures when I am out on the trail and will post some here soon.`
    },
];

const dataportfolio = [
    {
      title: "Flight Tracker",
      description: "A web app built using Flask, React, and the OpenSky API to track active flights, view their destinations, and search for flights.",
      link: "https://github.com/tliddell13/airplanes"
    },
    {
      title: "Pach.ai App",
      description: "A React Native app that calculates a personal carbon-emission score based on a user's spending habits, utilizing a REST API and third-party service for scraping bank transactions.",
    },
    {
      title: "Jon-Mick Platform Game",
      description: "A 2D platform game developed in Java, featuring game mechanics, level design, character controls, and object-oriented programming principles.",
      link: "https://github.com/tliddell13/JonMick"
    }
  ];
  
  const researchProjects = [
    {
      title: "Experiments With Word Order in Language Models",
      description: "A study on how word order affects the performance of language models, particularly smaller open source models such as the Llama-2-7b and Mistral-7b models.",
      link: dissertation
    },
    {
      title: "SMS Spam Detection",
      description: "Developed and evaluated machine learning models using CBOW and other NLP techniques to classify SMS texts as spam or legitimate. Achieved 98% accuracy on the holdout test set.",
      link: "https://github.com/tliddell13/SMS-spam-detection"
    },
    {
      title: "Emotion Analysis",
      description: "Performed fine-grained emotion classification on a dataset containing 5 emotions (anger, joy, etc.) using MATLAB. Explored algorithms like TF-IDF, decision trees, and random forests.",
      link: "https://github.com/tliddell13/EmotionAnalysis"
    }
  ];

const contactConfig = {
    MAIL: "tliddell13@gmail.com",
    PHONE: "+1 (530) 908-5676",
    RESUME_PIC: "./images/resumePic.jpg",
};

const socialprofiles = {
    github: "https://github.com/tliddell13",
    linkedin: "https://www.linkedin.com/in/tyler-liddell-939583167/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    researchProjects,
    skills,
    hobbies,
    introdata,
    contactConfig,
    socialprofiles,
    logotext,
};