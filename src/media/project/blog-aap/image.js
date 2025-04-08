import allDevice from './all-devices-black.png';
import tablet from './tablet.png';
import desktop from './desktop.png';
import laptop from './laptop.png';
import mobile from './mobile.png';

const blog = {
  title: 'Blog App',
  description: `
        The blog constitutes a Ruby on Rails rooted endeavor. The Blog app exemplifies the quintessential blog website – a fully 
        operational digital space that elegantly showcases an array of posts. Beyond mere presentation, it empowers readers to 
        actively engage by seamlessly incorporating features such as comments and the ability to express appreciation by liking posts
        `,
  techList: [
    'Ruby',
    'Ruby on Rails',
    'PostgreSQL',
    'HTML5',
    'Sass',
  ],
  link: [
    'https://blog-9000.onrender.com/',
    'https://github.com/PowerLevel9000/Blog',
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
}; export default blog;
