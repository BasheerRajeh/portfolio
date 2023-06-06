// gitprofile.config.js

const config = {
  github: {
    username: 'BasheerRajeh', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['react-testing', 'portfolio', 'freeCodeCamp', 'nextjs-notion-starter-kit'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'muhammadbasheerrajeh',
    twitter: '',
    mastodon: '',
    facebook: 'muhammadbasheerrajeh',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'basheer-rajeh',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: 'muhammadbasheerrajeh',
    website: '',
    phone: '+963 937 555 407',
    email: 'muhammadbasheerrajeh@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1Z461a5lnq5wMnknX44AHtSLbhBwCOPhs/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    // 'PHP',
    // 'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'C#',
    'ASP.Net Core',
    // 'Nest.js',
    'MySQL',
    'MongoDB',
    'Microsoft SQL Server',
    // 'PostgreSQL',
    'Git',
    // 'Docker',
    // 'PHPUnit',
    'HTML',
    'CSS',
    // 'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Independent',
      position: 'Self-Employed Freelancer',
      from: 'October 2022',
      to: 'Present',
      // companyLink: 'https://example.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Syrian Virtual University',
      degree: 'Master of Web science',
      from: '2022',
      to: 'present',
    },
    {
      institution: 'Higher Institute for Applied Sciences and Technology',
      degree: 'Bachelor',
      from: '2016',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Paloma Store',
      description:
        'Paloma Store is a beautiful, responsive, and static landing page designed for e-commerce and online stores.',
      imageUrl: 'https://fancy-florentine-3ec9e1.netlify.app/logo@2x.f37acd5c.png',
      link: 'https://fancy-florentine-3ec9e1.netlify.app/',
    },
    {
      title: 'Garden',
      description:
        'Garden static website repository. This website is created using HTML, CSS, and JavaScript, providing a responsive, beautiful, and professional design supporting both left-to-right (LTR) and right-to-left (RTL) languages',
      imageUrl: 'https://dreamy-madeleine-299563.netlify.app/images/logo-garden.png',
      link: 'https://dreamy-madeleine-299563.netlify.app/index.html',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'basheer-rajeh', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-PLCHZF2VES', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3523643',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      // 'light',
      'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,
};

export default config;
