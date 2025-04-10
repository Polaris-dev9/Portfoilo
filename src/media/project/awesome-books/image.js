import allDevice from './all-devices-black.png';
import desktop from './desktop.png';
import tablet from './tablet.png';
import laptop from './laptop.png';
import mobile from './mobile.png';

const awesomeBook = {
  title: 'Awesome Books',
  description: `
        This project is designed to organize your favorite books and their authors. 
        It's constructed using localStorage and dynamic pages, allowing for nested pages 
        within a single page. Several projects have been reviewed and approved by professional coders at Microverse
      `,
  techList: [
    'CSS',
    'JavaScript',
    'localStorage',
    'HTML',
  ],
  link: [
    'https://powerlevel9000.github.io/Awesome-Books/dist/',
    'https://github.com/PowerLevel9000/Awesome-Books/',
  ],
  image: [
    {
      image: allDevice,
      styleMobile: {
        width: '80%',
        height: '40vh',
      },
      style: {
        width: '80%',
        height: '70vh',
      },
    },
    {
      image: desktop,
      styleMobile: {
        width: '80%',
        height: '40vh',
        maxWidth: '400px',
      },
      style: {
        width: '80%',
        height: '70vh',
        maxWidth: '700px',
        transform: 'rotateY(30deg)',
      },
    },
    {
      image: laptop,
      styleMobile: {
        width: '80%',
        height: '40vh',
        maxWidth: '400px',
      },
      style: {
        width: '80%',
        height: '70vh',
        maxWidth: '700px',
        transform: 'rotateY(30deg)',
      },
    },
    {
      image: tablet,
      styleMobile: {
        width: '50%',
        height: '40vh',
        maxWidth: '200px',
      },
      style: {
        width: '80%',
        height: '70vh',
        maxWidth: '350px',
      },
    },
    {
      image: mobile,
      styleMobile: {
        width: '40%',
        height: '40vh',
        maxWidth: '150px',
      },
      style: {
        width: '80%',
        height: '70vh',
        maxWidth: '200px',
      },
    },
  ],
};

export default awesomeBook;
