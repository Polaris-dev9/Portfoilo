import allDevice from './all-devices-black.png';
import desktop from './desktop.png';
import laptop from './laptop.png';
import tablet from './tablet.png';
import mobile from './mobile.png';

const stockMarket = {
  title: 'Stock Analysis',
  description: `
        Stock Market Analysis is a project built with React. On this website, you have the capability 
        to analyze and compare your stocks to enhance your profitability. The project utilizes a financial 
        API and boasts a responsive design, along with a clean UI. Potential future enhancements might include 
        features like Bitcoin tracking, company stock searches by name, and an expanded navigation bar
      `,
  techList: [
    'React',
    'Redux',
    'Styled Component',
    'HTML5',
  ],
  link: [
    'https://stock-analysis-io.netlify.app/',
    'https://github.com/PowerLevel9000/stock-market',
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

export default stockMarket;
