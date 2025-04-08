import allDevice from './all-devices-black.png';
import desktop from './desktop.png';
import laptop from './laptop.png';
import tablet from './tablet.png';
import mobile from './mobile.png';

const events = {
  title: 'Event Template',
  description: `
        This project is constructed using pure HTML, CSS, and JavaScript. Its primary 
        emphasis is on frontend design and dynamic construction. If you wish to organize an event, 
        all that's required is data editing, enabling easy setup. During this project, I acquired 
        knowledge in core concepts like flexbox, grid, and intricate navigation bars."
      `,
  techList: [
    'CSS',
    'JavaScript',
    'GitHub',
    'HTML',
  ],
  link: [
    'https://powerlevel9000.github.io/Dynamic-Event-Template/',
    'https://github.com/PowerLevel9000/Dynamic-Event-Template',
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

export default events;
