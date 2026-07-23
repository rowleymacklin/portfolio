import config from '~/config.json';

export const navLinks = [
   {
     label: 'Home',
     pathname: '/',
     hash: '#intro',
   },
  {
    label: 'Info',
    pathname: '/info',
  },   
  {
    label: 'Skills',
    pathname: '/skills',
  },     
  {
    label: 'Testimonials',
    pathname: '/testimonials',
  },
  {
    label: 'Random',
    pathname: '/random',
  },  
];

export const socialLinks = [
  {
    label: 'Linkedin',
    url: 'https://uk.linkedin.com/in/rowleymacklin',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    url: 'mailto:rowley@rowleymacklin.com',
    icon: 'email',
  }, 
  {
    label: 'Call',
    url: 'tel:07947600444',
    icon: 'call',
  },  
  {
    label: 'Github',
    url: 'https://github.com/rowleymacklin',
    icon: 'github',
  },
];
