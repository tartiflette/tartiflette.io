// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
// const users = [
//   {
//     caption: 'User1',
//     // You will need to prepend the image path with your baseUrl
//     // if it is not '/', like: '/test-site/img/docusaurus.svg'.
//     image: '/img/tartiflette.svg',
//     infoLink: 'https://tartiflette.io',
//     pinned: true,
//   },
// ];

const siteConfig = {
  title: 'Tartiflette GraphQL Python Engine', // Title for your website.
  tagline: 'GraphQL Server implementation built with Python 3.6+',
  url: 'https://tartiflette.io', // Your website URL
  baseUrl: '/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'tartiflette.io',
  organizationName: 'tartiflette',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'welcome/what-is-tartiflette', label: 'What is Tartiflette?'},
    {doc: 'tutorial/getting-started', label: 'Tutorial'},
    {doc: 'api/engine', label: 'API'},
    {doc: 'plugins/introduction', label: 'Plugins'},
    {page: 'community', label: 'Community'},
  ],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: 'img/tartiflette-white.svg',
  footerIcon: 'img/tartiflette-square-t-white.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#232323',
    secondaryColor: '#E6F2FF',
  },

  cname: "tartiflette.io",

  editUrl: "https://github.com/tartiflette/tartiflette/edit/master/docs/",

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  highlight: {
    theme: 'atom-one-dark',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Dailymotion`,

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
  ],

  stylesheets: ['/css/code-block-buttons.css'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/tartiflette.png',
  twitterImage: 'img/tartiflette.png',

  usePrism: ["graphql", "python", "bash"],

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/tartiflette/tartiflette',

  gaTrackingId: "UA-64443-60",
  gaGtag: true,

  slackInviteWebsite: "http://slack-tartiflette-io.herokuapp.com",
  mediumUrl: "https://medium.com/dailymotion",
  twitterUsername: "dailymotionEng",
  twitterUrl: "https://twitter.com/dailymotionEng",

  algolia: {
    apiKey: '7703b63e56ba7316c49e8acae726a2ab',
    indexName: 'tartiflette',
  },
};

module.exports = siteConfig;
