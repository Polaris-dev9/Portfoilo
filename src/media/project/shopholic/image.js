import allDevice from './all-devices-black.png';
import desktop from './desktop.png';
import laptop from './laptop.png';
import mobile from './mobile.png';

const shopholic = {
  title: 'Shopholic',
  description: `
        Shopholic is an e-commerce application developed during the process of learning React, 
        guided by FreeCode Camp videos. Within this app, users can explore product details, add items to their cart, 
        and experience real-time price calculations. The application also includes a payment gateway for purchases, 
        as well as the ability to increase or decrease product quantities.
      `,
  techList: [
    'CSS',
    'React',
    'Context Api',
    'HTML',
    'Styled Components',
  ],
  link: [
    'https://react-e-commerce-store-react.netlify.app/',
    'https://github.com/PowerLevel9000/e-commerce',
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
      image: mobile,
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

export default shopholic;
