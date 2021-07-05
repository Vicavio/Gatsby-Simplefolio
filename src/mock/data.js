import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Viorica',
  subtitle: 'I am the Unknown Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me-image.jpg',
  paragraphOne: 'I am a beginner front-end developer.',
  paragraphTwo:
    'My journey in web development started a few months ago and I knew literally nothing about programming.',
  paragraphThree:
    'Now, I’ve improved a lot. Being a web developer has given me insight on how the internet as a whole works.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'registration-form.jpg',
    title: 'Form Registration',
    info: 'Simple client side form validation. Check required, length, email and password match.',
    info2:
      'This form has to validate the details user is entering in each field and in case validation fails it has to highlight the invalid field and display the related message.',
    url: '',
    repo: 'https://github.com/Vicavio/Registration-form.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo-react.jpg',
    title: 'To-Do App',
    info: 'Build a Todo App with React ',
    info2:
      'The application will display the tasks, add new tasks, mark tasks as complete, and remove tasks',
    url: '',
    repo: 'https://github.com/Vicavio/To-Do-App.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'random-jokes.jpg',
    title: 'Random Jokes',
    info: 'Create a web page that will display random jokes on a button click',
    info2:
      'An application that fetches a new  joke each time when you hit a button, and it displays it in the browser. Using Javascript, HTML/CSS and web api.',
    url: '',
    repo: 'https://github.com/Vicavio/Random-Jokes.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/vicacrudu/status/509700000398712832?s=21',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/feed/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Vicavio?tab=repositories',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
